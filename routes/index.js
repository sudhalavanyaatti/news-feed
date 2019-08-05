const express = require('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('abe83e20f730477984459fbf65e2bc82');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/home', function(req, res, next) 
{    
  newsapi.v2.topHeadlines({
    category: 'general',
    language: 'en',
    country: 'in'
  }).then(response => {
    console.log(response);
  res.send(response);
  });
   
});

router.get('/business', function(req, res, next) 
{    
  newsapi.v2.topHeadlines({
    category: 'business',
    language: 'en',
    country: 'in'
  }).then(response => {
    console.log(response);
  res.send(response);
  });
   
});

router.get('/sports', function(req, res, next) 
{    
  newsapi.v2.topHeadlines({
    category: 'sports',
    language: 'en',
    country: 'in'
  }).then(response => {
    console.log(response);
  res.send(response);
  });
   
});

router.get('/entertainment', function(req, res, next) 
{    
  newsapi.v2.topHeadlines({
    category: 'entertainment',
    language: 'en',
    country: 'in'
  }).then(response => {
    console.log(response);
  res.send(response);
  });
   
});



router.get('/science', function(req, res, next) 
{    
  newsapi.v2.topHeadlines({
    category: 'science',
    language: 'en',
    country: 'in'
  }).then(response => {
    console.log(response);
  res.send(response);
  });
   
});

router.get('/technology', function(req, res, next) 
{    
  newsapi.v2.topHeadlines({
    category: 'tetchnology',
    language: 'en',
    country: 'in'
  }).then(response => {
    console.log(response);
  res.send(response);
  });
   
});

router.get('/health', function(req, res, next) 
{    
  newsapi.v2.topHeadlines({
    category: 'health',
    language: 'en',
    country: 'in'
  }).then(response => {
    console.log(response);
  res.send(response);
  });
   
});
router.post("/create-user", (req, res) => {
  userController.create(req.body, (err, response) => {
    if (err) throw err;
    console.log(response);
    res.send(response);
  });
});




module.exports = router;
