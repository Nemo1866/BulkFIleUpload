const {upload, add} = require('./fileUpload.services')


module.exports.Fileadd = async function (req,res) {
    upload(req, res,async function (err) {
        if (err) {
            return res.status(500).send(err)
        }
        else{
            if(req.file == undefined){
                return res.status(400).send('No file selected')
            }else{
                console.log(req.file);
                await add(req.file)
                res.send('file Uploaded')
            }
        }
}
)}

// app.listen(5253, () => console.log('server run'))