const express = require('express');
const app = express();

const path = require('path')

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null, 'assets/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

app.get("/upload",(req,res)=> {
    res.render("upload");
});

const upload = multer({storage: storage})
app.post("/upload",upload.single("image"),(req,res)=>{res.send("Image Uploaded")})
app.listen(3001);
console.log("Port: 3001")