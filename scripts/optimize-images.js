const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images');

  function findImages(dir) {
    let results = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const full = path.join(dir, item);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        results = results.concat(findImages(full));
      } else if (/\.(png|jpg|jpeg)$/i.test(item)) {
        results.push(full);
      }
    }
    return results;
  }

  const images = findImages(baseDir);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const img of images) {
    const sizeBefore = fs.statSync(img).size;
    totalBefore += sizeBefore;
    const ext = path.extname(img).toLowerCase();
    const webpPath = img.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    try {
      const metadata = await sharp(img).metadata();
      const maxWidth = img.includes('hero_bg') ? 1920 : 1200;
      let pipeline = sharp(img);
      if (metadata.width > maxWidth) {
        pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
      }

      // Create WebP version
      await pipeline.webp({ quality: 80 }).toFile(webpPath);

      // Optimize original for fallback
      const tmpPath = img + '.tmp';
      if (ext === '.png') {
        await sharp(img)
          .resize(maxWidth, null, { withoutEnlargement: true })
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(tmpPath);
      } else {
        await sharp(img)
          .resize(maxWidth, null, { withoutEnlargement: true })
          .jpeg({ quality: 80 })
          .toFile(tmpPath);
      }
      fs.renameSync(tmpPath, img);

      const sizeAfter = fs.statSync(img).size;
      const webpSize = fs.statSync(webpPath).size;
      const best = Math.min(sizeAfter, webpSize);
      totalAfter += best;
      console.log(
        path.basename(img) + ': ' +
        (sizeBefore / 1024).toFixed(0) + 'KB -> ' +
        (best / 1024).toFixed(0) + 'KB'
      );
    } catch (e) {
      console.log('SKIP ' + path.basename(img) + ': ' + e.message);
      totalAfter += sizeBefore;
    }
  }

  console.log('---');
  console.log('Total before: ' + (totalBefore / 1024 / 1024).toFixed(1) + 'MB');
  console.log('Total after:  ' + (totalAfter / 1024 / 1024).toFixed(1) + 'MB');
  console.log('Saved: ' + ((1 - totalAfter / totalBefore) * 100).toFixed(0) + '%');
}

optimizeImages().catch(console.error);
