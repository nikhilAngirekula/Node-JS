const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Nikhil_Nick:fTYtWLQvW3DM4fNQ@cluster0-e5hxu.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No data base found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

// fTYtWLQvW3DM4fNQ
