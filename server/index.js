const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const modelDB = require("./db");

const PORT = process.env.PORT || 5000;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,Authorization");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./../build")));

app.set("/static", path.join(__dirname, "./../build/static"));

app.get("/", (req, res) => res.render("./../build/index"));

app.get("/api/tableList", (req, res) => {
  const list = modelDB.getTableList();
  setTimeout(() => {
    //imitate real request to the DB
    res.status(200).send({ dbList: Object.keys(list) });
  }, 1000);
});
app.get("/api/rules", (req, res) => {
  let { item } = req.query;
  console.log("items", item);
  const rules = modelDB.getRules(item);
  if (rules) {
    setTimeout(() => {
      res.status(200).send(rules);
    }, 2000);
  } else {
    res.status(200).send({ error: "Not found" });
  }
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./404.html"));
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
