let express = require('express');
let router = express.Router();
let fs = require('fs');

router.get('/', function(req, res) {
    // fs.readFile('products.json', 'utf8', function readFileCallback(err, dat){
    //   if (err){
    //       console.log(err);
    //   } else {
    //   let prodList = JSON.parse(dat);
    //   console.log(prodList.prodArr);
      res.render('index',);
    
  
  });
  
  module.exports = router;