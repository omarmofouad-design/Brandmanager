import fs from 'fs';
const D = '/tmp/claude-0/-home-user-Brandmanager/14920c6e-2b62-52d1-96a5-0cbcf6a84283/scratchpad/';
const CARDS = eval(fs.readFileSync(D + 'cards.js', 'utf8') + '; CARDS');

const CATS = ["Fixed duration","Efficacy","Safety and tolerability","Comparative and ITC","Access and cost","Dosing and administration","Other"];
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const today = new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });

/* number the objections in the order they appear in the printed document */
const ordered = [];
CATS.forEach(cat => CARDS.filter(c => c.cat === cat).forEach(c => ordered.push(c)));
ordered.forEach((c, i) => { c._n = i + 1; });

const css = `
@page { size: A4; margin: 18mm 16mm 20mm; }
:root{
  --navy:#10264C; --navy-2:#0A1B36; --red:#DA2B28;
  --ink:#14203A; --ink-2:#414D66; --ink-3:#66718A;
  --line:#C9D2E0; --surface:#F2F5FA;
  --sans:"Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;
  --mono:"Consolas","SFMono-Regular",Menlo,"Liberation Mono",monospace;
}
*,*::before,*::after{box-sizing:border-box;}
html,body{margin:0;padding:0;background:#fff;}
body{
  font-family:var(--sans); color:var(--ink);
  font-size:10.2pt; line-height:1.45;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}

/* ---------- cover ---------- */
.cover{ page-break-after:always; padding-top:6mm; }
.coverbar{ display:flex; align-items:center; gap:10px; }
.coverbar svg{ width:34px; height:34px; }
.coverbar b{ font-size:15pt; font-weight:800; color:var(--navy); letter-spacing:-.01em; }
h1{
  font-size:30pt; line-height:1.1; font-weight:800; color:var(--navy);
  letter-spacing:-.02em; margin:14mm 0 4mm;
}
.lede{ font-size:12pt; color:var(--ink-2); margin:0 0 10mm; max-width:135mm; }
.notice{
  border:1.5pt solid var(--red); border-left:5pt solid var(--red);
  background:#FDEEEE; padding:5mm 6mm; margin:0 0 9mm;
}
.notice b{ display:block; color:var(--red); font-size:11.5pt; margin-bottom:2mm; }
.notice p{ margin:0; font-size:9.6pt; color:var(--ink-2); }
.meta{ font-family:var(--mono); font-size:8.6pt; color:var(--ink-3); line-height:1.7; }
.meta span{ display:block; }

/* ---------- contents ---------- */
.contents{ page-break-after:always; }
h2.ct{
  font-size:15pt; color:var(--navy); font-weight:800; margin:0 0 5mm;
  padding-bottom:2mm; border-bottom:1.5pt solid var(--navy);
}
.ctgroup{ margin-bottom:6mm; break-inside:avoid; }
.ctgroup h3{
  font-family:var(--mono); font-size:8.4pt; letter-spacing:.09em; text-transform:uppercase;
  color:var(--ink-3); margin:0 0 2mm; font-weight:700;
}
.ctlist{ list-style:none; margin:0; padding:0; }
.ctlist li{ font-size:9.4pt; border-bottom:.4pt dotted var(--line); }
.ctlist a{ display:flex; gap:4mm; padding:1.1mm 0; color:var(--ink); text-decoration:none; }
.hint{ font-size:8.8pt; color:var(--ink-3); margin:-3mm 0 5mm; }
.backlink{ margin:-4mm 0 6mm; }
.backlink a{ font-family:var(--mono); font-size:8pt; letter-spacing:.06em; text-transform:uppercase;
  color:var(--ink-3); text-decoration:none; }
.ctlist .num{ font-family:var(--mono); color:var(--ink-3); flex:0 0 8mm; }

/* ---------- entries ---------- */
.cat-open{ page-break-before:always; }
.cat-open h2{
  font-size:16pt; color:var(--navy); font-weight:800; margin:0 0 6mm;
  padding-bottom:2.5mm; border-bottom:2pt solid var(--navy);
}
.entry{ break-inside:avoid; page-break-inside:avoid; margin:0 0 9mm; }
.eyebrow{
  font-family:var(--mono); font-size:8pt; letter-spacing:.09em; text-transform:uppercase;
  color:var(--ink-3); margin-bottom:1.5mm;
}
.obj{
  font-size:13pt; line-height:1.3; font-weight:700; color:var(--navy);
  margin:0 0 3mm;
}
.sec{
  font-family:var(--mono); font-size:7.8pt; letter-spacing:.1em; text-transform:uppercase;
  color:var(--ink-3); font-weight:700; margin:4mm 0 1.5mm;
}
.resp{
  border-left:2.5pt solid var(--navy); background:var(--surface);
  padding:3mm 4mm; margin:0;
}
.resp p{ margin:0 0 2mm; }
.resp p:last-child{ margin:0; }
.key{
  background:var(--navy); color:#fff; padding:3mm 4mm; margin:3mm 0 0;
  font-weight:600; font-size:10pt;
}
.key em{
  display:block; font-style:normal; font-family:var(--mono); font-size:7.4pt;
  letter-spacing:.1em; text-transform:uppercase; color:#A9B8D4; margin-bottom:1mm;
}
ul.data{ margin:0; padding-left:5mm; }
ul.data li{ margin:0 0 1.6mm; }
.cite{
  border:.6pt solid var(--line); padding:2.5mm 3.5mm; margin:0 0 2mm;
  font-family:var(--mono); font-size:8.2pt; line-height:1.5; color:var(--ink-2);
}
.cite b{ color:var(--ink-3); font-weight:700; }
.srcdate{ font-family:var(--mono); font-size:8.2pt; color:var(--ink-3); margin:2mm 0 0; }
`;

