const sql = require("mysql2");

const pool = sql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "zXcvbn13",
});

module.exports = pool.promise();
