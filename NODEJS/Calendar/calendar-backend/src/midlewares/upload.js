const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'files'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname.replace(/ /g, ''));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
