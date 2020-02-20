//const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const uri = "";
//const client = new MongoClient(uri, { useNewUrlParser: true });
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true });
// client.connect(err => {
//   const collection = client.db("Hypertube").collection("users");
//   // perform actions on the collection object
//   console.log(collection);
//   client.close();
// })
// module.exports = client;
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;
