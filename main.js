Webcam.set({
    width: 400,
    height: 400,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach("#webcam_now");

function takeshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("webcam_pause").innerHTML = "<img id='webcam_pause__init__' src='" + data_uri + "'>"
    });
}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Zi4J_5VLm/model.json', modelLoaded);
function modelLoaded(){
    console.log("modelLoaded")
}

function identify(){
    var img = document.getElementById("webcam_pause__init__");
    classifier.classify(img, A_Function)
}

function A_Function(error, results){
    if(error){
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("objtext").innerText = results[0].label;
            document.getElementById("acctext").innerText = results[0].confidence.toFixed(3);
    }
}