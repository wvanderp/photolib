"use strict";

let express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
    res.send("this is api");
});

let movies = require("");
router.use("/movies", movies.router);

module.exports = router;