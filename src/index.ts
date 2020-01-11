const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect("mongodb://admin:Password1@ds259361.mlab.com:59361/kandy",
    (err, database) => {
        db = database.db('kandy');

        
    })

const app = express()

app.use(bodyParser.json());

app.get('/:id', (req, res) => {
    let query: any = {};
    if(req.params.id){
        query.id = req.params.id;
    }
    db.collection('posts').find(query);
});

app.post('/', (req, res) => {
    db.collection('posts').save(req.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
      })
});

app.delete('/:id', (req, res) => {
    res.json({
        msg: "Hello"
    })
});

const port = 4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});