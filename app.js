const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());

app.use(express.static("public"))
app.use(express.static(__dirname))

app.use("/", (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, "./index.html"));
})


module.exports = app;