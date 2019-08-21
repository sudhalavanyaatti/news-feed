const express = require("express");
const router = express.Router();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("abe83e20f730477984459fbf65e2bc82");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      category: "general",
      language: "en",
      country: "in",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/business", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      category: "business",
      language: "en",
      country: "in",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/sports", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      category: "sports",
      language: "en",
      country: "in",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/entertainment", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      category: "entertainment",
      language: "en",
      country: "in",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/science", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      category: "science",
      language: "en",
      country: "in",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/technology", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      category: "technology",
      language: "en",
      country: "in",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/health", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      category: "health",
      language: "en",
      country: "in",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/inter-business", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "business",
      language: "en",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/inter-sports", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "sports",
      language: "en",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/inter-entertainment", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "entertainment",
      language: "en",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/inter-science", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "science",
      language: "en",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/inter-technology", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "technology",
      language: "en",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/inter-health", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "health",
      language: "en",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.post("/search", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      q: req.body.searchValue,
      country: "in",
      language: "en",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send({ response: response });
    });
});

router.get("/find", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      country: "in",
      language: "en",
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send({ response: response });
    });
});

router.get("/news/:id", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      sources:req.params.id,
      language: 'en',
      
      pageSize: "100"
    })
    .then(response => {
      console.log(response);
      res.send(response);
    });
});

router.get("/sources", function(req, res, next) {
 
  newsapi.v2.sources({

    language: 'en',

    
  }).then(response => {
      console.log(response);
      res.send(response);
    });
});


module.exports = router;
