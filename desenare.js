document.getElementById("id_business_version").innerHTML = "Bussiness version: 2018.10.26.7";
document.getElementById("id_start").addEventListener("click", start);
document.getElementById("id_stop").addEventListener("click", stop);
//-----------------------------------------

document.getElementById("id_start").disabled = false;
document.getElementById("id_stop").disabled = true;

var alpha = {unghi:0}; 

//-----------------------------------------
function deseneaza_cerc(context, w, h, alpha)
{
	context.clearRect(0, 0, w, h);
	
	context.beginPath();
	context.arc(w / 2 + 100 * Math.cos(alpha.unghi * Math.PI / 180), 
				h / 2 + 100 * Math.sin(alpha.unghi * Math.PI / 180), 
				50, 0, 2 * Math.PI);
	context.stroke();	
	
	alpha.unghi++;
}
//-----------------------------------------
function start()
{
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext('2d');
	
	document.getElementById("id_start").disabled = true;
	document.getElementById("id_stop").disabled = false;

	id_timer = setInterval(deseneaza_cerc, 10, context, canvas.width, canvas.height, alpha);
	
	var my_worker = new Worker("calcul_prime.js");
	my_worker.onmessage = function(e){
		document.getElementById("id_prime").innerHTML = e.data;
	}
}
//-----------------------------------------
function stop()
{
	clearInterval(id_timer);
	document.getElementById("id_start").disabled = false;
	document.getElementById("id_stop").disabled = true;
}
//-----------------------------------------