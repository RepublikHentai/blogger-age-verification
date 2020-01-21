function setCookie(e, o, t) {
	var i = new Date;
	i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3);
	var n = "expires=" + i.toUTCString();
	document.cookie = e + "=" + o + ";" + n + ";path=/"
}

function getCookie(e) {
	for (var o = e + "=", t = document.cookie.split(";"), i = 0; i < t.length; i++) {
		for (var n = t[i];
			" " == n.charAt(0);) n = n.substring(1);
		if (0 == n.indexOf(o)) return n.substring(o.length, n.length)
	}
	return ""
}

function checkCookie() {
	var e = getCookie("ageconfirmed");
	document.getElementById("age_verify-wrapper").style.display = "true" == e ? "none" : "grid"
}

function displayCookie() {
	var e = getCookie("ageconfirmed");
	alert(e)
}

function verifAgeEnter() {
	setCookie("ageconfirmed", "true", 7), location.reload()
}
checkCookie();
