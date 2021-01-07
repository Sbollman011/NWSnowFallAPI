const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const app     = express();

app.get('/', function(req, res){
    // The scraping magic will happen here
    let urlSnoq = "https://summitatsnoqualmie.com/conditions";
    let urlBaker ="";
    let urlWhite ="";
    let urlCrystal ="";
    let urlSteven="";

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html
    request(urlSnoq, function(error, response, html) {
        // First we'll check to make sure no errors occurred when making the request
        if (!error) {
        // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
        var $ = cheerio.load(html);
        // Finally, we'll define the variable we're going to capture
        // We'll be using Cheerio's function to single out the necessary information
        // using DOM selectors which are normally found in CSS.
        var snoqSnow24API = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > div > span')
                                .text().trim();
        snoqSnow24API.split(" ");
        var snoqSnow24API = snoqSnow24API[0];

        var snoqSnowSeasonAPI = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(6) > div > span > span')
                                .text().trim();
        snoqSnowSeasonAPI.split(" ");

        // And now, the JSON format we are going to expose
        var json = {
            snoqSnow24API :snoqSnow24API,
            snoqSnowSeasonAPI : snoqSnowSeasonAPI
        };

        // Send the JSON as a response to the client
        res.send(json);
        }

    });

});

app.listen((process.env.PORT || 5000));
console.log('API is running on http://localhost:8080');
module.exports = app;