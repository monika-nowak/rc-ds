import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const srcDir = path.join(
  root,
  'node_modules/@phosphor-icons/core/assets/regular',
);
const outFile = path.join(root, 'src/icons/all-icons.ts');

const names = fs
  .readdirSync(srcDir)
  .filter((file) => file.endsWith('.svg'))
  .map((file) => file.replace(/\.svg$/, ''))
  .sort();

const content = `/** Generated from @phosphor-icons/core — do not edit manually */\nexport const ALL_ICON_NAMES = ${JSON.stringify(names, null, 2)} as const;\nexport type AllIconName = (typeof ALL_ICON_NAMES)[number];\n`;

fs.writeFileSync(outFile, content);
console.log(`Wrote ${names.length} icon names to ${outFile}`);
