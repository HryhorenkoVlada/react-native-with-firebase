module.exports.uploadImages = () => {
  const dirImages = './assets/images/articles';

  uploadAll(dirImages, 'articles_images');
  //uploadAll(dirSubImages, 'subImages')
};

const uploadAll = (dir, dest) => {
  const fs = require('fs');
  const bucket = admin.storage().bucket();

  fs.readdir(dir, async (err, files) => {
    if (err) {
      console.log('Error ', err);
      return;
    }

    for (let i = 0; i < 2; i++) {
      const file = files[i];
      const filePath = dir + '/' + file;
      console.log(file, filePath);

      bucket
        .upload(filePath, {
          destination: dest + '/' + file,
          uploadType: 'media',
          gzip: true,
          metadata: {
            cacheControl: 'public, max-age=31536000',
            metadata: {
              firebaseStorageDownloadTokens: uuidV4(),
            },
          },
        })
        .then(() => console.log('upload Success'))
        .catch((err) => console.log('Error:: ', err));
    }
  });
};
