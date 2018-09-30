var url = new URL(document.URL);
var token = url.searchParams.get("auth");

document.getElementById('dashboard').href = "/dashboard.html?auth="+token;
document.getElementById('videoControl').href = "/index.html?auth="+token;
document.getElementById('videoUpload').href = "/videoUpload.html?auth="+token;
document.getElementById('register').href = "/registerAdmin.html?auth="+token;

function uploadVideo(){
    var videoName = document.getElementById("fileName").value;
    var video = $('#files')[0].files[0];
    // $.post("http://localhost:5000/uploadVideo",{fileName: videoName, file: video}, function(data){
    //
    //       });

    $.ajax({
        url: "http://localhost:5000/videoPath",
        method: "POST",
        data: { fileName: videoName, file: video },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        success: function(data)
        {
            if(data==='done')
            {
                alert("Video Uploaded Succesfully");
                window.location = "/videoUpload.html?auth="+token;
            }else{
                alert("Error");
            }
        }
    });
}