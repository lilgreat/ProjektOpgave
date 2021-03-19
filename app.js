
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home")
})

app.get("/action", function(req, res){
  res.render("action")
})
app.get("/cause", function(req, res){
  res.render("cause")
})
app.get("/currentState", function(req, res){
  res.render("currentState")
})

app.listen(3000, function(){
  console.log("server is up and running")
})
