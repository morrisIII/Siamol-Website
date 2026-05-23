const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'optimized-images');
const EXT = ['.jpg', '.jpeg', '.png'];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      if (dirent.name === 'node_modules' || dirent.name === 'optimized-images') continue;
      results = results.concat(walk(full));
    } else {
      const ext = path.extname(dirent.name).toLowerCase();
      if (EXT.includes(ext)) results.push(full);
    }
  }
  return results;
}

async function optimize(file) {
  const rel = path.relative(ROOT, file);
  const name = path.parse(rel).name;
  const outSub = path.join(OUT_DIR, path.dirname(rel));
  fs.mkdirSync(outSub, { recursive: true });
  const outFile = path.join(outSub, name + '.webp');

  try {
    await sharp(file)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outFile);
    console.log('optimized:', rel, '->', path.relative(ROOT, outFile));
  } catch (err) {
    console.error('failed:', rel, err.message);
  }
}

async function run() {
  console.log('Searching for images...');
  const files = walk(ROOT);
  if (!files.length) {
    console.log('No images found to optimize.');
    return;
  }
  console.log('Found', files.length, 'image(s).');
  for (const f of files) await optimize(f);
  console.log('Done. Optimized images are in ./optimized-images');
}

run();
