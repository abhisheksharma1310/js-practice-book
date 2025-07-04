const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const myObj = require("./data/users");
const userRoute = require("./userRoute");

const app = express();
const port = process.env.port || 8080;

const fileName = "index.html";
const url = path.join(__dirname, "public", "index.html");
const formUrl = path.join(__dirname, "public", "form.html");

//use user route => check userRoute.js
app.use("/user", userRoute);

//custom middleware
const logOutput = (req, res, next) => {
  console.log("Middleware in action: ", req.params, req.body);
  next();
};

//use custom middleware
app.use(logOutput);

//use body parser to parse body
app.use(bodyParser.urlencoded({ extended: true }));

//use public to serve static files
app.use(express.static(__dirname + "/public"));

//home get route
app.get("/", (req, res) => {
  res.sendFile(fileName);
});

//user get route
app.get("/users", (req, res) => {
  res.sendFile(formUrl);
});

//user post route for create user
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send({ status: "created", data: req.body });
});

//get route for read user
app.get("/users/:id", (req, res) => {
  const userFound = (user) => user.id == req.params.id;
  let myJson = [];
  if (myObj.users.some(userFound)) {
    myJson = myObj.users.filter((user) => user.id == req.params.id);
  }
  res.json(myJson);
});

//put route for update user
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  res.json({ status: "updated", id: id });
});

//delete route for delete user
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  res.json({ status: "deleted", id: id });
});

//route chaining
app
  .route("/test")
  .get((req, res) => res.send("Test Get"))
  .post((req, res) => res.send("Test Post"))
  .put((req, res) => res.send("Test Put"))
  .patch((req, res) => res.send("Test Patch"))
  .delete((req, res) => res.send("Test Delete"));

app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});
