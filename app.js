const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  let itemName = req.body.newItem;

  items.push(itemName);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is litning on port 3000!");
});
