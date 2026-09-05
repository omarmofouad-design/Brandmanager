#!/usr/bin/env node
/*
 * build.mjs — assemble the tool from its parts.
 *
 *   node build.mjs            writes cll-objection-handler.html (standalone)
 *   node build.mjs --parts D  reads the part files from directory D
 *
 * Parts, in order:
 *   shell_head.txt   <title> + <style>
 *   shell_body.txt   markup, ending with <script>
 *   cards.js         objection card data
 *   salesdata.js     ALLnONE figures
 *   shell_app.txt    objection-handler logic  (trailing </script> stripped)
 *   sales_app.txt    sales / entry / ALLnONE logic
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const i = process.argv.indexOf('--parts');
const P = i > -1 ? process.argv[i + 1] : HERE;
const read = (f) => {
  const local = path.join(P, f);
  if (fs.existsSync(local)) return fs.readFileSync(local, 'utf8');
  return fs.readFileSync(path.join(P, 'src-' + f), 'utf8');   // repo copies
};

const head = read('shell_head.txt');
const body = read('shell_body.txt');
const cards = read('cards.js');
const sales = read('salesdata.js');
const app = read('shell_app.txt').split('</script>')[0];
const salesApp = read('sales_app.txt');

const inner =
  body.trimEnd().replace(/<script>\s*$/, '<script>') + '\n' +
  cards + '\n' + sales + '\n' + app + '\n' + salesApp + '\n' +
  '</script>\n\n' +
  '<textarea id="fallback" readonly aria-label="Exported data" placeholder="Your export will appear here."></textarea>\n';

const doc =
  '<!DOCTYPE html>\n<html lang="en">\n<head>\n' +
  '<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
  head.trimEnd() + '\n</head>\n<body>\n' + inner + '</body>\n</html>\n';

fs.writeFileSync(path.join(HERE, 'cll-objection-handler.html'), doc);

/* the hosted build is the same page without the document wrapper */
fs.writeFileSync(path.join(P, 'artifact.html'), head.trimEnd() + '\n' + inner);

const tags = (s, t) => (s.match(new RegExp(t, 'g')) || []).length;
console.log('built cll-objection-handler.html —',
  doc.length, 'bytes |',
  'head', tags(doc, '<head>') + '/' + tags(doc, '</head>'),
  'body', tags(doc, '<body>') + '/' + tags(doc, '</body>'),
  'script', tags(doc, '<script>') + '/' + tags(doc, '</script>'));
if (/claude|anthropic/i.test(doc)) console.error('WARNING: build contains a vendor reference');
