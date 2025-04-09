const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

const inputDir = './images_png'; // Dossier avec les PNG
const outputDir = './images_webp'; // Dossier où stocker les WebP

// Vérifie si le dossier de sortie existe, sinon le crée
fs.ensureDirSync(outputDir);

// Lit tous les fichiers du dossier PNG
fs.readdir(inputDir, (err, files) => {
  if (err) return console.error('Erreur lecture dossier :', err);

  files.forEach(file => {
    if (path.extname(file).toLowerCase() === '.png') {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace('.png', '.webp'));

      sharp(inputPath)
        .toFormat('webp', { quality: 40 }) // Réglage qualité WebP (0-100)
        .toFile(outputPath)
        .then(() => console.log(`✅ Converti : ${file} → ${outputPath}`))
        .catch(err => console.error('❌ Erreur conversion :', err));
    }
  });
});
