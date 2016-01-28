function gRN(n) {
	rn = "";
	for (i = 0; i < n; i++) {
		rn += Math.floor(Math.random() * (9 - 0 + 1)) + 0;
	}
	return rn;
}
gNick = "Kock" + gRN(5);
function ncheck(nick) {
	nchar = /^[\w\\\[\]_{}^`|\-]*$/;
	ichar = /[\d\-]/;
	if (!nchar.test(nick)) {
		alert("Invalid nickname.\nOnly these characters are allowed: a-z A-Z 0-9 _ - \ [ ] { } ^ ` |\n(numbers and hyphen-minus signs cannot be at the beginning of the nickname)");
		return false;
	} else if (ichar.test(nick.charAt(0))) {
		alert("Numbers and hyphen-minus signs cannot be at the beginning of the nickname.");
		return false;
	} else {
		return true;
	}
}
function kock(fs) {
	nick = document.getElementById("nick").value;
	if (fs) {
		if (ncheck(nick)) {
			window.top.location.href = "https://qchat.rizon.net/?nick=" + nick + "&channels=Kock&lightness=-87.5&tlightness=100";
		} else {
			fNick();
			return;
		}
	} else {
		if (ncheck(nick)) {
			window.location.href = "https://qchat.rizon.net/?nick=" + nick + "&channels=Kock&lightness=-87.5&tlightness=100";
		} else {
			fNick();
			return;
		}
	}
}
function fNick() {
	document.getElementById("nick").focus();
}
window.onload = function() {
	iframe = window.top.location != window.self.location;
	if (iframe) {
		document.body.style.backgroundColor = "transparent";
	} else {
		document.body.removeChild(document.getElementById("confs"));
	}
	document.getElementById("nick").value = gNick;
	fNick();
	document.getElementById("connect").onclick = function() {
		kock(false);
	}
	document.getElementById("confs").onclick = function() {
		kock(true);
	}
}
