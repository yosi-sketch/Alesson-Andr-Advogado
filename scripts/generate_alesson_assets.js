const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const pPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/1ae39caf-6051-4472-989f-719c324de817/.user_uploaded/media_1793210095127_b4ac333a.jpg';
const pLogo = 'C:/Users/matheus/.gemini/antigravity/brain/1ae39caf-6051-4472-989f-719c324de817/.user_uploaded/media_1793210116207_0f36bde9.png';

async function generateAssets() {
  const pubDir = path.resolve('public');
  const appDir = path.resolve('app');
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

  console.log('Generating brand assets for Dr. Alesson André — Advogado...');

  // 1. Photos of Dr. Alesson André
  await sharp(pPhoto)
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(path.join(pubDir, 'alesson-andre.jpg'));

  // Hero photo (sharp & pristine)
  await sharp(pPhoto)
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(path.join(pubDir, 'alesson-andre-hero.jpg'));

  // Sobre portrait (framed vertically: 4:5 aspect ratio)
  await sharp(pPhoto)
    .extract({ left: 140, top: 20, width: 750, height: 937 })
    .resize(800, 1000, { fit: 'cover' })
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(path.join(pubDir, 'alesson-andre-sobre.jpg'));

  // 2. Full Logo (trimmed nicely or original transparent)
  await sharp(pLogo)
    .trim({ threshold: 10 })
    .extend({ top: 20, bottom: 20, left: 24, right: 24, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 96 })
    .toFile(path.join(pubDir, 'logo.png'));

  // 3. Monogram Symbol (A / AA triangle with clean extract)
  // Symbol bounds: minX: 327, maxX: 705, minY: 35, maxY: 321 (width: 378, height: 286)
  const symbolCrop = await sharp(pLogo)
    .extract({ left: 327, top: 35, width: 378, height: 286 })
    .toBuffer();

  // Standalone transparent symbol square (512x512)
  await sharp(symbolCrop)
    .resize(440, 440, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 36, bottom: 36, left: 36, right: 36, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pubDir, 'logo-symbol.png'));

  // 4. Favicon Badge:
  // Luxurious dark obsidian slate background (#0a0e17) with refined metallic gold border and centered golden AA monogram
  const badgeSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#141a26" />
          <stop offset="60%" stop-color="#0a0e17" />
          <stop offset="100%" stop-color="#05070a" />
        </radialGradient>
        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff4d0" />
          <stop offset="25%" stop-color="#e2ba59" />
          <stop offset="60%" stop-color="#c59828" />
          <stop offset="85%" stop-color="#8a6113" />
          <stop offset="100%" stop-color="#462f05" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="120" fill="url(#bgGrad)" />
      <rect x="14" y="14" width="484" height="484" rx="106" fill="none" stroke="url(#goldRim)" stroke-width="16" stroke-opacity="0.95" />
    </svg>
  `;

  const symbolBadge = await sharp(symbolCrop)
    .resize(360, 360, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
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

  // Multi-resolution ICO (16x16 + 32x32 + 48x48)
  const png16 = await sharp(icon512).resize(16, 16).png().toBuffer();
  const png32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  const png48 = await sharp(icon512).resize(48, 48).png().toBuffer();

  const images = [
    { size: 16, buf: png16 },
    { size: 32, buf: png32 },
    { size: 48, buf: png48 },
  ];

  const headerSize = 6;
  const dirEntrySize = 16;
  const icoHeader = Buffer.alloc(headerSize + dirEntrySize * images.length);
  
  // Header: reserved = 0, type = 1 (icon), count = 3
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(images.length, 4);

  let currentOffset = headerSize + dirEntrySize * images.length;

  images.forEach((img, idx) => {
    const entryOffset = headerSize + idx * dirEntrySize;
    icoHeader.writeUInt8(img.size, entryOffset);
    icoHeader.writeUInt8(img.size, entryOffset + 1);
    icoHeader.writeUInt8(0, entryOffset + 2); // color palette
    icoHeader.writeUInt8(0, entryOffset + 3); // reserved
    icoHeader.writeUInt16LE(1, entryOffset + 4); // color planes
    icoHeader.writeUInt16LE(32, entryOffset + 6); // bits per pixel
    icoHeader.writeUInt32LE(img.buf.length, entryOffset + 8); // image size
    icoHeader.writeUInt32LE(currentOffset, entryOffset + 12); // image offset
    currentOffset += img.buf.length;
  });

  const icoBuffer = Buffer.concat([icoHeader, ...images.map(img => img.buf)]);
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

  console.log('✅ Successfully generated all brand assets and favicons for Dr. Alesson André!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
