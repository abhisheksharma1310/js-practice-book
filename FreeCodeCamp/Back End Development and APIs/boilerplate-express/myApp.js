let express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//middleware
app.use(function (req, res, next) {
  //log client details
  const { method, path, ip } = req;
  console.log(`${method} ${path} - ${ip}`);
  next();
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  //res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", function (req, res) {
  const { word } = req.params;
  res.json({ echo: word });
});

app
  .route("/name")
  .get(function (req, res) {
    const { first, last } = req.query;
    res.json({ name: `${first} ${last}` });
  })
  .post(function (req, res) {
    const { first, last } = req.body;
    res.json({ name: `${first} ${last}` });
  });

module.exports = app;
