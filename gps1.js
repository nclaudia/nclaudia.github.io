document.getElementById("id_button_gps").addEventListener("click",getLocation);
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude:<br><br> " + position.coords.latitude+"<br>" + 
  "<br>Longitude: <br><br>" + position.coords.longitude+"<br>"+ 
  "<br>Accuracy: <br><br>" + position.coords.accuracy;
}