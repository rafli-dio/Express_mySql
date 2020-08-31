const mysql = require("mysql");
const express = require("express");
const app = express();

const conect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_mysql",
});

conect.connect((err) => {
  if (err) throw err;
  console.log("koneksi sukses banget jaya selalu");
});

app.listen(6000, () => {
  console.log("server berjalan di port 6000");
});
