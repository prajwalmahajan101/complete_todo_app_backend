const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '..', 'static', 'images'));
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

// Create the multer instance
const upload = multer({storage: storage});

module.exports = upload;
