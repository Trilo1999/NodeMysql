const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route

require("./app/routes/customer.routes.js")(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Trilo application." });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});