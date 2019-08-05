const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('abe83e20f730477984459fbf65e2bc82');



router.get('/', function(req, res, next) 
{    
    res.send('API is working properly');
});

module.exports = router;
