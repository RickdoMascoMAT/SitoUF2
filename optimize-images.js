const sharp = require('sharp');

sharp('src/assets/nutrition.jpg')
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 80 })
    .toFile('src/assets/nutrition-optimized.jpg');

sharp('src/assets/personal-training.jpg')
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 80 })
    .toFile('src/assets/personal-training-optimized.jpg');