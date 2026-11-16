import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

// Keep Figma exports intact. Generate lossless delivery copies only for used assets.
const root = path.resolve(import.meta.dirname, "..");
async function files(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes: true })).map((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? files(file) : [file];
  }))).flat();
}
const sources = (await Promise.all((await files(path.join(root, "src")))
  .filter((file) => !file.endsWith("optimized-assets.json"))
  .map((file) => readFile(file, "utf8")))).join("\n");
const candidates = (await files(path.join(root, "public"))).filter((file) => {
  const url = "/" + path.relative(path.join(root, "public"), file);
  return !url.startsWith("/optimized/") && /\.(svg|png)$/.test(file)
    && (sources.includes(url) || url.startsWith("/figma/inventory/"))
    && !url.endsWith("/lamps.svg"); // Its pupils must remain live SVG elements.
});
await mkdir(path.join(root, "public/optimized"), { recursive: true });
const manifest = {};
let before = 0, after = 0;
for (const file of candidates.sort()) {
  const bytes = await readFile(file);
  const svg = file.endsWith(".svg");
  if (bytes.length < (svg ? 50000 : 8000)) continue;
  const metadata = await sharp(bytes).metadata();
  let image = sharp(bytes, svg ? { density: 144 } : {});
  // Two source pixels per design pixel keep fine pencil strokes clear on Retina.
  if (svg) image = image.resize(Math.ceil(metadata.width * 2), Math.ceil(metadata.height * 2), { fit: "fill" });
  const output = await image.webp({ lossless: true, effort: 6 }).toBuffer();
  if (output.length >= bytes.length * 0.85) continue;
  const name = createHash("sha256").update(bytes).update("webp-lossless-2x-v1").digest("hex").slice(0, 20) + ".webp";
  const url = "/" + path.relative(path.join(root, "public"), file);
  manifest[url] = "/optimized/" + name;
  await writeFile(path.join(root, "public/optimized", name), output);
  before += bytes.length;
  after += output.length;
}
await writeFile(path.join(root, "src/lib/design/optimized-assets.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`${Object.keys(manifest).length} assets: ${(before / 1e6).toFixed(2)} MB → ${(after / 1e6).toFixed(2)} MB (${Math.round((1 - after / before) * 100)}% smaller)`);
