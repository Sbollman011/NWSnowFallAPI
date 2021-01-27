const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const $ = require('cheerio');

const app     = express();


app.get('/snoqualmie', function(req, res){
    // The scraping magic will happen here
    let url = "https://summitatsnoqualmie.com/conditions";

   request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var  snoqSnow24API = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(2) > div > span')
                                    .text().trim();
            snoqSnow24API = snoqSnow24API.split("\n");
            snoqSnow24API = snoqSnow24API[0];

           var snoqSnowSeasonAPI = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > ul > li:nth-child(6) > div > span > span')
                                    .text().trim();
            snoqSnowSeasonAPI.split("\"");

            var snoqWeatherTempAPI = $('#conditions_area_d5ec042997234b3797b6799d47bfcadf > div > div > ul > li:nth-child(4) > div:nth-child(2) > div > ul > li:nth-child(1) > div > span > span')
            .text().trim();
            
        var json = {
            snoqSnow24API :snoqSnow24API,
            snoqSnowSeasonAPI : snoqSnowSeasonAPI,
            snoqWeatherTempAPI : snoqWeatherTempAPI
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
                                bakerSnow24API = bakerSnow24API.split('″');
                                bakerSnow24API = bakerSnow24API[0];

        var bakerSnowSeasonAPI = $('body > div > header > div.c5h-banner-wrap-full.clearfix > div > div:nth-child(2) > div.small-12.medium-12.large-4.columns > div:nth-child(2) > div > div:nth-child(2) > div > span.unit-i')
                                .text().trim();
                                bakerSnowSeasonAPI = bakerSnowSeasonAPI.split('″');
                                bakerSnowSeasonAPI = bakerSnowSeasonAPI[0];

        var bakerWeatherTempAPI =  $('body > div > header > div.c5h-banner-wrap-full.clearfix > div > div:nth-child(2) > div:nth-child(1) > div.report-block > div.row > div:nth-child(2) > div.report-temp-value > span.unit-i')
        .text().trim();
        bakerWeatherTempAPI = bakerWeatherTempAPI.split(' '); 
        bakerWeatherTempAPI = bakerWeatherTempAPI[0].split('°');
        bakerWeatherTempAPI = bakerWeatherTempAPI[0];        





        
        var json = {
            bakerSnow24API :bakerSnow24API,
            bakerSnowSeasonAPI : bakerSnowSeasonAPI,
            bakerWeatherTempAPI : bakerWeatherTempAPI
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
                                    whiteSnowSeasonAPI = whiteSnowSeasonAPI.split('summit');
                                    whiteSnowSeasonAPI = whiteSnowSeasonAPI[1].split('”');
                                    whiteSnowSeasonAPI = whiteSnowSeasonAPI[0];

                                    if(whiteSnow24API = "Trace"){
                                        whiteSnow24API = "0";
                                    }
            var whiteWeatherTempAPI = $('#maincontent > section.weather-blocks > div > div:nth-child(1) > div > h2:nth-child(5)')
                                    .text().trim();
                                    whiteWeatherTempAPI = whiteWeatherTempAPI.split('summit');
                                    whiteWeatherTempAPI = whiteWeatherTempAPI[0].split('°');
                                    whiteWeatherTempAPI = whiteWeatherTempAPI[0];


                                    console.log(whiteWeatherTempAPI);
                                    console.log("Here");

                                    if(whiteWeatherTempAPI == "") {
                                      whiteWeatherTempAPI = "0";
                                    }




            var json = {
                whiteSnow24API :whiteSnow24API,
                whiteSnowSeasonAPI : whiteSnowSeasonAPI,
                whiteWeatherTempAPI: whiteWeatherTempAPI
                
            };
        
    
            res.send(json);
    
            }
    
        });

});

app.get('/bestbuy', function(req, res){
  const https = require('https');


  https.get('https://api.bestbuy.com/v1/products(sku=6434198|sku=642943|sku=6432447|sku=6432446|sku=6430623|sku=6437910|sku=6432657|'+
  'sku=6432656|sku=6436193|sku=6436192|sku=6445108|sku=6430215|sku=6430624|sku=6432400|sku=6430175|sku=6432445|sku=6430620|sku=6436219|'+
  'sku=6436223|sku=6436191|sku=6432658|sku=6436196|sku=6432399|sku=6430621|sku=6432655|sku=6436194|sku=6429442|sku=6439299|sku=6438278|sku=6439128|'+
  'sku=6439385|sku=6437909|sku=6439384|sku=6439127|sku=6439300|sku=6439301|sku=6432653|sku=6432654|sku=6439402|sku=6441172|sku=6444444|sku=6442484|'+
  'sku=6442485|sku=6444357|sku=6442077|sku=6441020|sku=6442585|sku=6441226|sku=6440913|sku=6444358|sku=6444716|sku=6445157|sku=6439000|sku=6438942|'+
  'sku=6438941|sku=6426149|sku=6430161|sku=6428324|sku=6430277)?'+
  'apiKey=AaYoqjtg2rHGdiQAaUFs24hq&sort=onlineAvailability.asc&show=addToCartUrl,onlineAvailability,regularPrice,sku,name&pageSize=60&format=json', (resp) => {
   let data = ' ';
  
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      data = JSON.stringify(data);
      res.send(data);
    });
  });
});
/*
app.get('/crystal', function(req, res){
    
    const puppeteer = require('puppeteer');
    const $ = require('cheerio');
    // The scraping magic will happen here
   
const url = 'https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams#/';

puppeteer
  .launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  })
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
   
      var crystalSnowSeasonAPI= ($('#snowbase-cm-imperial:last',html).text());
      var crystalSnow24API = ($('#main-col > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div.col.conditions-block > div > p:nth-child(3) > strong',html).text());
      crystalSnow24API = crystalSnow24API.split(".");

      crystalSnow24API = crystalSnow24API[0];

      var json = {
        crystalSnow24API :crystalSnow24API,
        crystalSnowSeasonAPI : crystalSnowSeasonAPI
  
    };


    res.send(json);
    
  })
  .catch(function(err) {
    console.log("Stevens failed");
  });

});

app.get('/stevens', function(req, res){
    
    const puppeteer = require('puppeteer');
    const $ = require('cheerio');
    // The scraping magic will happen here
   
const url = 'https://www.stevenspass.com/the-mountain/mountain-conditions/weather-report.aspx';

puppeteer
  .launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  })
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
   
      var stevenSnowSeasonAPI= ($('#snow_report_1 > div.snow_report__content.row > ul > li:nth-child(6) > div > h5',html).text());
      stevenSnowSeasonAPI = stevenSnowSeasonAPI.split("in");
      stevenSnowSeasonAPI = stevenSnowSeasonAPI[0];
      var stevenSnow24API = ($('#snow_report_1 > div.snow_report__content.row > ul > li:nth-child(3) > div > h5',html).text());
      stevenSnow24API = stevenSnowSeasonAPI.split("in");
      stevenSnow24API = stevenSnowSeasonAPI[0];



      var json = {
        stevenSnow24API :stevenSnow24API,
        stevenSnowSeasonAPI : stevenSnowSeasonAPI
  
    };


    res.send(json);
    
  })
  .catch(function(err) {
    console.log("Stevens failed");
  });

});
*/

app.listen((process.env.PORT || 5000));
//app.listen('8080');
console.log('API is running on http://localhost:5000');
module.exports = app;
