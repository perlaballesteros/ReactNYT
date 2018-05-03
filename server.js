const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoute");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use("/api",routes);

// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var URI_String=process.env.MONGOLAB_URI||process.env.MONGOHQ_URL||"mongodb://localhost/nytreact";
mongoose.connect(URI_String,(err,res)=>{
  if(err){
    console.log("ERROR CONNECTING TO: "+URI_String +". "+ err)
  }
  else{
    console.log("SUCCESS CONNECTED TO: "+URI_String)
  }
})
// var MONGODB_URI = "mongodb://localhost/nytreact";
// if(process.env.MONGODB_URI){
//   mongoose.Promise = Promise;
//   mongoose.connect(process.env.MONGODB_URI);
// }
// else{
//   // By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// // Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);
// }
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
