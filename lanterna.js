document.getElementById("id_button").addEventListener("click",onSuccess);
var options = {
  camera: navigator.mozCameras.getListOfCameras()[0]
};
 
function onSuccess( camera ) {
  var capabilities = camera.camera.capabilities;

  if (capabilities.flashModes.indexOf('off') > -1) {
    capabilities.flashMode = 'off';
  }
};

navigator.mozCameras.getCamera(options).then(onSuccess)