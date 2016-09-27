/// <reference path="./../../typings/tsd.d.ts" />
var express = require('express'), api_router = express.Router();
// Car brands page
api_router.get('/brands', function (req, res) {
    res.send('Audi, BMW, Mercedes');
});
// Car models page
api_router.get('/models', function (req, res) {
    res.send('Audi Q7, BMW X5, Mercedes GL');
});
module.exports = api_router;
