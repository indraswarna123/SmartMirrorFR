function loginCheck(){
    var usernameSent = document.getElementById("txtusername").value;
    var passwordSent = document.getElementById("txtpassword").value;
    $.post("http://localhost:5000/loginCheck",{username: usernameSent, password: passwordSent}, function(data){
        if(data==='done')
        {
            alert("Login Success");
            window.location = "/index.html";
        }else{
            alert("Username or Password is invalid");
            console.log(usernameSent + passwordSent);
        }
    });
}