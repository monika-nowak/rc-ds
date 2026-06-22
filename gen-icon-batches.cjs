const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'node_modules/@phosphor-icons/core/assets/regular');
const OUT = '/tmp/icon-code';
const MAX_CODE = 12000; // proven-safe per-call payload size

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC).filter(f => f.endsWith('.svg')).sort();

const icons = files.map(f => {
  const name = f.replace(/\.svg$/, '');
  let svg = fs.readFileSync(path.join(SRC, f), 'utf8').trim();
  let inner = svg
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();
  // Use single-quoted attributes so the JS source needs no double-quotes/backslashes.
  inner = inner.replace(/"/g, "'");
  if (/[`$"\\]/.test(inner) || /[`$"\\]/.test(name)) {
    throw new Error('unsafe char in ' + name);
  }
  return { n: name, p: inner };
});

// Emit code with ZERO double-quotes, backslashes, or newlines so it can be embedded
// verbatim as a JSON string argument. All JS strings use backticks or single quotes;
// SVG attributes use single quotes; the whole script is a single line.
function makeCode(offset, data) {
  const dataLit = '[' + data.map(o => '{n:`' + o.n + '`,p:`' + o.p + '`}').join(',') + ']';
  const parts = [
    "const RUN_ID='ds-build-2026-icons',COLS=24,CELL=44,GX=64,GY=360,OFFSET=" + offset + ';',
    'const D=' + dataLit + ';',
    "const page=figma.root.children.find(p=>p.name==='Icons');",
    'await figma.setCurrentPageAsync(page);',
    "const section=page.children.find(n=>n.type==='SECTION'&&n.getSharedPluginData('dsb','key')==='section/icons');",
    "const existing=new Set(page.findAllWithCriteria({types:['COMPONENT']}).map(c=>c.name));",
    "const W=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' fill='currentColor'>`;",
    'let createdCount=0;const skipped=[],failed=[];',
    'for(let i=0;i<D.length;i++){const o=D[i],name=`Icon/`+o.n,idx=OFFSET+i;',
    'if(existing.has(name)){skipped.push(o.n);continue;}',
    'try{const comp=figma.createComponent();comp.resizeWithoutConstraints(24,24);comp.name=name;',
    "const sf=figma.createNodeFromSvg(W+o.p+`</svg>`);comp.appendChild(sf);sf.rescale(24/sf.width);sf.x=0;sf.y=0;sf.clipsContent=false;",
    "for(const v of sf.findAllWithCriteria({types:['VECTOR']})){v.fills=[{type:'SOLID',color:{r:0.1,g:0.1,b:0.1}}];v.strokes=[];}",
    'section.appendChild(comp);const col=idx%COLS,row=Math.floor(idx/COLS);comp.x=GX+col*CELL;comp.y=GY+row*CELL;',
    "comp.setSharedPluginData('dsb','run_id',RUN_ID);comp.setSharedPluginData('dsb','key',`component/icon/`+o.n);",
    'createdCount++;}catch(e){failed.push({n:o.n,e:String(e)});}}',
    'return {batch:OFFSET,createdCount,skipped:skipped.length,failed};',
  ];
  const code = parts.join('');
  if (/["\\\n]/.test(code)) throw new Error('code contains forbidden char at batch ' + offset);
  return code;
}

// Greedily pack icons into batches so each generated code file < MAX_CODE chars.
const batches = [];
let i = 0;
while (i < icons.length) {
  let lo = 1, hi = icons.length - i, best = 1;
  // binary search largest count that fits
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const code = makeCode(i, icons.slice(i, i + mid));
    if (code.length <= MAX_CODE) { best = mid; lo = mid + 1; } else { hi = mid - 1; }
  }
  batches.push({ offset: i, count: best });
  i += best;
}

const manifest = [];
batches.forEach((b, bi) => {
  const data = icons.slice(b.offset, b.offset + b.count);
  const code = makeCode(b.offset, data);
  const idx = String(bi).padStart(2, '0');
  const fp = path.join(OUT, `batch-${idx}.js`);
  fs.writeFileSync(fp, code);
  manifest.push({ file: fp, offset: b.offset, count: b.count, codeLen: code.length, first: data[0].n, last: data[data.length - 1].n });
});

fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify({
  totalIcons: icons.length,
  numBatches: batches.length,
  maxCodeLen: Math.max(...manifest.map(m => m.codeLen)),
  minCount: Math.min(...batches.map(b => b.count)),
  maxCount: Math.max(...batches.map(b => b.count)),
}, null, 2));
