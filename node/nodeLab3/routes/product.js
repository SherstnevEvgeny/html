let express = require('express');
let router = express.Router();
let fs = require('fs');
const jsonParser = express.json();

router.get('/:name', function(req, res){
    fs.readFile('products.json', 'utf8', function readFileCallback(err, dat){
        if (err){
            console.log(err);
        } else {
        let prod = JSON.parse(dat);
        let name=req.params.name;
        prod.prodArr.forEach(function(item)
        {
            if (item.name==name)
            {
                console.log("get "+item.name);
            res.render('product-view', {data:item});
            }
        });
    }
});
});

module.exports = router;