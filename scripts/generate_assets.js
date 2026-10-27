const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const pLogo = 'C:/Users/matheus/.gemini/antigravity/brain/54e992b2-c55c-4fe1-b69e-d000555438f7/.user_uploaded/media_1793104898372_fb7b5d99.png';
const pPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/54e992b2-c55c-4fe1-b69e-d000555438f7/.user_uploaded/media_1793104916308_738b2a75.jpg';

async function generateAssets() {
  const pubDir = path.resolve('public');
  const appDir = path.resolve('app');
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

  console.log('Generating assets for Mariana Brum Bahia Advocacia...');

  // 1. Raw & Portrait Photo
  await sharp(pPhoto)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(pubDir, 'mariana-brum.jpg'));

  // 2. Hero photo (portrait framing)
  await sharp(pPhoto)
    .resize(767, 1024, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(pubDir, 'mariana-brum-hero.jpg'));

  // 3. Sobre photo
  await sharp(pPhoto)
    .resize(767, 950, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(pubDir, 'mariana-brum-sobre.jpg'));

  // 4. Logo full
  await sharp(pLogo)
    .png()
    .toFile(path.join(pubDir, 'logo.png'));

  // 5. Monogram symbol: The "M" + Scales of justice
  // Bounds determined: minX: 283, maxX: 701, minY: 52, maxY: 335 (width: 418, height: 283)
  // Let's crop tight with slight safety padding
  const symbolCrop = await sharp(pLogo)
    .extract({ left: 275, top: 48, width: 435, height: 295 })
    .toBuffer();

  // Place into a square 512x512 with transparent padding
  await sharp(symbolCrop)
    .resize(450, 450, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 31,
      bottom: 31,
      left: 31,
      right: 31,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(pubDir, 'logo-symbol.png'));

  // 6. Favicon Badge: Luxury Wine/Noir Badge with Burgundy Metallic & Rose Gold Border
  const badgeSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#360a14" />
          <stop offset="55%" stop-color="#1c050a" />
          <stop offset="100%" stop-color="#0a0204" />
        </radialGradient>
        <linearGradient id="goldWineRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f5d6dc" />
          <stop offset="30%" stop-color="#e8a6b3" />
          <stop offset="60%" stop-color="#a4332b" />
          <stop offset="100%" stop-color="#4a0e1e" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="120" fill="url(#bgGrad)" />
      <rect x="12" y="12" width="488" height="488" rx="108" fill="none" stroke="url(#goldWineRim)" stroke-width="16" stroke-opacity="0.9" />
    </svg>
  `;

  const symbolBadge = await sharp(symbolCrop)
    .resize(380, 380, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const icon512 = await sharp(Buffer.from(badgeSvg))
    .composite([{ input: symbolBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save favicon formats
  await sharp(icon512).resize(512, 512).png().toFile(path.join(pubDir, 'icon-512x512.png'));
  await sharp(icon512).resize(192, 192).png().toFile(path.join(pubDir, 'icon.png'));
  await sharp(icon512).resize(192, 192).png().toFile(path.join(appDir, 'icon.png'));
  await sharp(icon512).resize(180, 180).png().toFile(path.join(pubDir, 'apple-icon.png'));
  await sharp(icon512).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));
  await sharp(icon512).resize(32, 32).png().toFile(path.join(pubDir, 'favicon-32x32.png'));
  await sharp(icon512).resize(16, 16).png().toFile(path.join(pubDir, 'favicon-16x16.png'));

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

  console.log('Successfully generated all brand assets and favicons!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
