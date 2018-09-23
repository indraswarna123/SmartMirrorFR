function register(){
    var usernameSent = document.getElementById("username").value;
    var passwordSent = document.getElementById("password").value;
    var userrole     = document.getElementById("role").value;
    $.post("http://localhost:5000/register",{username: usernameSent, password: passwordSent,role : userrole}, function(data){
            if(data==='done')
              {
                alert("Register Success");
                // window.location = "/";
              }else{
              	alert("Username or Password is invalid");
              	// console.log(usernameSent + passwordSent);
              }
          });
}