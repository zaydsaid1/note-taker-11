const path = require("path");
const router = require("express").Router();

// Notes HTML GET Requests - Uses apiRoutes as extension
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Default HTML GET Requests
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
