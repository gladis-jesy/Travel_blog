const express = require('express');
const { connectToDb, getDb } = require('./db')
//Initialize the app
const app = express();
const cors = require('cors');
const path = require('path')
const multer = require('multer')
// set up middleware

// Parse incoming Json

app.use(cors())
app.use(express.json());

let db;
connectToDb((err) => {
    if (!err) {
        app.listen(3001, () => {
            console.log("everything is run soomthy")
        })

        db = getDb();
    }
})

//creating our restful api enpoints

//defining the api routes here

// app.get("/",(req,res)=>{
//     res.json({name:"gladis jesy", subscribe:true})
// })
//file upload

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({
    storage: storage,
});
app.use('/profile', express.static('upload/images'));
//for uplod image
app.post("/upload", upload.single('profile'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    console.log(req.file);

    res.status(200).json({
        message: "File uploaded successfully",
        image_url: `http://localhost:3001/profile/${req.file.filename}` // Use backticks here
    });
});
app.get('/api/Travel_blog', (req, res) => {
    const blogDetails = []; // Initialize an array to store results

    db.collection('Travel_blog')
        .find({})
        .limit(10)
        .toArray()
        .then((results) => {
            results.forEach((element) => blogDetails.push(element));
            res.status(200).json(blogDetails);
        })
        .catch((err) => {
            console.error("Error fetching blog details:", err);
            res.status(500).json({ msg: 'Error getting blog data' });
        });
});

app.get('/api/Travel_blog/:id', (req, res) => {
    const travelId = parseInt(req.params.id);
    if (!isNaN(travelId)) {
        db.collection('Travel_blog')
            .findOne({ id: travelId })
            .then((element) => {
                if (element) {
                    res.status(200).json(element)
                } else {
                    res.status(404).json({ msg: '404 not found' })
                }
            }).catch(() => {
                res.status(500).json({ msg: '500 server not found' })
            })
    } else {
        res.status(400).json({ error: 'unexpected error' })
    }
})

//post the blog for creating student

app.post('/api/Travel_blog', (req, res) => {
    const travellist = req.body;
    db.collection('Travel_blog')
        .insertOne(travellist)
        .then((element) => {
            res.status(201).json(element)
        }).catch(() => {
            res.status(500).json({ msg: 'Error created' })
        })
})


//updating the blog

app.patch('/api/Travel_blog', (req, res) => {
    let update = req.body;
    const travelId = parseInt(req.params.id);
    if (!isNan) {
        db.collection('Travel_blog')
            .updateOne({ id: travelId },
                { $set: update }
            ).then((result) => {
                res.status(200).json({ result });
            }).catch(() => { res.status(500).json({ error: 'bad request' }) })
    } else {
        res.status(400).json({ Error: 'Error bad request' })
    }
})


// delete method

app.delete('/api/Travel_blog', (req, res) => {
    const travelId = parseInt(req.params.id);
    if (!isNaN(travelId)) {
        db.collection('Travel_blog').deleteOne({ id: travelId })
            .then((element) => {
                res.status(204).json(element)
            }).catch(() => {
                res.status(500).json({ msg: 'server error' })
            })
    } else {
        res.status(400).json({ error: '400 bad request' })
    }
})
