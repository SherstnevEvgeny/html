let express = require('express');
let app = express();
let fs = require('fs');

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
const jsonParser = express.json();
let index = require('./routes/index');
let prod = require('./routes/product');

app.use('/', index);
app.use('/product-view', prod);



app.listen(3000);

