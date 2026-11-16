import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import ts from 'typescript';
const source = readFileSync(new URL('../src/lib/date-personality.ts', import.meta.url), 'utf8');
const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2017 } }).outputText;
const { getLuckyNumber, isValidDate } = await import('data:text/javascript;base64,' + Buffer.from(javascript).toString('base64'));

const designs = JSON.parse(readFileSync(new URL('../src/lib/design/personalities.json', import.meta.url), 'utf8'));

test('uses all date digits, preserves single digits, and reduces multiples of nine to nine', () => {
  assert.equal(getLuckyNumber('2026', '11', '16'), 1);
  assert.equal(getLuckyNumber('1990', '12', '30'), 7);
  assert.equal(getLuckyNumber('2000', '1', '1'), 4);
  assert.equal(getLuckyNumber('2000', '01', '06'), 9);
  assert.equal(getLuckyNumber('2000', '01', '01'), getLuckyNumber('2000', '1', '1'));
});

test('validates real dates, including leap years and century boundaries', () => {
  for (const date of [['2000','2','29'], ['2024','02','29'], ['2026','12','31'], ['0001','1','1']]) assert.ok(isValidDate(...date));
  for (const date of [['1900','2','29'], ['2026','2','29'], ['2026','4','31'], ['2026','13','1'], ['2026','1','0'], ['0000','1','1'], ['26','1','1'], ['2026','','1'], ['2026','1','1x']]) {
    assert.equal(getLuckyNumber(...date), null, date.join('-'));
  }
});

test('every zodiac and lucky number has complete content and local artwork', () => {
  assert.equal(designs.length, 21);
  assert.equal(new Set(designs.map(item => item.id)).size, 21);
  for (const id of ['rat','ox','tiger','rabbit','dragon','snake','horse','goat','monkey','rooster','dog','pig',...Array.from({length:9}, (_,i)=>String(i+1))]) {
    const item = designs.find(item => item.id === id);
    assert.ok(item, id);
    for (const field of ['title','description','brandBox','quote','quoteBy','inventoryIntro']) assert.ok(item[field].length > 0, `${id}: ${field}`);
    assert.ok(item.tags.length >= 2);
    for (const field of ['artwork','titleArtwork','quoteArtwork']) assert.ok(existsSync(new URL('../public'+item[field], import.meta.url)), `${id}: ${field}`);
  }
});
