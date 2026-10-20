export type PricesLocale = 'ja' | 'en' | 'zh';

export type TranslatedPriceRow = {
  name: string;
  parentName?: string;
  description?: string;
  summary: string;
};

export const pricePageCopy = {
  ja: {
    lang: 'ja',
    schemaName: 'yueclinic 料金表',
    eyebrow: '目元専門 yueclinic',
    title: 'メニュー・料金表',
    oneEyeDiscount: '＊片目は３０％off',
    campaignLabel: 'キャンペーン中｜特別割引額でご案内中',
    campaignPrices: '二重埋没法 ¥68,000 ／ 眉下切開 ¥120,000',
    campaignCondition: '症例写真にご協力いただける方が対象です。適応や条件はカウンセリングで確認します。',
    scrollCue: '右にスクロール →',
    procedureHeader: '施術',
    monitorHeader: 'モニター価格',
    standardHeader: '通常料金',
    contentHeader: '内容',
    detailsHeader: '詳細',
    detailsLabel: '詳細',
    monitorLabel: 'モニター価格',
    regularLabel: '定価',
    footnote:
      '※通常のゆえクリ美容外科手術では、診察料および当院術後の抜糸代は施術料金に含まれており無料です。「梶原アイクリニック紹介関連」の受診料・抜糸料は、福岡の梶原アイクリニックで手術を希望される方向けの別枠料金です。',
    ctaLabel: 'LINEで相談・予約する',
    ctaHref: 'https://lin.ee/VqhBREq',
  },
  en: {
    lang: 'en',
    schemaName: 'yueclinic eye surgery price list',
    eyebrow: 'Eye-focused cosmetic surgery | yueclinic',
    title: 'Treatment & Price List',
    oneEyeDiscount: '* One eye: 30% off',
    campaignLabel: 'Special discount prices available',
    campaignPrices: 'Double eyelid suture ¥68,000 / Brow lift ¥120,000',
    campaignCondition:
      'Discounted prices apply to patients who agree to clinical photography. Eligibility and conditions are confirmed during consultation.',
    scrollCue: 'Scroll right →',
    procedureHeader: 'Procedure',
    monitorHeader: 'Photo-monitor price',
    standardHeader: 'Standard price',
    contentHeader: 'Description',
    detailsHeader: 'Details',
    detailsLabel: 'Details (Japanese)',
    monitorLabel: 'Photo-monitor price',
    regularLabel: 'Standard price',
    footnote:
      'Consultation, anesthesia, medication, director request, suture removal after surgery performed at yueclinic, and Japanese consumption tax are included in the displayed fees. The Kajiwara Eye Clinic referral visit and postoperative suture-removal fees are separate charges only for patients receiving surgery at Kajiwara Eye Clinic in Fukuoka.',
    ctaLabel: 'Contact via Instagram DM',
    ctaHref: 'https://www.instagram.com/dr_kobayashi',
  },
  zh: {
    lang: 'zh-CN',
    schemaName: 'yueclinic 眼部手术价格表',
    eyebrow: '眼部整形专科 yueclinic',
    title: '项目与价格表',
    oneEyeDiscount: '＊单眼手术减价30%',
    campaignLabel: '活动期间｜可享特别优惠价格',
    campaignPrices: '双眼皮埋线 ¥68,000 ／ 眉下切口提眉术 ¥120,000',
    campaignCondition: '优惠价格适用于同意配合拍摄案例照片的患者。是否适用及具体条件将在面诊时确认。',
    scrollCue: '向右滑动 →',
    procedureHeader: '手术项目',
    monitorHeader: '案例照片优惠价',
    standardHeader: '通常价格',
    contentHeader: '内容',
    detailsHeader: '详情',
    detailsLabel: '详情（日文）',
    monitorLabel: '案例照片优惠价',
    regularLabel: '通常价格',
    footnote:
      '所示价格已包含在yueclinic接受通常美容外科手术时所需的面诊费、麻醉费、药费、院长指定费、本院手术后的拆线费及日本消费税。“梶原眼科相关介绍”中的就诊费和拆线费，仅适用于计划在福冈梶原眼科接受手术的患者，属于另行收费项目。',
    ctaLabel: '通过 Instagram 私信咨询预约',
    ctaHref: 'https://www.instagram.com/dr_kobayashi',
  },
} as const;

