var userinput1 = document.querySelector(".userinputcolor1");
var userinput2 = document.querySelector(".userinputcolor2");
var outputofcss = document.querySelector("h3");
var bodybgcolor= document.getElementById("gradient");
var button = document.querySelector("button");
var hidee = document.getElementById("hide");
var divv = document.querySelector("div");


function hidef(){
	divv.style.display = 'none';
	}

function show(){
	divv.style.display = '';
}

function setGradientcolor(){
	bodybgcolor.style.background=
	 "linear-gradient(to right, "
	 + userinput1.value 
	 + ","
	 + userinput2.value
	 + ")";
 
     outputofcss.textContent = bodybgcolor.style.background + ';' ;
}

function getRandomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i <6 ; i++){
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


function randomColors(){
	userinput1.value = getRandomColor();
	userinput2.value = getRandomColor();

	setGradientcolor();
}

setGradientcolor();

userinput1.addEventListener("input", setGradientcolor);
userinput2.addEventListener("input", setGradientcolor);
button.addEventListener("click", randomColors);
hidee.addEventListener("click", hidef);
gradient.addEventListener("keypress", show);

	





