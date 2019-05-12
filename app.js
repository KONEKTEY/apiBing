// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const produit = require('./routes/produit.route'); // Imports routes for the books

// initialize our express app
const app = express();


app.options('*', cors());
// Set up mongoose connection

const mongoose = require('mongoose');
//let dev_db_url = 'mongodb+srv://Gauthier:Gauthe0123@konekteybdd-vvgxj.mongodb.net/affirmatif?retryWrites=true';
let dev_db_url = 'mongodb://localhost/bing';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/produits', produit);


/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Gauthier:Gauthe0123@konekteybdd-vvgxj.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("cultiloop").collection("books");
 perform actions on the collection object

collection.insertOne( { name: "aurelie",
						age: 28,
						taille: "petite",
						animal: "féno",
						ville: "paris" } )
  client.close();
});*/

let port = 1234;
app.listen(port, () => {
    console.log('Le serveur est en route sur le port : ' + port);
});