const mark = `<svg viewBox="0 0 64 64" aria-hidden="true">
  <rect width="64" height="64" rx="15" fill="#DA2B28"/>
  <path d="M32 6C25 20 18 27 4 32c14 5 21 12 28 26 7-14 14-21 28-26C46 27 39 20 32 6Z" fill="#fff"/>
  <path d="M32 20c-3 7-6 10-13 12 7 2 10 5 13 12 3-7 6-10 13-12-7-2-10-5-13-12Z" fill="#DA2B28"/>
</svg>`;

let h = '';
h += `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<title>CLL Objection Handler — BeOne Gulf</title><style>${css}</style></head><body>`;

/* cover */
h += `<section class="cover">
  <div class="coverbar">${mark}<b>BeOne</b></div>
  <h1>CLL Objection<br>Handler</h1>
  <p class="lede">BRUKINSA (zanubrutinib) · Gulf field team. ${ordered.length} physician objections, each with its approved response, the supporting data points, and the trial, source file and slide it was taken from.</p>
  <div class="notice">
    <b>Internal draft. Not MRC approved.</b>
    <p>Do not use with HCPs until reviewed. For internal review only — not for distribution outside BeOne.</p>
  </div>
  <div class="meta">
    <span>Generated ${esc(today)}</span>
    <span>${ordered.length} objections across ${CATS.length} categories</span>
    <span>Companion document: GAP_REPORT.md</span>
  </div>
</section>`;

/* contents */
h += `<section class="contents" id="contents"><h2 class="ct">Contents</h2>
  <p class="hint">Tap or click any objection to jump to it. Every category page links back here.</p>`;
CATS.forEach(cat => {
  const items = ordered.filter(c => c.cat === cat);
  if (!items.length) return;
  h += `<div class="ctgroup"><h3>${esc(cat)} — ${items.length}</h3><ul class="ctlist">`;
  items.forEach(c => { h += `<li><a href="#obj-${c._n}"><span class="num">${c._n}</span><span>${esc(c.obj)}</span></a></li>`; });
  h += `</ul></div>`;
});
h += `</section>`;

/* entries */
CATS.forEach(cat => {
  const items = ordered.filter(c => c.cat === cat);
  if (!items.length) return;
  h += `<section class="cat-open"><h2>${esc(cat)}</h2><p class="backlink"><a href="#contents">Back to contents</a></p>`;
  items.forEach(c => {
    h += `<article class="entry" id="obj-${c._n}">`;
    h += `<div class="eyebrow">Objection ${c._n} · ${esc(c.cat)}</div>`;
    h += `<p class="obj">&ldquo;${esc(c.obj)}&rdquo;</p>`;

    h += `<div class="sec">Response</div><div class="resp">`;
    c.resp.forEach(p => { h += `<p>${esc(p)}</p>`; });
    h += `</div>`;
    if (c.key) h += `<div class="key"><em>Key message</em>${esc(c.key)}</div>`;

    if (c.data && c.data.length) {
      h += `<div class="sec">Supporting data points</div><ul class="data">`;
      c.data.forEach(d => { h += `<li>${esc(d)}</li>`; });
      h += `</ul>`;
    }

    if (c.cites && c.cites.length) {
      h += `<div class="sec">Citation</div>`;
      c.cites.forEach(ct => {
        h += `<div class="cite"><b>Trial:</b> ${esc(ct.trial)}<br><b>File:</b> ${esc(ct.file)}<br><b>Location:</b> ${esc(ct.loc)}</div>`;
      });
    }
    if (c.date) h += `<p class="srcdate">Source date — ${esc(c.date)}</p>`;
    h += `</article>`;
  });
  h += `</section>`;
});

h += `</body></html>`;

fs.writeFileSync('/home/user/Brandmanager/cll-objection-handler-print.html', h);
console.log('print document written:', ordered.length, 'objections');
