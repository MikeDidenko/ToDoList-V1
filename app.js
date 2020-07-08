const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  var today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send("<h1>Yay its the weekend!</h1>")
  } else {
    // res.write("<h1>Boo! Weekday!</h1>");
    // res.write("<h1>Yes its Weekday!</h1>");
    // res.send();
    res.sendFile(__dirname + "/index.html")
  }
});





app.listen(3000, function(){
  console.log("Server started on port 3000")
})
