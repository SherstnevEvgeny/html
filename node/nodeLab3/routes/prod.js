var express = require('express');
var router = express.Router();
var fs = require('fs');
const jsonParser = express.json();

router.get('/edit',function(req, res){
	fs.readFile('users.json', 'utf8', function readFileCallback(err, dat){
    if (err){
        console.log(err);
    } else {
    var users = JSON.parse(dat);
	var id=req.query.id;
	users.userArr.forEach(function(item)
	{
		
		if (item.userID==id)
		{
			//console.log("get "+item.userID);
		res.render('view-user', {data:item});
		}
	});
	
	
	}});

});
router.get('/:userID',function(req, res){
	//console.log("get "+req.params.userID);
	fs.readFile('users.json', 'utf8', function readFileCallback(err, dat){
    if (err){
        console.log(err);
    } else {
    var users = JSON.parse(dat);
	var id=req.params.userID;
	users.userArr.forEach(function(item)
	{
		
		if (item.userID==id)
		{
			console.log("get "+item.userID);
		res.render('user', {data:item});
		}
	});
	
	
	}});

});




router.put('/:userID',jsonParser,function(req, res){
	console.log("put "+req.body);
	fs.readFile('users.json', 'utf8', function readFileCallback(err, dat){
    if (err){
        console.log(err);
    } else {
    var users = JSON.parse(dat);
	var id=req.body.userID;
	var len=users.userArr.length;
	for (let i=0;i<len;i++)
	{
		if (users.userArr[i].userID==id)
		{
			users.userArr[i].userLog=req.body.userLog;
			users.userArr[i].userPWD=req.body.userPWD;
			break;
		}
	}
	json = JSON.stringify(users);
    fs.writeFile('users.json', json,function(error){
      if(error) console.log(err);
	});
	res.render('view-user', {data:users.userArr});
	}});
});

module.exports = router;