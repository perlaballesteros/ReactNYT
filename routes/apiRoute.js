const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=5ebc6c97b9d54381b6f387bfc06b79dd&?q="+req.query.search+"?begin_date="+req.query.start+"?end_date="+req.query.end)
    .then(({ data: { response} }) => res.json(response))
    .catch(err => res.status(422).json(err));
});

module.exports = router;