import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const local = (name) => new URL(`../public/design/text/${name}.svg`, import.meta.url);
const labels = JSON.parse(readFileSync(new URL('../src/lib/design/outlined-labels.json', import.meta.url), 'utf8'));

test('fixed lettering contains real paths and needs no font or embedded bitmap', () => {
  for (const name of ['title-advantage', 'subtitle-advantage', ...Object.keys(labels)]) {
    const svg = readFileSync(local(name), 'utf8');
    assert.match(svg, /<path\b/, name);
    assert.doesNotMatch(svg, /<(?:text|image)\b|font-family/, name);
  }
});

test('service headings expose the background through letter counters without white residue', async () => {
  for (const name of ['title-advantage', 'subtitle-advantage']) {
    const { data } = await sharp(readFileSync(local(name))).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let ink = 0, transparent = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] === 0) transparent++;
      else {
        ink++;
        // Very faint antialiasing pixels lose RGB precision when unpremultiplied.
        if (data[i + 3] > 32) {
          assert.ok(data[i] < 120 && data[i + 1] < 120 && data[i + 2] < 120, `${name}: unexpected light pixel`);
        }
      }
    }
    assert.ok(ink > 0 && transparent > 0, name);
  }
});
