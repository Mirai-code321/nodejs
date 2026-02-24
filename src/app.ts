import getConnection from "./config/database";
import webRoutes from "./routes/web";

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

require("dotenv").config();
// or import 'dotenv/config' (es6)

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static file: css/images/js
app.use(express.static("public"));

//config routes
webRoutes(app);

getConnection();

app.listen(PORT, () => {
  console.log(`Example app listening on portabc ${PORT}`);
  console.log(__dirname + "/views");
});
