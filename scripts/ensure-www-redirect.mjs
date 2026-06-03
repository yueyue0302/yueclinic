const token = process.env.CLOUDFLARE_API_TOKEN;
const zoneName = process.env.CLOUDFLARE_ZONE_NAME || 'yueclinic.com';
const apiBase = 'https://api.cloudflare.com/client/v4';

if (!token) {
  throw new Error('CLOUDFLARE_API_TOKEN is required');
}

async function cloudflare(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.success === false) {
    const error = new Error(
      `${options.method || 'GET'} ${path} failed: ${response.status} ${JSON.stringify(payload.errors || payload)}`,
    );
    error.status = response.status;
    throw error;
  }
  return payload.result;
}

async function getZoneId() {
  const zones = await cloudflare(`/zones?name=${encodeURIComponent(zoneName)}`);
  const zone = zones.find((item) => item.name === zoneName);
  if (!zone) throw new Error(`Cloudflare zone not found: ${zoneName}`);
  return zone.id;
}

async function ensureWwwDns(zoneId) {
  const hostname = `www.${zoneName}`;
  const records = await cloudflare(`/zones/${zoneId}/dns_records?name=${encodeURIComponent(hostname)}`);
  const exactRecords = records.filter((record) => record.name === hostname);
  const existing = exactRecords.find((record) => ['A', 'AAAA', 'CNAME'].includes(record.type));

  if (!existing) {
    await cloudflare(`/zones/${zoneId}/dns_records`, {
      method: 'POST',
      body: JSON.stringify({
        type: 'A',
        name: 'www',
        content: '192.0.2.1',
        proxied: true,
        ttl: 1,
        comment: 'Placeholder record for www to apex redirect rule',
      }),
    });
    console.log(`Created proxied placeholder DNS record for ${hostname}`);
    return;
  }

  if (!existing.proxied) {
    await cloudflare(`/zones/${zoneId}/dns_records/${existing.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ proxied: true }),
    });
    console.log(`Enabled Cloudflare proxy for ${hostname}`);
    return;
  }

  console.log(`DNS record already exists for ${hostname}`);
}

function wwwRedirectRule() {
  return {
    ref: 'www_to_apex_yueclinic',
    description: 'Redirect www.yueclinic.com to yueclinic.com',
    expression: `(http.host eq "www.${zoneName}")`,
    action: 'redirect',
    action_parameters: {
      from_value: {
        target_url: {
          expression: `concat("https://${zoneName}", http.request.uri.path)`,
        },
        status_code: 301,
        preserve_query_string: true,
      },
    },
    enabled: true,
  };
}

function writableRule(rule) {
  const result = {};
  for (const key of ['id', 'ref', 'description', 'expression', 'action', 'action_parameters', 'enabled', 'logging']) {
    if (Object.prototype.hasOwnProperty.call(rule, key)) {
      result[key] = rule[key];
    }
  }
  return result;
}

async function getRedirectRuleset(zoneId) {
  const phase = 'http_request_dynamic_redirect';
  try {
    return await cloudflare(`/zones/${zoneId}/rulesets/phases/${phase}/entrypoint`);
  } catch (error) {
    if (error.status === 404) return null;
    throw error;
  }
}

async function ensureRedirectRule(zoneId) {
  const phase = 'http_request_dynamic_redirect';
  const rule = wwwRedirectRule();
  const ruleset = await getRedirectRuleset(zoneId);

  if (!ruleset) {
    await cloudflare(`/zones/${zoneId}/rulesets`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Redirect rules ruleset',
        kind: 'zone',
        phase,
        rules: [rule],
      }),
    });
    console.log('Created www to apex redirect ruleset');
    return;
  }

  const rules = (ruleset.rules || [])
    .filter((existingRule) => existingRule.ref !== rule.ref)
    .map(writableRule);
  rules.push(rule);

  await cloudflare(`/zones/${zoneId}/rulesets/${ruleset.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: ruleset.name || 'Redirect rules ruleset',
      kind: ruleset.kind || 'zone',
      phase: ruleset.phase || phase,
      rules,
    }),
  });
  console.log('Updated www to apex redirect rule');
}

const zoneId = await getZoneId();
await ensureWwwDns(zoneId);
await ensureRedirectRule(zoneId);
