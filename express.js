const express = require("express");
const path = require("path");
var bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());



//created a server
app.listen(port) 
 


//GET api which return query param,path param
app.get("/emp/:id", (req, res) => {
  res.send({
    id: req.params.id,
    path: "/emp/" + req.params.id,
  });
});


app.post("/value", (req, res) => {
  const { name, designation} = req.body;
  res.send([name, designation]);
});

