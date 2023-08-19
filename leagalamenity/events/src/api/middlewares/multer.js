var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("helll");
    cb(null, "uploads"); // Here, we use Multer to take a photo and put it in a folder called ‘uploads’
    // so we can easily access it later.
  },
  filename: (req, file, cb) => {
    console.log("helll22");
    cb(null, file.fieldname + "-" + Date.now());
  },
});
// module.exports = async (req, res, next) => {
//   var upload = multer({ storage: storage });
//   return next();
// };
var upload = multer({ storage: storage });
module.exports = upload;
