document.getElementById("id_logic_version").innerHTML="Logic version 2019.01.11.0";
document.getElementById("id_button").addEventListener("click",on_get_cam);

function on_cam_ok(e){
	document.getElementById("id_video").srcObject=e;
}
function on_cam_error(e){
 alert("Cam error");
}
function on_get_cam(){
	var c={audio:true, video:true};
	navigator.mediaDevices.getUserMedia(c).
	then(on_cam_ok).catch(on_cam_error);

}