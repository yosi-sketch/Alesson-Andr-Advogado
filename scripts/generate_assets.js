const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const pLogo = 'C:/Users/matheus/.gemini/antigravity/brain/e7b2a67f-1203-4e21-acba-508d3f2323dc/.user_uploaded/media_1793050111947_a8065f9b.png';
const pPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/e7b2a67f-1203-4e21-acba-508d3f2323dc/.user_uploaded/media_1793050125910_c180c405.jpg';

async function generateAssets() {
  const pubDir = path.resolve('public');
  const appDir = path.resolve('app');
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

  // 1. Copy raw photo
  await sharp(pPhoto)
    .jpeg({ quality: 92 })
    .toFile(path.join(pubDir, 'carolina-vasconcelos.jpg'));

  // 2. Hero photo (optimized framing, portrait)
  await sharp(pPhoto)
    .resize(766, 1024, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 92 })
    .toFile(path.join(pubDir, 'carolina-vasconcelos-hero.jpg'));

  // 3. Sobre photo
  await sharp(pPhoto)
    .resize(766, 950, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 90 })
    .toFile(path.join(pubDir, 'carolina-vasconcelos-sobre.jpg'));

  // 4. Logo symbol: crop transparent logo to tight bounding box then pad to square
  const logoSharp = sharp(pLogo);
  const cropped = await logoSharp
    .extract({ left: 130, top: 0, width: 840, height: 682 })
    .toBuffer();

  await sharp(cropped)
    .resize(860, 860, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 70,
      bottom: 70,
      left: 70,
      right: 70,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(pubDir, 'logo-symbol.png'));

  // Copy logo as logo.png
  await sharp(pLogo)
    .png()
    .toFile(path.join(pubDir, 'logo.png'));

  // 5. Favicon with luxury dark burgundy/noir rounded badge and gold rim
  const badgeSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#2c0910" />
          <stop offset="55%" stop-color="#180408" />
          <stop offset="100%" stop-color="#090103" />
        </radialGradient>
        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fbefb4" />
          <stop offset="35%" stop-color="#fdd984" />
          <stop offset="70%" stop-color="#dca94e" />
          <stop offset="100%" stop-color="#91632c" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="120" fill="url(#bgGrad)" />
      <rect x="12" y="12" width="488" height="488" rx="108" fill="none" stroke="url(#goldRim)" stroke-width="14" stroke-opacity="0.85" />
    </svg>
  `;

  // Monogram inside badge
  const monogramBadge = await sharp(cropped)
    .resize(370, 370, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const icon512 = await sharp(Buffer.from(badgeSvg))
    .composite([{ input: monogramBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save 512, 192, 180, 32, 16
  await sharp(icon512).resize(512, 512).png().toFile(path.join(pubDir, 'icon-512x512.png'));
  await sharp(icon512).resize(192, 192).png().toFile(path.join(pubDir, 'icon.png'));
  await sharp(icon512).resize(192, 192).png().toFile(path.join(appDir, 'icon.png'));
  await sharp(icon512).resize(180, 180).png().toFile(path.join(pubDir, 'apple-icon.png'));
  await sharp(icon512).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));
  await sharp(icon512).resize(32, 32).png().toFile(path.join(pubDir, 'favicon-32x32.png'));
  await sharp(icon512).resize(16, 16).png().toFile(path.join(pubDir, 'favicon-16x16.png'));

  // Multi-resolution ICO: includes 16x16 and 32x32 frames
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
  icoHeader.writeUInt8(0, 8); // palette
  icoHeader.writeUInt8(0, 9); // reserved
  icoHeader.writeUInt16LE(1, 10); // color planes
  icoHeader.writeUInt16LE(32, 12); // bits per pixel
  icoHeader.writeUInt32LE(png16.length, 14); // image size
  icoHeader.writeUInt32LE(currentOffset, 18); // offset
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

  console.log('Generated all assets successfully!');
}

generateAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
