// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

//api/
app.get("/api/", function (req, res) {
  const currentDate = new Date();
  const dateString = {
    unix: currentDate.getTime(),
    utc: currentDate.toUTCString(),
  };
  res.json(dateString);
});

///api/:date
app.get("/api/:date", function (req, res) {
  let { date } = req.params;

  // Check if date is purely numeric (timestamp in milliseconds or seconds)
  if (!isNaN(date)) {
    // Convert to number (assume milliseconds if 13 digits, else seconds)
    date = Number(date);
    if (date.toString().length === 10) {
      date *= 1000; // convert seconds to milliseconds
    }
  }

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({
      unix: parsedDate.getTime(),
      utc: parsedDate.toUTCString(),
    });
  }
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
