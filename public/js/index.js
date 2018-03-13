"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let request = require('request');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.route("/")
    .get((req, res) => {
    res.render("home");
});
app.route("/results")
    .get((req, res) => {
    //Using expMod req here
    let date = req.query.date;
    let urlString = "https://api.nasa.gov/planetary/apod?date=" + date + "&hd=false&api_key=<your_api_key_here";
    //********* Using request module here *******************
    request(urlString, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let jsData = JSON.parse(body);
            res.render("results", { ejsData: jsData });
        }
    });
});
app.listen(3000, () => {
    console.log("NASA API Listening on port 3000");
});
