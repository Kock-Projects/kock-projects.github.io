function gRN(n) {
	rn = "";
	for (i = 0; i < n; i++) {
		rn += Math.floor(Math.random() * (9 - 0 + 1)) + 0;
	}
	return rn;
}
gNick = "Kock" + gRN(5);
function ncheck(nick) {
	if (!nick) {
		alert("The nickname field cannot be empty.");
	} else {
		nchar = /^[\w\\\[\]_{}^`|\-]*$/;
		ichar = /[\d\-]/;
		if (!nchar.test(nick)) {
			alert("Invalid nickname.\nOnly these characters are allowed: a-z A-Z 0-9 _ - \ [ ] { } ^ ` |\n(The nickname cannot start with a number or a hyphen)");
			return false;
		} else if (ichar.test(nick.charAt(0))) {
			alert("The nickname cannot start with a number or a hyphen.");
			return false;
		} else {
			return true;
		}
	}
}
function kock(pp) {
	nick = document.getElementById("nick").value;
	if (pp) {
		window.open("gateway.html", "chat", "directories=0, location=0, menubar=0, resizable=1, status=0, toolbar=0, width=700, height=500");
	} else {
		if (ncheck(nick)) {
			window.location.href = "https://qchat.rizon.net/?nick=" + nick + "&channels=Kock&saturation=-9&lightness=-86&tlightness=100";
		} else {
			fNick();
			return;
		}
	}
}
function fNick() {
	document.getElementById("nick").focus();
	document.getElementById("nick").select();
}
window.onload = function() {
	iframe = window.top.location != window.self.location;
	if (iframe) {
		document.body.style.backgroundColor = "transparent";
	}
	if (window.opener) {
		document.body.removeChild(document.getElementById("pop"));
	}
	document.getElementById("nick").value = gNick;
	fNick();
	document.getElementById("connect").onclick = function() {
		kock(false);
	}
	document.getElementById("pop").onclick = function() {
		kock(true);
	}
}
