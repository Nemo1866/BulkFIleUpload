
const multer = require('multer')
const path = require('path')
const {fileUpload}=require("./database")

const storage = multer.diskStorage({
  destination: `./public/uploads`,
  filename: (req, file, cb) => {
    const extArray = file.originalname.split('.')
    const fileorigin = extArray[extArray.length - 2];
    cb(null, fileorigin + '-' + Date.now() + path.extname(file.originalname))
  }
})


module.exports.upload = multer({ storage }).single()


module.exports.add = async function (file) {
  const { filename, mimetype, originalname, encoding,size } = file
const sizeInkb=size/1024

  await fileUpload.create({
    filename,
    mimetype,
    originalname,
    encoding,
    size:sizeInkb
    
  })
}
