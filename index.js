
const { Fileadd } = require('./fileUpload.controller')

const router = require('express').Router()

router.post("/files", Fileadd)

module.exports = router;
