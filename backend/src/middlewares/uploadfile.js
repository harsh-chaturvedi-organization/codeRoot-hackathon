const path = require("path")
const multer = require("multer");

// cb is callback
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../../frontend/code-root-front-end/public/uploads"))
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(null, uniquePrefix + "-" + file.originalname)
    }
})
// cb(null, file.fieldname + '-' + uniqueSuffix)

function fileFilter(req, file, cb) {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
        cb(null, true)
    } else {
        cb(null, false)
    }

}


// const upload = multer
module.exports = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});