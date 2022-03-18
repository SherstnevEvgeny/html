var express = require('express');
//создаем роутер
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//подключаем json
const jsonParser = express.json();
//подключаем модуль и соединяемся с сервером mysql
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodelab4",
  password: "123456787"
});
connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
});

router.get('/',function(req, res){
	connection.query("SELECT * FROM categories",
  function(err, results, fields) {
    res.render('cat', {data:results});
});
})

router.get('/new',function(req, res){
	res.render('newcat',);
});

router.post('/',urlencodedParser,function(req, res){
    console.log("post "+req.body.nameCat);
	sql="insert into categories (catName) values (?)";
	filter=[req.body.nameCat];
    connection.query(sql,filter,function(err, results, fields) {
	//console.log(err);
	res.redirect("cat");
	});
});

router.get('/:catID',function(req, res){
	sql="SELECT * FROM categories where catID=?";
	filter=[req.params.catID];
	connection.query(sql,filter,function(err, results, fields) {
    res.render('showcat', {result:results});
});

router.put('/:catID',jsonParser,function(req, res){
	sql="update categories set catName=? where catID=?";
	filter=[req.body.nameCat,req.body.idCat];
    connection.query(sql,filter,function(err, results, fields) {
	res.render('showcat');
	});
});

router.delete('/',jsonParser,function(req, res){
    sql="select * from products where prodCat=?";
    console.log(req.body.idCat);
	filter=[req.body.idCat];
	/*проверка, если в отделе работает сотрудник, отдел удалить нельзя*/
	connection.query(sql,filter,function(err, results, fields) {
		if (results.length>0)
			res.send('нельзя удалить отдел');
		else{
			sql="delete from categories where catID=?";
			filter=[req.body.idCat];
			connection.query(sql,filter,function(err, results, fields) {
				res.send("Удалено");
            });
		}
	});
	
});


});



module.exports = router;