document.getElementById("id_speak1").addEventListener("click",on_speak);
var synth=window.speechSynthesis;
function on_speak(){
	var enunt= new SpeechSynthesisUtterance();
	enunt.lang="en-US";
	enunt.text=document.getElementById("id_text1").value;
	synth.speak(enunt);
}