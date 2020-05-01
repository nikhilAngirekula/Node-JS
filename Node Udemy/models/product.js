const mongoDb = require("mongoDb");
const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, imageUrl, description, id) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this._id = new mongoDb.ObjectID(id);
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      //Update the product
      dbOp = db
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      // Insert the product
      dbOp = db.collection("products").insertOne(this);
    }
    return dbOp.then().catch((err) => {
      console.log(err);
    });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongoDb.ObjectId(prodId) })
      .next()
      .then((product) => {
        console.log(product);
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongoDb.ObjectID(prodId) })
      .then((result) => {
        console.log("Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
