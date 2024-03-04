const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();


multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cd) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})


app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(8001, () => {

})