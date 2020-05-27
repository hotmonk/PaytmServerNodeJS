const express = require("express");

const app = express();

app.set("view engine", "ejs");

require("./routes")(app);

app.get("/", function (req, res) {
  res.send("hoem page");
});
app.get("/callback", function (req, res) {
  res.render("complete.ejs");
});

app.listen(3000, function () {
  console.log("server running");
});
