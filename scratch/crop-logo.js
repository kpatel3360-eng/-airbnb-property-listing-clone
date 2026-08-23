const fs = require('fs');
const path = require('path');

// Read the image file using basic PNG parser or sharp if available
try {
  const sharp = require('sharp');
  sharp('c:/Users/kpate/OneDrive/Documents/airbnb-property-listing/public/images/airbnb-logo.png')
    .trim() // Trim transparent or solid background padding
    .toFile('c:/Users/kpate/OneDrive/Documents/airbnb-property-listing/public/images/airbnb-logo-cropped.png', (err, info) => {
      if (err) {
        console.error('Sharp trim error:', err);
      } else {
        console.log('Trimmed image saved:', info);
        fs.copyFileSync(
          'c:/Users/kpate/OneDrive/Documents/airbnb-property-listing/public/images/airbnb-logo-cropped.png',
          'c:/Users/kpate/OneDrive/Documents/airbnb-property-listing/public/images/airbnb-logo.png'
        );
      }
    });
} catch (e) {
  console.log('Sharp not installed, trying canvas/Jimp or custom script');
}
