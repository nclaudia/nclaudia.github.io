document.getElementById("id_button_gps").addEventListener("click",on_get_position);
function on_gps_ok(e){
	document.getElementById("id_lat").innerHTML=e.coords.latitude;
	document.getElementById("id_long").innerHTML=e.coords.longitude;
	document.getElementById("id_acc").innerHTML=e.coords.accuracy;
	e.coords.latitude
}
function on_gps_error(e){
	alert("Geolocation error");
}
function on_get_position(){
	navigator.geolocation.getCurrentPosition(on_gps_ok,on_gps_error);

}