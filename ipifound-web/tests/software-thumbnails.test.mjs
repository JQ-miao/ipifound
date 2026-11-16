import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const { categories } = JSON.parse(readFileSync(new URL('../src/lib/design/projects.json', import.meta.url), 'utf8'));

test('software cases load only individual circular thumbnails with transparent corners', async () => {
  assert.equal(categories.ui.length, 11);
  for (const project of categories.ui) {
    assert.equal(project.content.tag, 'img');
    assert.ok(project.content.src.startsWith('/design/projects/software/'));
    assert.ok(project.figmaNode);
    const file = fileURLToPath(new URL('../public' + project.content.src, import.meta.url));
    const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    assert.equal(info.width, project.w);
    assert.equal(info.height, project.h);
    for (const [x, y] of [[0, 0], [info.width - 1, 0], [0, info.height - 1], [info.width - 1, info.height - 1]]) {
      assert.equal(data[(y * info.width + x) * 4 + 3], 0, `${project.figmaNode}: rectangular background must be removed`);
    }
    assert.equal(data[((info.height / 2) * info.width + info.width / 2) * 4 + 3], 255);
  }
});
