const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const app     = express();


app.get('/snoqualmie', function(req, res){
    // The scraping magic will happen here
    let url = "https://summitatsnoqualmie.com/conditions";

   request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var  snoqSnow24API = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > div > span')
                                    .text().trim();
            snoqSnow24API.split(" ");

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
    

});

app.get('/baker', function(req, res){
    // The scraping magic will happen here
    let url = "https://www.mtbaker.us/snow-report";
 

 
   request(url, function(error, response, html) {
        if (!error) {
        var $ = cheerio.load(html);
         var bakerSnow24API = $('body > div > header > div.c5h-banner-wrap-full.clearfix > div > div:nth-child(2) > div.small-12.medium-12.large-4.columns > div:nth-child(1) > div > div:nth-child(2) > div.report-snowfall-value.report-snowfall-value-24 > span.unit-i')
                                .text().trim();
                                bakerSnow24API.split(" ");

        var bakerSnowSeasonAPI = $('body > div > header > div.c5h-banner-wrap-full.clearfix > div > div:nth-child(2) > div.small-12.medium-12.large-4.columns > div:nth-child(2) > div > div:nth-child(2) > div > span.unit-i')
                                .text().trim();
        bakerSnowSeasonAPI.split(" ");
        
        var json = {
            bakerSnow24API :bakerSnow24API,
            bakerSnowSeasonAPI : bakerSnowSeasonAPI
        };
    

        res.send(json);

        }

    });
});

    app.get('/whitepass', function(req, res){
        // The scraping magic will happen here
        let url = "https://skiwhitepass.com/snow-report";
     
    
     
       request(url, function(error, response, html) {
            if (!error) {
            var $ = cheerio.load(html);
            var whiteSnow24API = $('#maincontent > section.weather-blocks > div > div:nth-child(2) > div > h2:nth-child(5)')
                                    .text().trim();
                                    whiteSnow24API = whiteSnow24API.split("\"");
                                    whiteSnow24API = whiteSnow24API[0];
    
           var whiteSnowSeasonAPI = $('#maincontent > section.weather-blocks > div > div:nth-child(2) > div > h2:nth-child(10)')
                                    .text().trim();
                                    whiteSnowSeasonAPI = whiteSnowSeasonAPI.split(" ");
                                    whiteSnowSeasonAPI = whiteSnowSeasonAPI[0];
            
            var json = {
                whiteSnow24API :whiteSnow24API,
                whiteSnowSeasonAPI : whiteSnowSeasonAPI
            };
        
    
            res.send(json);
    
            }
    
        });

});

/*
app.get('/stevens', function(req, res){
    // The scraping magic will happen here
    let url = "https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams#/";
 

 
   request(url, function(error, response, html) {
        if (!error) {
        var $ = cheerio.load(html);
        var whiteSnow24API = $('#main > div.grid-container.grid-container-padded > div > div.cell.medium-4.widget-area.hide-for-small-only > section:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2)')
                                .text().trim();
                                whiteSnow24API = whiteSnow24API.split("\"");
                                whiteSnow24API = whiteSnow24API[0];

       var whiteSnowSeasonAPI = $('#main-col > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div.col.conditions-block > div > p:nth-child(3) > strong')
                                .text().trim();
                                whiteSnowSeasonAPI = whiteSnowSeasonAPI.split(" ");
                                whiteSnowSeasonAPI = whiteSnowSeasonAPI[0];
        
        var json = {
            whiteSnow24API :whiteSnow24API,
            whiteSnowSeasonAPI : whiteSnowSeasonAPI
        };
    

        res.send(json);

        }

    });

});

  app.get('/stevens', function(req, res){
    // The scraping magic will happen here
    let url = "https://snoflo.org/report/snow/washington/stevens-pass--------/";
 

 
   request(url, function(error, response, html) {
      //  if (!error) {
        var $ = cheerio.load(html);
        var stevenSnow24API = $('#main > div.grid-container.grid-container-padded > div > div.cell.medium-4.widget-area.hide-for-small-only > section:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2)')
                                .text()
                               // stevenSnow24API = stevenSnow24API.split(" ");
                                //stevenSnow24API = stevenSnow24API[0];

       var stevenSnowSeasonAPI = $('#main > div.grid-container.grid-container-padded > div > div.cell.medium-4.widget-area.hide-for-small-only > section:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(2)')
                                .text()
                                //stevenSnowSeasonAPI = stevenSnowSeasonAPI.split(" ");
                                //stevenSnowSeasonAPI = stevenSnowSeasonAPI[0];
        
        var json = {
            stevenSnow24API :stevenSnow24API,
            stevenSnowSeasonAPI : stevenSnowSeasonAPI
        };
    

        res.send(json);

      //  }

    });

});

app.get('/crystal', function(req, res){
    // The scraping magic will happen here
    let url = "https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams#/";
 

 
   request(url, function(error, response, html) {
        if (!error) {
        var $ = cheerio.load(html);
        var crystalSnow24API = $('#snowbase-cm-imperial')
                                .text().trim()
                               //crystalSnow24API = crystalSnow24API.split(" ");
                               //crystalSnow24API = crystalSnow24API[0];

       var crystalSnowSeasonAPI = $('#main-col > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div.col.conditions-block > div > p:nth-child(3) > strong')
                                .text().trim()
                                //crystalSnowSeasonAPI = crystalSnowSeasonAPI.split(" ");
                                //crystalSnowSeasonAPI = crystalSnowSeasonAPI[0];
        
        var json = {
            crystalSnow24API :crystalSnow24API,
            crystalSnowSeasonAPI : crystalSnowSeasonAPI
        };
    

        res.send(json);

        }

    });

});*/

app.listen((process.env.PORT || 5000));
//app.listen('8080');
console.log('API is running on http://localhost:8080');
module.exports = app;