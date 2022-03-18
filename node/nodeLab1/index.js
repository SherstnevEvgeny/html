let express = require('express');
let app = express();

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

app.get('/', urlencodedParser, function(req, res){
    res.sendFile(__dirname + '/auth-get.html')
});


app.post('/', urlencodedParser, function(req, res){
	console.log(req.body.log);
	if (req.body.log)
	{
		let log = req.body.log;
		let pwd = req.body.pwd;
		if (log=='admin' && pwd=='111')
			res.render('AdmRet',{log:log,pwd:pwd});
		else
			res.render('UsrRet',{log:log,pwd:pwd});
	}

});


app.listen(3000);
