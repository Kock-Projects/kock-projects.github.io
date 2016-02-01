maximized = false;
window.onload = function() {
	document.getElementById("max").onclick = function() {
		if (!maximized) {
			document.getElementById("logo").style.display = "none";
			document.documentElement.style.height = "100%";
			document.body.style.margin = "0";
			document.body.style.height = "100%";
			document.getElementById("nav").style.margin = "0";
			document.getElementById("nav").style.width = "auto";
			document.getElementById("nav").style.borderRadius = "0";
			document.getElementById("desc").style.width = "auto";
			document.getElementById("desc").style.padding = "0";
			document.getElementById("desc").style.margin = "0";
			document.getElementById("desc").style.borderRadius = "0";
			document.getElementById("desc").style.height = "calc(100% - 38px)";
			document.getElementById("desc").style.height = "-webkit-calc(100% - 38px)";
			document.getElementById("desc").style.height = "-moz-calc(100% - 38px)";
			document.getElementById("desc").style.height = "-o-calc(100% - 38px)";
			document.getElementById("desc").style.overflow = "hidden";
			document.getElementById("chat").style.height = "100%";
			document.getElementById("chat").style.width = "100%";
			document.getElementById("max").innerHTML = "Restore";
			maximized = true;
		} else {
			document.getElementById("logo").style.display = "inline";
			document.documentElement.style.height = "auto";
			document.body.style.margin = "8px";
			document.body.style.height = "auto";
			document.getElementById("nav").style.margin = "auto";
			document.getElementById("nav").style.width = "838px";
			document.getElementById("nav").style.borderRadius = "12px 12px 0px 0px";
			document.getElementById("desc").style.width = "800px";
			document.getElementById("desc").style.padding = "10px 25px 25px 25px";
			document.getElementById("desc").style.margin = "auto";
			document.getElementById("desc").style.borderRadius = "0px 0px 12px 12px";
			document.getElementById("desc").style.height = "auto";
			document.getElementById("desc").style.overflow = "visible";
			document.getElementById("chat").style.height = "400px";
			document.getElementById("chat").style.width = "800px";
			document.getElementById("max").innerHTML = "Maximize";
			maximized = false;
		}
	}
}