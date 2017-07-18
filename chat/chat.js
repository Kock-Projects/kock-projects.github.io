var maximized = false;
var fs = false;
function rfs(state) {
	if (state == 1) {
		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(document.documentElement.ALLOW_KEYBOARD_INPUT);
			}
		}
	} else if (state == 0) {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
}
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
			document.getElementById("nav").style.borderRadius = "8px 8px 0px 0px";
			document.getElementById("desc").style.width = "800px";
			document.getElementById("desc").style.padding = "10px 25px 25px 25px";
			document.getElementById("desc").style.margin = "auto";
			document.getElementById("desc").style.borderRadius = "0px 0px 8px 8px";
			document.getElementById("desc").style.height = "auto";
			document.getElementById("desc").style.overflow = "visible";
			document.getElementById("chat").style.height = "400px";
			document.getElementById("chat").style.width = "800px";
			document.getElementById("max").innerHTML = "Maximize";
			maximized = false;
		}
	}
	document.getElementById("fs").onclick = function() {
		if(!fs) {
			if(maximized) {
				document.getElementById("nav").style.display = "none";
				document.getElementById("desc").style.height = "100%";
				document.documentElement.style.width = "100%";
			} else {
				document.getElementById("logo").style.display = "none";
				document.documentElement.style.height = "100%";
				document.documentElement.style.width = "100%";
				document.body.style.margin = "0";
				document.body.style.height = "100%";
				document.getElementById("nav").style.display = "none";
				document.getElementById("desc").style.width = "auto";
				document.getElementById("desc").style.padding = "0";
				document.getElementById("desc").style.margin = "0";
				document.getElementById("desc").style.borderRadius = "0";
				document.getElementById("desc").style.height = "100%";
				document.getElementById("desc").style.overflow = "hidden";
				document.getElementById("chat").style.height = "100%";
				document.getElementById("chat").style.width = "100%";
			}
			var fs2 = document.createElement("BUTTON");
			fs2.innerHTML = "<img src=\"fsx.svg\">";
			fs2.style.position = "absolute";
			fs2.style.top = "0";
			fs2.style.left = "0";
			fs2.style.border = "0";
			fs2.style.width = "24px";
			fs2.style.height = "24px";
			fs2.style.outline = "0";
			fs2.style.padding = "0";
			fs2.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
			fs2.style.color = "#FFF";
			document.body.appendChild(fs2);
			fs2.id = "fs2";
			rfs(1);
			fs = true;
		}
		document.addEventListener("fullscreenchange", function() {
			if (!document.fullscreenElement) {
				efs();
			}
		});
		document.addEventListener("webkitfullscreenchange", function() {
			if (!document.webkitFullscreenElement) {
				efs();
			}
		});
		document.addEventListener("mozfullscreenchange", function() {
			if (!document.mozFullScreenElement) {
				efs();
			}
		});
		document.addEventListener("msfullscreenchange", function() {
			if (!document.msFullscreenElement) {
				efs();
			}
		});
		document.getElementById("fs2").onclick = function() {
			efs();
		}
		document.onkeydown = function(ev) {
			ev = ev || window.event;
			if (ev.keyCode == 27) {
				efs();
			}
		}
		function efs() {
			if(fs) {
				if(maximized) {
					document.getElementById("nav").style.display = "block";
					document.getElementById("desc").style.height = "calc(100% - 38px)";
					document.getElementById("desc").style.height = "-webkit-calc(100% - 38px)";
					document.getElementById("desc").style.height = "-moz-calc(100% - 38px)";
					document.getElementById("desc").style.height = "-o-calc(100% - 38px)";
				} else {
					document.getElementById("logo").style.display = "inline";
					document.documentElement.style.height = "auto";
					document.documentElement.style.width = "auto";
					document.body.style.margin = "8px";
					document.body.style.height = "auto";
					document.getElementById("nav").style.display = "block";
					document.getElementById("desc").style.width = "800px";
					document.getElementById("desc").style.padding = "10px 25px 25px 25px";
					document.getElementById("desc").style.margin = "auto";
					document.getElementById("desc").style.borderRadius = "0px 0px 8px 8px";
					document.getElementById("desc").style.height = "auto";
					document.getElementById("desc").style.overflow = "visible";
					document.getElementById("chat").style.height = "400px";
					document.getElementById("chat").style.width = "800px";
				}
				rfs(0);
				document.body.removeChild(document.getElementById("fs2"));
				fs = false;
			}
		}
	}
}
