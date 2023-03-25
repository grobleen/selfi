var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();
function inicio(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult = function(event){
var contenido = event.results[0][0].transcript;    
document.getElementById("textbox").innerHTML=contenido;
speak();
}
function speak(){
var synth = window.speechSynthesis;
speak_data = document.getElementById("textbox").value
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camara);
}
camara = document.getElementById("camara");
Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality : 90   
});
