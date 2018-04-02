const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
  let url;
  if(!req.query.begin_date || !req.query.end_date){
    url="https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=5ebc6c97b9d54381b6f387bfc06b79dd&q="+req.query.q;
  }
  else{
    url="https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=5ebc6c97b9d54381b6f387bfc06b79dd&q="+req.query.q+"?begin_date="+req.query.begin_date+"?end_date="+req.query.end_date;
  }
  console.log(url);
  axios
    .get(url)
    .then(({ data: { response} }) => 
    //console.log(data.response.docs[1]);
    res.json(response.docs))
    .catch(err => res.status(422).json(err));
});

module.exports = router;