var express = require("express");
var upload2 = require("express-fileupload");
var app = express();
var bodyParser     =         require("body-parser");
var session = require("express-session");
var xml2js = require("xml2js");
var parserxml = new xml2js.Parser();
var jwt = require('jsonwebtoken');
const testFolder = __dirname+'/videos';
const fs = require('fs');

global.myvar = 100;

fileNames = new Array();

fs.readdir(testFolder, (err, files) => {
	  files.forEach(file => {
	  	fileNames.push(file)
	    console.log(file);
	  });
	})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret: "testing"}));
app.use(upload2());
 /* serves main page */
 app.get("/", function(req, res) {
     console.log(req.session.username);
    if(req.session.username){
        res.sendFile( __dirname+'/index.html', { fileName: fileNames})
    }else{
        console.log(req.session.username);
        res.redirect('/login.html');
    }

 });
app.get("/index.html", function(req, res) {
    if(req.session.username){
        res.sendFile( __dirname+'/index.html', { fileName: fileNames})
    }else{
        res.redirect('/login.html');
    }
});
app.get("/videoUpload.html", function(req, res) {
    if(req.session.username){
        res.sendFile( __dirname+'/videoUpload.html')
    }else{
        res.redirect('/login.html');
    }
});
app.get("/registerAdmin.html", function(req, res) {
    if(req.session.username){
        res.sendFile( __dirname+'/registerAdmin.html')
    }else{
        res.redirect('/login.html');
    }
});
 app.get("/anyurl", ensureToken,function(req, res) {
     jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
         if (err) {
             res.sendStatus(403);
         } else {
             fs.readdir(testFolder, (err, files) => {
                 files.forEach(file => {
                     fileNames.push(file)
                     console.log(file);
                 });
             });

             //fileNames.push(arr);
             res.json(fileNames)
             fileNames = []
         }
     });


 });

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.get("/addData", function(req, res) {
    var test = "CocaCola.mp4";
    var statusData = 0;
    fs.readFile('analytics.xml', 'utf-8', function (err, data){
        if(err) console.log(err);
        // we log out the readFile results
        // console.log(data);
        // we then pass the data to our method here
        parserxml.parseString(data, function(err, result){
            if(err) console.log(err);
            // here we log the results of our xml string conversion
            console.log(result);
            // save our json to a variable
            var json = result;
            // edit the first node’s weight and set it to 99
            // json.data.file[0].name = "99";
            for(var i=0;i<json.data.file.length;i++){
                if(json.data.file[i].name == test){
                    json.data.file[i].view ++;
                    statusData = 1;
                    break;
                }
            }
            // console.log(json.data.file.length);

            if(statusData == 1){
                var builder = new xml2js.Builder();
                var xml = builder.buildObject(json);

                fs.writeFile('analytics.xml', xml, function(err, data){
                    if (err) console.log(err);

                    console.log("successfully written our update xml to file");
                })
            }

            res.send("ok");

        });



    });
});

app.get("/videoanalytics", ensureToken,function(req, res) {
    jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            fs.readFile( './analytics.xml', function(err, data) {
                parserxml.parseString(data,function(err,result){

                    res.json(result);
                })

            });
        }
    });
});

app.get("/userread", function(req,res){
  var text = fs.readFileSync('user.txt','utf8')
  console.log(text);
  var arr=text.split(/\r?\n/);
  res.json(arr);
  console.log(arr.length);
})



var userAdmin = "admin";

var passAdmin = "admin";

app.post("/api/login", function(req, res) {
    // insert code here to actually authenticate, or fake it
    const user = { id: 3 };

    // then return a token, secret key should be an env variable
    const token = jwt.sign({ user: user.id }, 'secret_key_goes_here');
    res.json({
        message: 'Authenticated! Use this token in the "Authorization" header',
        token: token
    });
});

app.get('/api/protected', ensureToken, function(req, res) {
    jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                description: 'Protected information. Congrats!'
            });
        }
    });
});

