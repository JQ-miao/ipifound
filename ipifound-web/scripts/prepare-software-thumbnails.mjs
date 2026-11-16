import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Input: separate Figma exports of each 268px project circle, not the page.
// get_screenshot can include the canvas behind transparent corners. Remove only
// those corners using the original Figma outer-circle alpha, before delivery.
const exportDir = process.argv[2];
if (!exportDir) throw new Error('Usage: node scripts/prepare-software-thumbnails.mjs <figma-export-directory>');
const root = path.resolve(import.meta.dirname, '..');
const { categories } = JSON.parse(await readFile(path.join(root, 'src/lib/design/projects.json'), 'utf8'));
const circle = await readFile(path.join(root, 'public/design/projects/87db64b6f25002f0578eeb4f4ff4066c738a9a92.svg'));
await mkdir(path.join(root, 'public/design/projects/software'), { recursive: true });
for (const project of categories.ui) {
  const name = path.basename(project.content.src, '.webp');
  const input = path.join(exportDir, `software-circle-${name}-0.png`);
  const { width, height } = await sharp(input).metadata();
  if (width !== project.w || height !== project.h) throw new Error(`Unexpected Figma export size: ${name}`);
  const mask = await sharp(circle).resize(width, height).png().toBuffer();
  await sharp(input).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }])
    .webp({ lossless: true, effort: 6 }).toFile(path.join(root, 'public', project.content.src));
  console.log(`${project.figmaNode} → ${project.content.src}`);
}
