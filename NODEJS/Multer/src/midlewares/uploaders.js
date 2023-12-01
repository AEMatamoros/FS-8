const multer = require("multer");
const path = require("path");
const fs = require("fs");

function uploader(directory, customFileName) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      fs.mkdirSync(directory, { recursive: true });
      cb(null, directory);
    },
    filename: (req, file, cb) => {
      cb(
        null,
        customFileName + Date.now() + "_" + file.originalname.replace(/ /g, "")
      );
    },
  });
  return multer({ storage });
}

module.exports = {
  uploader,
};