app.post('/loginCheck',function(req,res){
  var username=req.body.username;
  var password=req.body.password;
  var user = fs.readFileSync('user.txt','utf8');
  var pass = fs.readFileSync('password.txt','utf8');
  var role = fs.readFileSync('role.txt','utf8');
  var userList = user.split(/\r?\n/);
  var passList = pass.split(/\r?\n/);
  var roleList = role.split(/\r?\n/);
  

  for(var counter=0;counter<userList.length;counter++){
    if(username == userList[counter]){
      console.log("user pass");
      if(password == passList[counter]){
        console.log("pass pass");
        req.session.username = req.body.username;
        const user = { id: req.body.username };

        // Signing JWT token
        const token = jwt.sign({ user: user.id }, 'secret_key_goes_here');
        res.send("done "+token);
        break;   
      }
    }else{
        if(counter==userList.length-1){
          res.send("fail");
        }
    }
  }
  

});

app.get('/logout',function(req,res){

    // if the user logs out, destroy all of their individual session
    // information
    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/login.html');
        }
    });

});

app.post('/register',ensureToken,function(req,res){
    jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var username=req.body.username;
            var password=req.body.password;
            var role = req.body.role;
            var check = 0;
            fs.appendFile("user.txt", "\n"+username, function(err) {
                if(err) {
                    check=0;
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            fs.appendFile("password.txt", "\n"+password, function(err) {
                if(err) {
                    check=0;
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            fs.appendFile("role.txt", "\n"+role, function(err) {
                if(err) {
                    check=0;
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
            if(check==0){
                res.send("done");
            }else{
                res.send("false");
            }
        }
    });

});

app.post('/upload',function(req,res){
    // jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
    //     if (err) {
    //         res.sendStatus(data);
    //         res.send("failed token");
    //     } else {
    //         console.log(req.files);
    //         if(req.files.upfile){
    //             var file = req.files.upfile,
    //                 name = file.name,
    //                 type = file.mimetype;
    //             var uploadpath = __dirname + '/videos/' + name;
    //             file.mv(uploadpath,function(err){
    //                 if(err){
    //                     console.log("File Upload Failed",name,err);
    //                     res.send("Error Occured!")
    //                 }
    //                 else {
    //                     console.log("File Uploaded",name);
    //                     res.send('done');
    //                     // res.send('<script>window.location.href="/videoUpload.html";</script>');
    //                 }
    //             });
    //         }
    //         else {
    //             res.send("No File selected !");
    //             res.end();
    //         };
    //     }
    // });

    console.log(req.files);
    if(req.files.upfile){
        var file = req.files.upfile,
            name = file.name,
            type = file.mimetype;
        var uploadpath = __dirname + '/videos/' + name;
        file.mv(uploadpath,function(err){
            if(err){
                console.log("File Upload Failed",name,err);
                res.send("Error Occured!")
            }
            else {
                console.log("File Uploaded",name);
                res.send('done');
                // res.send('<script>window.location.href="/videoUpload.html";</script>');
            }
        });
    }
    else {
        res.send("No File selected !");
        res.end();
    };

})

app.post('/videoPath',ensureToken,function(req,res){
    jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            var path=req.body.video;
            console.log(path);
            fs.readFile('analytics.xml', 'utf-8', function (err, data){
                if(err) console.log(err);
                // we log out the readFile results
                // console.log(data);
                // we then pass the data to our method here
                parserxml.parseString(data, function(err, result){
                    if(err) console.log(err);
                    // here we log the results of our xml string conversion
                    console.log(result);
                    // save our json to a variable
                    var json = result;
                    // edit the first node’s weight and set it to 99
                    for(var i=0;i<json.data.file.length;i++){
                        if(json.data.file[i].name == path){
                            var value = new Number(json.data.file[i].view);
                            json.data.file[i].view = value+1;
                            break;
                        }
                    }

                    var builder = new xml2js.Builder();
                    var xml = builder.buildObject(json);

                    fs.writeFile('analytics.xml', xml, function(err, data){
                        if (err) console.log(err);

                        console.log("successfully written our update xml to file");
                    })

                });



            });
            res.send("done");
            res.end("yes");
        }
    });

});


 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     // console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]); 
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });