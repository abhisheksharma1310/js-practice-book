const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const mongoUrl = require('./secrets');
const ObjectId = require('mongodb').ObjectId;

const router = express.Router();
const app = express();

//use middleware
app.use(bodyParser.json());

//connect to mongodb cloud database
// mongoClient.connect(mongoUrl, (err, db) => {
//     if(err) throw err;
//     console.log('connected');
//     db.close();
// });

//create client instance of Mongo client
const client = new mongoClient(mongoUrl, {
    useUnifiedTopology: true
});

client.connect(err => {
    const myDb = client.db('peopleDb').collection('friends');
    console.log('Mongo client Connected to peopleDb');

    //
    app.get('/user/:name', (req, res)=>{
        myDb.find(req.params).toArray().then(results =>{
            res.json(results);
        });
    });

    //users route
    app.route('/users')
    .get((req, res)=>{
        myDb.find().toArray().then(results => {
            res.json(results);
        });
    })
    .post((req, res)=>{
        console.log(req.body);
        myDb.insertOne(req.body).then(results => {
            console.log(results);
            res.json(results);
        });
    })
    .put((req, res)=>{
        myDb.findOneAndUpdate({_id: ObjectId(req.body._id)},{$set: {name: req.body.name}},{upsert: false}).then(result => {
            res.json({status: true});
        });
    })
    .delete((req, res)=>{
        myDb.deleteOne({_id: ObjectId(req.body._id)})
        .then(result => {
            console.log(result);
            let boo = true;
            if(result.deletedCount === 0){
               boo = false; 
            }
            res.json({status: boo});
        }).catch(error => console.log(error));
    });
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/public'+'/index.html');
});

app.listen(8080, ()=>{
    console.log('Server ready');
});
