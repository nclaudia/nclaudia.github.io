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
const btn = document.querySelector('.switch');
        btn.addEventListener('click', function(){
          track.applyConstraints({
            advanced: [{torch: true}]
          });
        });