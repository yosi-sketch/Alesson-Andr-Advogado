const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const pPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/9f754abd-8829-422f-90dc-c55a7d4a64e8/.user_uploaded/media_1793198548824_f6ce7c64.jpg';
const pLogo = 'C:/Users/matheus/.gemini/antigravity/brain/9f754abd-8829-422f-90dc-c55a7d4a64e8/.user_uploaded/media_1793198559216_765f8096.png';

async function generateAssets() {
  const pubDir = path.resolve('public');
  const appDir = path.resolve('app');
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

  console.log('Generating brand assets for Escritório de Advocacia Weslley Santos...');

  // 1. Raw Portrait Photo & Full Office Hero
  await sharp(pPhoto)
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(path.join(pubDir, 'weslley-santos.jpg'));

  // 2. Full office hero photo
  await sharp(pPhoto)
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(path.join(pubDir, 'weslley-santos-hero.jpg'));

  // 3. Sobre photo: Headroom starting at y=90, centered on Dr. Weslley (x=380..720)
  await sharp(pPhoto)
    .extract({ left: 380, top: 90, width: 350, height: 490 })
    .resize(600, 840, { fit: 'cover' })
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(path.join(pubDir, 'weslley-santos-sobre.jpg'));

  await sharp(pubDir + '/weslley-santos-sobre.jpg')
    .toFile(path.join(pubDir, 'weslley-santos-portrait.jpg'));

  // 4. Logo full
  await sharp(pLogo)
    .png({ quality: 95 })
    .toFile(path.join(pubDir, 'logo.png'));

  // 5. Monogram / Royal Crest Symbol (Crest + Crown + Laurels)
  // Crest bounds: top: 16, height: 512, left: 49, width: 926
  const crestCrop = await sharp(pLogo)
    .extract({ left: 49, top: 16, width: 926, height: 512 })
    .toBuffer();

  // Standalone transparent symbol
  await sharp(crestCrop)
    .resize(480, 480, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 16,
      bottom: 16,
      left: 16,
      right: 16,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(pubDir, 'logo-symbol.png'));

  await sharp(pubDir + '/logo-symbol.png')
    .toFile(path.join(pubDir, 'logo-crest.png'));

  // 6. Favicon Badge: Royal Imperial Navy (#071224) with polished Metallic Gold Rim and WS Royal Crest
  const badgeSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#0f2347" />
          <stop offset="55%" stop-color="#0a1832" />
          <stop offset="100%" stop-color="#050c19" />
        </radialGradient>
        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff1cc" />
          <stop offset="25%" stop-color="#e8be67" />
          <stop offset="60%" stop-color="#c59f42" />
          <stop offset="85%" stop-color="#8c661b" />
          <stop offset="100%" stop-color="#4a3307" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="120" fill="url(#bgGrad)" />
      <rect x="14" y="14" width="484" height="484" rx="106" fill="none" stroke="url(#goldRim)" stroke-width="16" stroke-opacity="0.9" />
    </svg>
  `;

  const symbolBadge = await sharp(crestCrop)
    .resize(380, 380, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const icon512 = await sharp(Buffer.from(badgeSvg))
    .composite([{ input: symbolBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save favicon formats to public/
  await sharp(icon512).resize(512, 512).png().toFile(path.join(pubDir, 'icon-512x512.png'));
  await sharp(icon512).resize(192, 192).png().toFile(path.join(pubDir, 'icon.png'));
  await sharp(icon512).resize(180, 180).png().toFile(path.join(pubDir, 'apple-icon.png'));
  await sharp(icon512).resize(32, 32).png().toFile(path.join(pubDir, 'favicon-32x32.png'));
  await sharp(icon512).resize(16, 16).png().toFile(path.join(pubDir, 'favicon-16x16.png'));

  // Also save to app/ for Next.js App Router root route icons
  await sharp(icon512).resize(192, 192).png().toFile(path.join(appDir, 'icon.png'));
  await sharp(icon512).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));

  // Multi-resolution ICO (16x16 + 32x32)
  const png16 = await sharp(icon512).resize(16, 16).png().toBuffer();
  const png32 = await sharp(icon512).resize(32, 32).png().toBuffer();

  const numImages = 2;
  const headerSize = 6;
  const dirEntrySize = 16;
  const icoHeader = Buffer.alloc(headerSize + dirEntrySize * numImages);
  
  // Header: reserved = 0, type = 1 (icon), count = 2
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(numImages, 4);

  let currentOffset = headerSize + dirEntrySize * numImages;

  // Entry 1: 16x16
  icoHeader.writeUInt8(16, 6);
  icoHeader.writeUInt8(16, 7);
  icoHeader.writeUInt8(0, 8);
  icoHeader.writeUInt8(0, 9);
  icoHeader.writeUInt16LE(1, 10);
  icoHeader.writeUInt16LE(32, 12);
  icoHeader.writeUInt32LE(png16.length, 14);
  icoHeader.writeUInt32LE(currentOffset, 18);
  currentOffset += png16.length;

  // Entry 2: 32x32
  const entry2Offset = 6 + 16;
  icoHeader.writeUInt8(32, entry2Offset);
  icoHeader.writeUInt8(32, entry2Offset + 1);
  icoHeader.writeUInt8(0, entry2Offset + 2);
  icoHeader.writeUInt8(0, entry2Offset + 3);
  icoHeader.writeUInt16LE(1, entry2Offset + 4);
  icoHeader.writeUInt16LE(32, entry2Offset + 6);
  icoHeader.writeUInt32LE(png32.length, entry2Offset + 8);
  icoHeader.writeUInt32LE(currentOffset, entry2Offset + 12);

  const icoBuffer = Buffer.concat([icoHeader, png16, png32]);
  fs.writeFileSync(path.join(pubDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

  // Clean up any remaining previous client files in public
  const oldFiles = [
    'valeria-raposo.jpg',
    'valeria-raposo-hero.jpg',
    'valeria-raposo-sobre.jpg',
    'ana-paula-lima.jpg',
    'ana-paula-hero.jpg',
    'ana-paula-sobre.jpg'
  ];
  for (const f of oldFiles) {
    const full = path.join(pubDir, f);
    if (fs.existsSync(full)) {
      fs.unlinkSync(full);
      console.log(`Cleaned up obsolete file: ${f}`);
    }
  }

  console.log('✅ Successfully generated all brand assets and favicons for Weslley Santos Advocacia!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
