const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.port || 8080;

const fileName = "index.html";
const url = path.join(__dirname, "public", "index.html");
const formUrl = path.join(__dirname, "public", "form.html");

//use body parser to parse body
app.use(bodyParser.urlencoded({ extended: true }));

//use public to serve static files
app.use(express.static(__dirname + "/public"));

//home get route
app.get("/", (req, res) => {
  res.sendFile(url);
});

//user get route
app.get("/users", (req, res) => {
  res.sendFile(formUrl);
});

//user post route
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//patern match
//abcd || acd
app.get("/ab?cd", (req, res) => {
  res.send("<h1>AB????C</h1>");
});

//abde || abbbbbbde
app.get("/ab+de", (req, res) => {
  res.send("<h1>AB++++++CDE</h1>");
});

//abckgsde || abde
app.get("/ab*de", (req, res) => {
  res.send("<h1>AB********C</h1>");
});

//reg exp
//z
app.get(/z/, (req, res) => {
  res.send("<h1>zzzzzzzzzz</h1>");
});

//route parameter
app.get("/user/:id/:val", (req, res) => {
  //request parameters
  res.send(req.params);
});

//multiple callback
app.get(
  "/m/:id/:val",
  (req, res, next) => {
    res.send(req.params);
    next();
  },
  (req, res, next) => {
    console.log(`Second callback ${req.params.val}`);
    next();
  },
  (req, res, next) => {
    console.log(`Third callback ${req.params.val}`);
    next();
  },
  (req, res) => {
    console.log(`Fourth callback ${req.params.val}`);
  }
);

app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});