export const translatedCategoryNames = {
  en: {
    eyes: 'Treatment fees',
  },
  zh: {
    eyes: '手术项目及价格',
  },
} as const;

export const translatedRows: Record<'en' | 'zh', Record<string, TranslatedPriceRow>> = {
  en: {
    included_basic_fees: {
      name: 'Consultation, anesthesia, medication, director request, yueclinic suture removal, and tax',
      parentName: 'Included fees',
      description: 'Included with standard yueclinic procedures',
      summary: 'These essential fees are included in the displayed treatment price, so there are no separate basic charges added later.',
    },
    futae_maibotsu: {
      name: 'Double eyelid suture (6-loop natural adhesion method)',
      parentName: 'Double eyelid suture',
      description: 'Six-point natural adhesion method',
      summary: 'Designed to distribute fixation across a wider area than two-point fixation and conventional natural adhesion methods.',
    },
    uwamabuta_dasshi_in_futae: {
      name: 'Upper eyelid fat removal',
      parentName: 'Double eyelid suture',
      description: 'Can be added to double eyelid suture when appropriate',
      summary: 'May be combined with double eyelid suture for patients with marked upper-eyelid puffiness.',
    },
    ganken_masaki: {
      name: 'Masaki-style non-incisional ptosis correction',
      parentName: 'Non-incisional ptosis correction',
      description: 'Muller muscle and levator aponeurosis tacking',
      summary: 'The Muller muscle and levator aponeurosis are secured with sutures without a skin incision. It may also be combined with a brow lift.',
    },
    mayushita_sekka: {
      name: 'Brow lift (sub-brow excision)',
      summary: 'Removes excess upper-eyelid skin through an incision placed along the lower edge of the eyebrow.',
    },
    ura_dasshi: {
      name: 'Transconjunctival fat removal',
      parentName: 'Under-eye bag treatment',
      description: 'Fat removal only',
      summary: 'Removes protruding under-eye fat through the inside of the lower eyelid.',
    },
    ura_hamura: {
      name: 'Transconjunctival fat repositioning (internal Hamra)',
      parentName: 'Under-eye bag treatment',
      description: 'Fat repositioning through the inside of the eyelid',
      summary: 'Repositions under-eye fat into the hollow without making a skin incision.',
    },
    shita_ganken: {
      name: 'Lower eyelid skin removal',
      parentName: 'Under-eye bag treatment',
      description: 'Lower eyelid skin excision',
      summary: 'Removes excess skin to improve lower-eyelid laxity and fine wrinkles.',
    },
    omote_hamura: {
      name: 'External Hamra procedure',
      parentName: 'Under-eye bag treatment',
      description: 'Fat repositioning and tissue adjustment through a skin incision',
      summary: 'Combines fat repositioning with treatment of excess skin and the orbicularis oculi muscle.',
    },
    megashira_sekkai: {
      name: 'Medial canthoplasty',
      summary: 'Reduces the epicanthal fold to make the inner eye appear more open.',
    },
    scarless_futae: {
      name: 'Full-incision double eyelid surgery',
      description: 'Standard incision / scar-conscious technique',
      summary: 'Uses an incision to address eyelid thickness or laxity that is difficult to correct with sutures alone.',
    },
    scarless_ganken: {
      name: 'Incisional ptosis correction',
      description: 'Standard incision / scar-conscious technique',
      summary: 'Adjusts the eyelid-opening muscles and aponeurosis to improve a tired or sleepy appearance.',
    },
    kajihara_referral_visit: {
      name: 'Referral consultation for Kajiwara Eye Clinic',
      parentName: 'Kajiwara Eye Clinic referral services',
      description: 'Includes initial consultation and examination',
      summary: 'For patients considering ptosis or excess-eyelid-skin surgery at Kajiwara Eye Clinic in Fukuoka. Consultation for standard yueclinic surgery is free.',
    },
    kajihara_postop_suture_removal: {
      name: 'Suture removal after surgery at Kajiwara Eye Clinic',
      parentName: 'Kajiwara Eye Clinic referral services',
      description: 'Postoperative suture removal for Kajiwara Eye Clinic patients',
      summary: 'For patients who underwent surgery at Kajiwara Eye Clinic. Suture removal after surgery performed at yueclinic is free.',
    },
  },
  zh: {
    included_basic_fees: {
      name: '面诊费、麻醉费、药费、院长指定费、本院术后拆线费及消费税',
      parentName: '基本费用',
      description: '已包含在yueclinic通常手术价格中',
      summary: '所示手术价格已包含必要的基本费用，不会在之后另行追加这些项目的费用。',
    },
    futae_maibotsu: {
      name: '双眼皮埋线（自然粘连法6往返）',
      parentName: '双眼皮埋线',
      description: '自然粘连法6点',
      summary: '与两点固定及传统自然粘连法相比，更重视扩大固定范围并分散受力。',
    },
    uwamabuta_dasshi_in_futae: {
      name: '上眼睑去脂',
      parentName: '双眼皮埋线',
      description: '适合时可与双眼皮埋线同时进行',
      summary: '对于上眼睑浮肿较明显的患者，可与双眼皮埋线同时进行。',
    },
    ganken_masaki: {
      name: '真崎式无切口上睑下垂矫正',
      parentName: '无切口上睑下垂矫正',
      description: '缪勒肌及提上睑肌腱膜缝合固定',
      summary: '不切开皮肤，以缝线固定缪勒肌和提上睑肌腱膜，也可根据情况与眉下切口提眉术联合进行。',
    },
    mayushita_sekka: {
      name: '眉下切口提眉术',
      summary: '沿眉毛下缘切开并去除多余的上眼睑皮肤，改善眼皮遮盖和松弛。',
    },
    ura_dasshi: {
      name: '经结膜眼袋脂肪去除',
      parentName: '眼袋及黑眼圈手术',
      description: '仅去除脂肪',
      summary: '从下眼睑内侧去除造成眼袋凸出的脂肪。',
    },
    ura_hamura: {
      name: '内路眼袋脂肪重置（内切Hamra）',
      parentName: '眼袋及黑眼圈手术',
      description: '从眼睑内侧进行脂肪移位',
      summary: '不切开皮肤，将眼袋脂肪移动并填补下方凹陷。',
    },
    shita_ganken: {
      name: '下眼睑松弛皮肤去除',
      parentName: '眼袋及黑眼圈手术',
      description: '下眼睑皮肤切除',
      summary: '去除多余皮肤，改善下眼睑松弛及细纹。',
    },
    omote_hamura: {
      name: '外路眼袋脂肪重置（外切Hamra）',
      parentName: '眼袋及黑眼圈手术',
      description: '经皮肤切口进行脂肪移位及组织处理',
      summary: '通过皮肤切口综合处理脂肪移位、多余皮肤及眼轮匝肌。',
    },
    megashira_sekkai: {
      name: '开内眼角',
      summary: '改善蒙古褶，使眼睛内侧看起来更加开阔。',
    },
    scarless_futae: {
      name: '全切双眼皮',
      description: '常规切开／注重疤痕的切开方式',
      summary: '通过切开处理仅靠埋线较难改善的眼睑厚重或皮肤松弛。',
    },
    scarless_ganken: {
      name: '切开法上睑下垂矫正',
      description: '常规切开／注重疤痕的切开方式',
      summary: '调整与睁眼相关的肌肉及腱膜，改善困倦感和无神感。',
    },
    kajihara_referral_visit: {
      name: '前往梶原眼科手术的介绍就诊',
      parentName: '梶原眼科介绍相关',
      description: '包含初诊费及检查费',
      summary: '适用于计划在福冈梶原眼科接受上睑下垂或眼睑皮肤松弛手术的患者。yueclinic通常手术的面诊费为免费。',
    },
    kajihara_postop_suture_removal: {
      name: '梶原眼科手术后的拆线',
      parentName: '梶原眼科介绍相关',
      description: '梶原眼科术后拆线',
      summary: '适用于在梶原眼科接受手术后的患者。在yueclinic接受手术后的拆线费为免费。',
    },
  },
};
