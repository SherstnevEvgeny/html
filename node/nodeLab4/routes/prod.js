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

router.get('/',jsonParser,function(req, res){
	/*если ппередан фильтр и это не пункт "Все" 
	выполняется запрос к таблице person по коду выбранного в списке отдела*/
	if (Object.keys(req.query).length!=0 && req.query.idCat!=0)
	{
		sql="select * from products where prodCat=?";
		filter=[req.query.idCat];
		connection.query(sql,filter, function(err, results, fields) {
				res.json(results);
});
	}
	else
	{
		/*если был выбран пункт Все" выбираются все сотрудники*/
		if (req.query.idCat==0)
		{
			connection.query(sql,function(err, results, fields) {
			connection.query("SELECT * FROM products",
			function(err1, results, field) {
				res.json(results);
			}
			);});
		}
		/*если фильтр вообще не применялся*/
						else
	{
		sql="select * from products";
		connection.query(sql,function(err, results, fields) {
			connection.query("select * from categories",
			function(err1, cat, field) {
				res.render('prod', {data:results,category:cat});
  });

});
	}
	}
});

router.get('/newProd',function(req, res){
	connection.query("SELECT * FROM categories",
  function(err, results, fields) {
    res.render('newprod', {data:results});
});
});


router.get('/:prodID',function(req, res){
	sqlP="SELECT * FROM products where prodID=?";
	filter=[req.params.prodID]
	connection.query(sqlP,filter,function(err, results, fields) {
		sqlOt="SELECT * FROM categories";
		connection.query(sqlOt,function(err, categories, field) {
	    res.render('showprod', {data:results,category:categories});
});
});
});


router.put('/:prodID',jsonParser,function(req, res){
	console.log("put"+req.body.idProd)
	sql="update products set prodID=?,prodName=?,prodManufact=?,prodCost=?,prodCat=? where prodID="+req.body.idProd;
	filter=[req.body.idProd,req.body.nameProd,req.body.manufactProd,req.body.costProd,req.body.catProd];
	console.log(filter);
    connection.query(sql,filter,function(err, results, fields) {
	res.redirect('showprod');
	});
});


router.delete('/',jsonParser,function(req, res){
	sql="delete from products where prodID=?";
	filter=[req.body.idProd];
    connection.query(sql,filter,function(err, results, fields) {
	res.redirect("prod");
	});
});


router.post('/',urlencodedParser,function(req, res){
    console.log(req.body.idProd,req.body.nameProd,req.body.manufactProd,req.body.costProd,req.body.idCat);
	sql="insert into products (prodID,prodName,prodManufact,prodCost,prodCat) values (?,?,?,?,?)";
	filter=[req.body.idProd,req.body.nameProd,req.body.manufactProd,req.body.costProd,req.body.idCat];
    connection.query(sql,filter,function(err, results, fields) {
	console.log(err);
	res.redirect("prod");
	});
});


module.exports = router;