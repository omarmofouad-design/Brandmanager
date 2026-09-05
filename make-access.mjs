#!/usr/bin/env node
/*
 * make-access.mjs — generate the sign-in values for cll-objection-handler.html
 *
 *   node make-access.mjs "SharedPassword" team-emails.txt
 *   node make-access.mjs "SharedPassword" omar@x.com sara@x.com
 *
 * Prints the two lines to paste into the tool, replacing the existing
 * PASSWORD_HASH and ALLOWED_EMAILS values.
 *
 * Emails and the password are stored as hashes so neither appears in
 * readable form in the file. Note this is a deterrent, not access
 * control: any page served to a browser can be read, and a determined
 * reader can test guesses against these hashes offline. Keep real
 * restriction at the hosting layer.
 */
import fs from 'fs';

const hash = (salted) => {
  let x = 5381;
  for (let i = 0; i < salted.length; i++) x = ((x << 5) + x + salted.charCodeAt(i)) | 0;
  return (x >>> 0).toString(16);
};
const emailHash = (e) => hash('bg1|' + String(e).trim().toLowerCase());
const codeHash  = (c) => hash('bg1|' + String(c).trim().toUpperCase());

const [, , password, ...rest] = process.argv;
if (!password) {
  console.error('Usage: node make-access.mjs "SharedPassword" [emails.txt | email ...]');
  process.exit(1);
}

let emails = [];
for (const arg of rest) {
  if (fs.existsSync(arg)) {
    emails.push(...fs.readFileSync(arg, 'utf8').split(/[\s,;]+/));
  } else {
    emails.push(arg);
  }
}
emails = [...new Set(
  emails.map(e => e.trim().toLowerCase()).filter(e => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e))
)].sort();

console.log('\n// paste these two lines into cll-objection-handler.html\n');
console.log(`var PASSWORD_HASH  = "${codeHash(password)}";`);
if (!emails.length) {
  console.log('var ALLOWED_EMAILS = [];      /* empty means any work email is accepted */');
} else {
  console.log('var ALLOWED_EMAILS = [' + emails.map(e => `"${emailHash(e)}"`).join(',') + '];');
}
console.log(`\n// ${emails.length} email${emails.length === 1 ? '' : 's'} on the list`);
if (emails.length) {
  console.log('// (addresses are not written anywhere in the output above)');
  emails.forEach(e => console.error('   listed: ' + e));   // stderr, so it stays out of a piped paste
}
