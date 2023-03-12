const express = require("express");
const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});