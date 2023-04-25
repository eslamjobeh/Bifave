s = document.querySelector(".header").clientHeight
y = document.querySelector(".page-1")

window.onscroll = function() {
	if (window.scrollY >= 600) {
		document.querySelector(".Fll").style.width = "80%";
		document.querySelector(".skills:nth-child(2) .Fll").style.width = "85%";
		document.querySelector(".skills:nth-child(3) .Fll").style.width = "100%";
		document.querySelector(".skills:nth-child(4) .Fll").style.width = "80%";
	}
};