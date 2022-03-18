let express = require('express');
let app = express();
let fs = require('fs');

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

app.get('/', urlencodedParser, function(req, res){
    res.sendFile(__dirname + '/auth-get.html')
});


app.post('/', urlencodedParser, function(req, res)
{
	fs.readFile('users.json', 'utf8', function readFileCallback(err, dat)
	{
		if(err)
		{
			console.log(err);
		}else{
			let users = JSON.parse(dat);
			let len = users.userArr.length;
			let newId = len+1;
			console.log(req.body.log);
			if (req.body.log)
			{
				let log = req.body.log;
				let pwd = req.body.pwd;
				for(let i=0;i<len;i++)
				{
					let curUser = users.userArr[i];
					let curLog = curUser.userLog;
					let curPWD = curUser.userPWD;
					let curID = curUser.userID;
					if (log==curUser.userLog && pwd==curUser.userPWD){
						res.render('UsrRet',{log:curLog,pwd:curPWD,id:curID});
						console.log("already exists");
						break;
					}
					if(i==len-1){
						users.userArr.push({userID: newId, userLog:log,userPWD:pwd});
						json = JSON.stringify(users);
    					fs.writeFile('users.json', json,function(error){
     						if(error) throw error; 
						});
						res.render('NewUsr',{log:log,pwd:pwd,id:newId});
						console.log("User has been created");


					}

						
				}
				
			}
		}
		
	})
});


app.listen(3000);
