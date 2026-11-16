import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const manifest = JSON.parse(readFileSync(new URL('../src/lib/design/optimized-assets.json', import.meta.url), 'utf8'));
const local = (url) => fileURLToPath(new URL('../public' + url, import.meta.url));

test('delivery assets exist, retain their aspect ratio, and save at least 15% of source bytes', async () => {
  for (const [source, output] of Object.entries(manifest)) {
    assert.ok(output.startsWith('/optimized/') && output.endsWith('.webp'));
    const a = local(source), b = local(output);
    assert.ok(statSync(b).size < statSync(a).size * 0.85, source);
    const [original, delivered] = await Promise.all([sharp(a).metadata(), sharp(b).metadata()]);
    assert.equal(delivered.format, 'webp');
    assert.ok(Math.abs(original.width / original.height - delivered.width / delivered.height) < 0.01, source);
    if (source.endsWith('.png')) {
      assert.equal(delivered.width, original.width, source);
      assert.equal(delivered.height, original.height, source);
    } else {
      assert.ok(delivered.width >= original.width * 2, source);
      assert.ok(delivered.height >= original.height * 2, source);
    }
  }
});

test('service flow artwork retains its visible pixels after lossless conversion', async () => {
  const source = '/figma/service/flow-composite.png';
  const [a, b] = await Promise.all([source, manifest[source]].map(async (url) =>
    sharp(local(url)).ensureAlpha().raw().toBuffer()));
  assert.equal(a.length, b.length);
  for (let i = 0; i < a.length; i += 4) {
    assert.equal(a[i + 3], b[i + 3]);
    if (a[i + 3] !== 0) assert.ok(a[i] === b[i] && a[i + 1] === b[i + 1] && a[i + 2] === b[i + 2]);
  }
});
