require("dotenv").config();
const path = require("path");
const express = require("express");

const { PORT } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, "client")));

app.listen(PORT, err => console.warn(err || `listening on ${PORT}`));
