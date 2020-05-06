const express = require("express");
const bodyParser = require("body-parser");
const { addRoutes } = require("./config/routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
addRoutes(app);
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
