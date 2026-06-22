import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const curatedFile = fs.readFileSync(
  path.join(__dirname, '../src/icons/curated-icons.ts'),
  'utf8',
);
const arrayMatch = curatedFile.match(
  /export const CURATED_ICON_NAMES = \[([\s\S]*?)\] as const/,
);
if (!arrayMatch) throw new Error('Could not parse CURATED_ICON_NAMES');
const names = [...arrayMatch[1].matchAll(/'([^']+)'/g)].map((match) => match[1]);

function toPascalCase(kebab) {
  return kebab
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

const pascalNames = [...new Set(names.map(toPascalCase))].sort();
const importLine = `import { ${pascalNames.join(', ')} } from '@phosphor-icons/react';`;
const entries = names.map((name) => `  '${name}': ${toPascalCase(name)},`);

const content = `/** Generated — curated Phosphor icon map */\nimport type { PhosphorIconComponent } from './phosphor';\n${importLine}\n\nexport const CURATED_ICON_MAP: Record<string, PhosphorIconComponent> = {\n${entries.join('\n')}\n};\n`;

fs.writeFileSync(path.join(__dirname, '../src/icons/curated-map.ts'), content);
console.log(`Wrote ${names.length} curated icon mappings`);
