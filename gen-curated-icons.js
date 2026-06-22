const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'node_modules/@phosphor-icons/core/assets/regular');
const OUT = '/tmp/curated-icon-code';
const MAX_CODE = 12000; // proven-safe per-call payload size

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// Global alphabetical order of ALL regular icons — used for grid placement so
// curated icons land in the same cells as the full import.
const sortedAll = fs.readdirSync(SRC)
  .filter(f => f.endsWith('.svg'))
  .map(f => f.replace(/\.svg$/, ''))
  .sort();

const curatedRaw = [
  'arrow-up','arrow-down','arrow-left','arrow-right','arrow-up-right','arrow-up-left','arrow-down-right','arrow-down-left','arrow-clockwise','arrow-counter-clockwise','arrow-line-up','arrow-line-down','arrow-line-left','arrow-line-right','arrows-left-right','arrows-down-up','arrows-clockwise','caret-up','caret-down','caret-left','caret-right','caret-double-left','caret-double-right','caret-double-up','caret-double-down','caret-up-down','caret-circle-down',
  'file','file-text','file-plus','file-arrow-down','file-arrow-up','file-pdf','file-csv','file-doc','file-xls','file-image','file-zip','files','copy','clipboard-text','paperclip','download-simple','upload-simple','export','printer',
  'folder','folder-open','folder-plus','folder-simple',
  'database','hard-drives','stack','table','cloud','cloud-arrow-up','cloud-arrow-down',
  'house','list','list-dashes','list-checks','magnifying-glass','magnifying-glass-plus','gear','gear-six','sliders-horizontal','funnel','funnel-simple','sort-ascending','sort-descending','user','user-circle','users','bell','bell-ringing','x','check','plus','minus','dots-three','dots-three-vertical','dots-nine','dots-six','sidebar','sidebar-simple','sign-out','sign-in','question','info','warning','warning-circle','check-circle','x-circle','eye','eye-slash','lock','lock-open','calendar','calendar-blank','clock','chat-circle','chat-circle-text','envelope','trash','pencil-simple','plus-circle','bookmark-simple','star','heart','link','link-simple','share-network','circle','square','arrow-square-out','plus-square',
];

// Dedupe, preserve first-seen order
const seen = new Set();
const curated = [];
for (const n of curatedRaw) {
  if (!seen.has(n)) { seen.add(n); curated.push(n); }
}

const missing = [];
const icons = [];
for (const name of curated) {
  const fp = path.join(SRC, name + '.svg');
  if (!fs.existsSync(fp)) { missing.push(name); continue; }
  let svg = fs.readFileSync(fp, 'utf8').trim();
  let inner = svg
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();
  inner = inner.replace(/"/g, "'");
  if (/[`$"\\]/.test(inner) || /[`$"\\]/.test(name)) {
    throw new Error('unsafe char in ' + name);
  }
  const idx = sortedAll.indexOf(name);
  if (idx < 0) { missing.push(name); continue; }
  icons.push({ n: name, p: inner, idx });
}

function makeCode(data) {
  const dataLit = '[' + data.map(o => '{n:`' + o.n + '`,p:`' + o.p + '`,idx:' + o.idx + '}').join(',') + ']';
  const parts = [
    "const RUN_ID='ds-build-2026-icons',COLS=24,CELL=44,GX=64,GY=360;",
    'const D=' + dataLit + ';',
    "const page=figma.root.children.find(p=>p.name==='Icons');",
    'await figma.setCurrentPageAsync(page);',
    "const section=page.children.find(n=>n.type==='SECTION'&&n.getSharedPluginData('dsb','key')==='section/icons');",
    "const existing=new Set(page.findAllWithCriteria({types:['COMPONENT']}).map(c=>c.name));",
    "const W=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' fill='currentColor'>`;",
    'let createdCount=0;const skipped=[],failed=[];',
    'for(let i=0;i<D.length;i++){const o=D[i],name=`Icon/`+o.n,idx=o.idx;',
    'if(existing.has(name)){skipped.push(o.n);continue;}',
    'try{const comp=figma.createComponent();comp.resizeWithoutConstraints(24,24);comp.name=name;',
    "const sf=figma.createNodeFromSvg(W+o.p+`</svg>`);comp.appendChild(sf);sf.rescale(24/sf.width);sf.x=0;sf.y=0;sf.clipsContent=false;",
    "for(const v of sf.findAllWithCriteria({types:['VECTOR']})){v.fills=[{type:'SOLID',color:{r:0.1,g:0.1,b:0.1}}];v.strokes=[];}",
    'section.appendChild(comp);const col=idx%COLS,row=Math.floor(idx/COLS);comp.x=GX+col*CELL;comp.y=GY+row*CELL;',
    "comp.setSharedPluginData('dsb','run_id',RUN_ID);comp.setSharedPluginData('dsb','key',`component/icon/`+o.n);",
    'createdCount++;}catch(e){failed.push({n:o.n,e:String(e)});}}',
    'return {createdCount,skipped:skipped.length,skippedNames:skipped,failed};',
  ];
  const code = parts.join('');
  if (/["\\\n]/.test(code)) throw new Error('code contains forbidden char');
  return code;
}

// Greedily pack icons into files so each generated code file < MAX_CODE chars.
const batches = [];
let i = 0;
while (i < icons.length) {
  let lo = 1, hi = icons.length - i, best = 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const code = makeCode(icons.slice(i, i + mid));
    if (code.length <= MAX_CODE) { best = mid; lo = mid + 1; } else { hi = mid - 1; }
  }
  batches.push({ offset: i, count: best });
  i += best;
}

const manifest = [];
batches.forEach((b, bi) => {
  const data = icons.slice(b.offset, b.offset + b.count);
  const code = makeCode(data);
  const idx = String(bi).padStart(2, '0');
  const fp = path.join(OUT, `curated-${idx}.js`);
  fs.writeFileSync(fp, code);
  manifest.push({ file: fp, count: b.count, codeLen: code.length, first: data[0].n, last: data[data.length - 1].n });
});

fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify({
  curatedUnique: curated.length,
  found: icons.length,
  missing,
  numFiles: batches.length,
  maxCodeLen: manifest.length ? Math.max(...manifest.map(m => m.codeLen)) : 0,
}, null, 2));
