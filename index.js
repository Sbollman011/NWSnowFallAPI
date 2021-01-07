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

 
    request(urlSnoq, function(error, response, html) {
        if (!error) {
        var $ = cheerio.load(html);
        var snoqSnow24API = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > div > span')
                                .text().trim();
        snoqSnow24API.split(" ");
        var snoqSnow24API = snoqSnow24API[0];

        var snoqSnowSeasonAPI = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(6) > div > span > span')
                                .text().trim();
        snoqSnowSeasonAPI.split(" ");

        var json = {
            snoqSnow24API :snoqSnow24API,
            snoqSnowSeasonAPI : snoqSnowSeasonAPI
        };

        res.send(json);
        }

    });

    request(urlSnoq, function(error, response, html) {
        if (!error) {
        var $ = cheerio.load(html);
        var snoqSnow24API = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > div > span')
                                .text().trim();
        snoqSnow24API.split(" ");
        var snoqSnow24API = snoqSnow24API[0];

        var snoqSnowSeasonAPI = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(6) > div > span > span')
                                .text().trim();
        snoqSnowSeasonAPI.split(" ");

        var json = {
            snoqSnow24API2 :snoqSnow24API2,
            snoqSnowSeasonAPI2 : snoqSnowSeasonAPI2
        };

        res.send(json);
        }

    });

});

app.listen((process.env.PORT || 5000));
console.log('API is running on https://pnwsnowapi.herokuapp.com/');
module.exports = app;