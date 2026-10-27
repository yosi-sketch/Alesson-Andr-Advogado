const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const pPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/2954665d-7fa3-4235-8302-f854b5a7ee31/.user_uploaded/media_1793129364009_cfd7c98f.jpg';
const pLogo = 'C:/Users/matheus/.gemini/antigravity/brain/2954665d-7fa3-4235-8302-f854b5a7ee31/.user_uploaded/media_1793129373398_3c1e1b40.png';

async function generateAssets() {
  const pubDir = path.resolve('public');
  const appDir = path.resolve('app');
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

  console.log('Generating assets for Maria Eduarda Noronha Advocacia e Consultoria Jurídica...');

  // 1. Raw Portrait Photo
  await sharp(pPhoto)
    .jpeg({ quality: 94, mozjpeg: true })
    .toFile(path.join(pubDir, 'maria-eduarda.jpg'));

  // 2. Hero photo (portrait framing focusing on upper torso and head)
  await sharp(pPhoto)
    .resize(682, 880, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 94, mozjpeg: true })
    .toFile(path.join(pubDir, 'maria-eduarda-hero.jpg'));

  // 3. Sobre photo
  await sharp(pPhoto)
    .resize(682, 850, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(path.join(pubDir, 'maria-eduarda-sobre.jpg'));

  // 4. Logo full
  await sharp(pLogo)
    .png()
    .toFile(path.join(pubDir, 'logo.png'));

  // 5. Monogram symbol: The "MN" monogram in the golden square frame
  // Bounds: minX: 401, maxX: 622, minY: 17, maxY: 222
  const symbolCrop = await sharp(pLogo)
    .extract({ left: 395, top: 12, width: 235, height: 218 })
    .toBuffer();

  // Place into a square 512x512 with transparent padding
  await sharp(symbolCrop)
    .resize(450, 418, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 47,
      bottom: 47,
      left: 31,
      right: 31,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(pubDir, 'logo-symbol.png'));

  // 6. Favicon Badge: Luxury Noir & Bronze/Gold Badge with Rose/Champagne Gold Beveled Rim
  const badgeSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#24140b" />
          <stop offset="55%" stop-color="#140b06" />
          <stop offset="100%" stop-color="#070302" />
        </radialGradient>
        <linearGradient id="goldBronzeRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fae6c8" />
          <stop offset="25%" stop-color="#dfa968" />
          <stop offset="60%" stop-color="#a86432" />
          <stop offset="85%" stop-color="#5a2c14" />
          <stop offset="100%" stop-color="#2d1307" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="124" fill="url(#bgGrad)" />
      <rect x="14" y="14" width="484" height="484" rx="112" fill="none" stroke="url(#goldBronzeRim)" stroke-width="18" stroke-opacity="0.95" />
    </svg>
  `;

  const symbolBadge = await sharp(symbolCrop)
    .resize(360, 334, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
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

  console.log('✅ Successfully generated all brand assets and favicons for Maria Eduarda Noronha!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
