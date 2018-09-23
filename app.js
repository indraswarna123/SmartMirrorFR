var express = require("express");
var upload2 = require("express-fileupload");
var app = express();
var bodyParser     =         require("body-parser");
var session = require("express-session");
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
 app.get("/anyurl", function(req, res) {
 	fs.readdir(testFolder, (err, files) => {
	  files.forEach(file => {
	  	fileNames.push(file)
	    console.log(file);
	  });
	})
    res.json(fileNames)
    fileNames = []
 });

app.get("/userread", function(req,res){
  var text = fs.readFileSync('user.txt','utf8')
console.log(text);
var arr=text.split(/\r?\n/);
  res.json(arr);
  console.log(arr.length);
})


 
app.post("/user/add", function(req, res) { 
	/* some server side logic */
	res.send();
});

var userAdmin = "admin";

var passAdmin = "admin";

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
        console.log(req.session.username);
        res.send("done");
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

app.post('/register',function(req,res){
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
  

});

app.post('/upload',function(req,res){
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
        // res.send('Done! Uploading files');
        res.send('<script>window.location.href="/videoUpload.html";</script>');
      }
    });
  }
  else {
    res.send("No File selected !");
    res.end();
  };
})

app.post('/videoPath',function(req,res){
  var path=req.body.video;
  res.send("done");
  res.end("yes");
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