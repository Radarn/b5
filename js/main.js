//Buttons and show text
var h3 = document.getElementsByTagName("h3");
var button = document.getElementsByTagName("button");

for (var i = 0; i < h3.length; i+=1) {
	h3[i].style.display="none";
}


button[0].addEventListener("click", showText5);
button[1].addEventListener("click", showText4);
button[2].addEventListener("click", showText3);
button[3].addEventListener("click", showText2);
button[4].addEventListener("click", showText1);


function showText5() {
	if (h3[0].style.display === "none") {
		$(".1").fadeIn("slow");
		$(".mariowii").fadeIn("slow");
	} else {
		$(".1").fadeOut("slow");
		$(".mariowii").fadeOut("slow");
	}

	/*$overlay.show();*/
}

function showText4() {
	if (h3[1].style.display === "none") {
		$(".2").fadeIn("slow");
		$(".mariobros").fadeIn("slow");

	} else {
		$(".2").fadeOut("slow");
		$(".mariobros").fadeOut("slow");
	}
}

function showText3() {
	if (h3[2].style.display === "none") {
		$(".3").fadeIn("slow");
		$(".gtav").fadeIn("slow");
	} else {
		$(".3").fadeOut("slow");
		$(".gtav").fadeOut("slow");
	}
}

function showText2() {
	if (h3[3].style.display === "none") {
		$(".4").fadeIn("slow");
		$(".wiisports").fadeIn("slow");
	} else {
		$(".4").fadeOut("slow");
		$(".wiisports").fadeOut("slow");
	}
}

function showText1() {
	if (h3[4].style.display === "none") {
		$(".5").fadeIn("slow");
		$(".tetris").fadeIn("slow");
	} else {
		$(".5").fadeOut("slow");
		$(".tetris").fadeOut("slow");
	}
}
