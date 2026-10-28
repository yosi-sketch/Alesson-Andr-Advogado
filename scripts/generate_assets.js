const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const pPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/112317be-af78-4d1f-84d0-1632d1a6da9b/.user_uploaded/media_1793137721206_934c4177.jpg';
const pLogo = 'C:/Users/matheus/.gemini/antigravity/brain/112317be-af78-4d1f-84d0-1632d1a6da9b/.user_uploaded/media_1793137691459_c3c09d22.png';

async function generateAssets() {
  const pubDir = path.resolve('public');
  const appDir = path.resolve('app');
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

  console.log('Generating brand assets for Ana Paula Lima Advocacia...');

  // 1. Raw Portrait Photo
  await sharp(pPhoto)
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(path.join(pubDir, 'ana-paula-lima.jpg'));

  // 2. Hero photo (portrait framing focused on upper torso and head, optimal for hero section)
  await sharp(pPhoto)
    .resize(750, 920, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(path.join(pubDir, 'ana-paula-hero.jpg'));

  // 3. Sobre photo (portrait framing with warm ambiance)
  await sharp(pPhoto)
    .resize(750, 900, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(path.join(pubDir, 'ana-paula-sobre.jpg'));

  // 4. Logo full
  await sharp(pLogo)
    .png()
    .toFile(path.join(pubDir, 'logo.png'));

  // 5. Monogram symbol: The "AP" monogram with scales of justice
  // Bounds found: minX: 344, maxX: 687, minY: 7, maxY: 357 (width ~343, height ~350)
  const symbolCrop = await sharp(pLogo)
    .extract({ left: 340, top: 5, width: 352, height: 354 })
    .toBuffer();

  // Place into a square 512x512 with transparent padding for standalone symbol use
  await sharp(symbolCrop)
    .resize(440, 440, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 36,
      bottom: 36,
      left: 36,
      right: 36,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(pubDir, 'logo-symbol.png'));

  // 6. Favicon Badge: Luxury Obsidian Noir with Polished Gold Rim and AP Justice Scales Monogram
  const badgeSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#1f180e" />
          <stop offset="60%" stop-color="#100d07" />
          <stop offset="100%" stop-color="#060503" />
        </radialGradient>
        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fdf4d8" />
          <stop offset="25%" stop-color="#e8be67" />
          <stop offset="60%" stop-color="#b88428" />
          <stop offset="85%" stop-color="#7a4e10" />
          <stop offset="100%" stop-color="#4a2d07" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="128" fill="url(#bgGrad)" />
      <rect x="14" y="14" width="484" height="484" rx="114" fill="none" stroke="url(#goldRim)" stroke-width="18" stroke-opacity="0.95" />
    </svg>
  `;

  const symbolBadge = await sharp(symbolCrop)
    .resize(370, 370, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
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
    'maria-eduarda.jpg',
    'maria-eduarda-hero.jpg',
    'maria-eduarda-sobre.jpg'
  ];
  for (const f of oldFiles) {
    const full = path.join(pubDir, f);
    if (fs.existsSync(full)) {
      fs.unlinkSync(full);
      console.log(`Cleaned up obsolete file: ${f}`);
    }
  }

  console.log('✅ Successfully generated all brand assets and favicons for Ana Paula Lima Advocacia!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
