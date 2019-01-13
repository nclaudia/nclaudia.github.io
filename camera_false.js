document.getElementById("id_button").addEventListener("click",stop_cam);

function on_cam_ok(e){
	document.getElementById("id_video").srcObject=e;
}
function on_cam_error(e){
 alert("Cam error");
}
function stop_cam(e) {
	e.stop();
}
