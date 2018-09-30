var url = new URL(document.URL);
var token = url.searchParams.get("auth");

document.getElementById('dashboard').href = "/dashboard.html?auth="+token;
document.getElementById('videoControl').href = "/index.html?auth="+token;
document.getElementById('videoUpload').href = "/videoUpload.html?auth="+token;
document.getElementById('register').href = "/registerAdmin.html?auth="+token;

function register(){
    var usernameSent = document.getElementById("username").value;
    var passwordSent = document.getElementById("password").value;
    var userrole     = document.getElementById("role").value;
    // $.post("http://localhost:5000/register",{username: usernameSent, password: passwordSent,role : userrole}, function(data){
    //
    //       });

    $.ajax({
        url: "http://localhost:5000/videoPath",
        method: "POST",
        data: { username: usernameSent, password: passwordSent,role : userrole },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        success: function(data)
        {
            if(data==='done')
            {
                alert("Register Success");
                // window.location = "/";
            }else{
                alert("Username or Password is invalid");
                // console.log(usernameSent + passwordSent);
            }
        }
    });
}