#!/bin/bash
for file in src/app/cases/page.tsx src/app/columns/page.tsx src/app/faq/page.tsx src/app/privacy/page.tsx src/app/cancel/page.tsx src/app/consent-print/page.tsx; do
  if [ -f "$file" ]; then
    # Get the component name from the export default function line
    comp=$(grep -o "export default function [A-Za-z0-9]*" "$file" | awk '{print $4}')
    
    # Very basic title mapping based on component name or file path
    title=""
    desc=""
    if [[ "$file" == *"faq"* ]]; then title="よくあるご質問"; desc="yueclinicによく寄せられるご質問とその回答をまとめています。"; fi
    if [[ "$file" == *"cases"* ]]; then title="症例写真"; desc="yueclinicの目元整形・眼瞼下垂治療などの症例写真をご紹介します。"; fi
    if [[ "$file" == *"columns"* ]]; then title="院長のつぶやき"; desc="yueclinic院長による、美容医療や眼形成に関するコラム・つぶやきです。"; fi
    if [[ "$file" == *"privacy"* ]]; then title="プライバシーポリシー"; desc="yueclinicのプライバシーポリシー（個人情報保護方針）について。"; fi
    if [[ "$file" == *"cancel"* ]]; then title="キャンセルポリシー"; desc="yueclinicの予約キャンセル規定（キャンセルポリシー）についてのご案内です。"; fi
    if [[ "$file" == *"consent-print"* ]]; then title="未成年同意書（印刷用）"; desc="未成年同意書の印刷用ページです。"; fi
    
    # If the file already has 'export const metadata', we skip or replace. But for safety, let's just insert it before export default function if not present.
    if ! grep -q "export const metadata" "$file"; then
      awk -v t="$title" -v d="$desc" '/export default function/ {
        print "import type { Metadata } from '\''next'\'';\n"
        print "export const metadata: Metadata = {"
        print "  title: '\''" t "'\'',"
        print "  description: '\''" d "'\'',"
        print "};\n"
      } {print}' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    fi
  fi
done
