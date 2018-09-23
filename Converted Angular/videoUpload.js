function uploadVideo(){
    var videoName = document.getElementById("fileName").value;
    var video = $('#files')[0].files[0];
    $.post("http://localhost:5000/uploadVideo",{fileName: videoName, file: video}, function(data){
            if(data==='done')
              {
                alert("Video Uploaded Succesfully");
                window.location = "/videoUpload.html";
              }else{
              	alert("Error");
              }
          });
}