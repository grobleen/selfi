var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();
function inicio(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult = function(event){
var contenido = event.results[0][0].transcript;    
document.getElementById("textbox").innerHTML=contenido;
if(contenido == "tomar"){
console.log ("tomandofoto");
speak();
}
}
function speak(){
var synth = window.speechSynthesis;
speak_data = "tomandofotoencincosegundos";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camara);
setTimeout(function(){
tomar_foto();
guardar();
},5000);
}
camara = document.getElementById("camara");
Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality : 90   
});
function tomar_foto(){
Webcam.snap(function(data_uri){
document.getElementById("resultado").innerHTML=  '<img id="selfie_image" src="'+data_uri+'"/>';  
});
}
function guardar(){
var link = document.getElementById ("link");
var imagen = document.getElementById ("selfie_image").src;
link.href=imagen;
link.click();   
}