function loginCheck(){
    var usernameSent = document.getElementById("txtusername").value;
    var passwordSent = document.getElementById("txtpassword").value;
    $.post("http://localhost:5000/loginCheck",{username: usernameSent, password: passwordSent}, function(data){
        var res = data.split(" ");
        console.log(res);
        if(res[0]==='done')
        {
            alert("Login Success");
            window.location = "/index.html?auth="+res[1];
        }else{
            alert("Username or Password is invalid");
            console.log(usernameSent + passwordSent);
        }
    });
}