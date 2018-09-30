/// <reference path="angular.min.js" />

//Form_Elements.html Line 467 


demoP = document.getElementById("videoStream");
var numbers = [4, 9, 16, 25];
var videoFileNames = new Array;

var url = new URL(document.URL);
var token = url.searchParams.get("auth");

document.getElementById('dashboard').href = "/dashboard.html?auth="+token;
document.getElementById('videoControl').href = "/index.html?auth="+token;
document.getElementById('videoUpload').href = "/videoUpload.html?auth="+token;
document.getElementById('register').href = "/registerAdmin.html?auth="+token;

$.ajax({
        url: "http://localhost:5000/anyurl",
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            videoFileNames = res;
            console.log(videoFileNames);
        }
    });



function reloadRequest(){
    $.ajax({
        url: "http://localhost:5000/anyurl",
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            videoFileNames = res;
            console.log(videoFileNames);
        }
    });    
}

function initFirst(){
    console.log("test");
}

function myFunction() {
    console.log(videoFileNames.length);
    reloadRequest();
    for(var i=0;i<videoFileNames.length;i++){
        
        var vid = document.createElement("video");
            vid.src="/videos/"+videoFileNames[i]+"#t=15";
            vid.type="video/mp4";
            vid.setAttribute("id",videoFileNames[i])
            vid.onclick = function() { sentPath(); };
            vid.style.width = "1200px";
            vid.style.height = "500px";
        demoP.appendChild(vid);
        console.log(vid.id)
    }
        
}

function changeVideo(){
    var getVideo = document.getElementById("playVideo");
    getVideo.src="videos/Volvo Trucks.mp4"
    getVideo.play();
}



function sentPath(){
    var videoPath = event.target.id ;
    console.log(videoPath);
    console.log(token);
    // $.post("http://localhost:5000/videoPath",{video: videoPath}, function(data){
    //         if(data==='done')
    //           {
    //             alert("Video Succesfully Played");
    //           }
    //       });

    $.ajax({
        url: "http://localhost:5000/videoPath",
        method: "POST",
        data: { video: videoPath },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        success: function(data)
        {
            if(data==='done')
            {
                alert("Video Succesfully Played");
            }
        }
    });
}