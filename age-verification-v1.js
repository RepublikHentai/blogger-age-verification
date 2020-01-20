checkCookie(ageconfirmed);

function setCookie(cname, value, exdays){
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie(cookiename) {
  var isConfirmed = getCookie(ageconfirmed);
  var className = document.getElementsByClassName('age_verify-wrapper');

  if(isConfirmed == "true"){ // != || ==
    for (var i = 0; i < className.length; i++) {
      className[i].style.display = 'none';
    }
  }else{

  }
}
function deleteCookie = (cname, path) => {
  setCookie(cname, '', -1, path)
}
function displayCookie(){
  var dCookie = getCookie(ageconfirmed);
  alert(dCookie);
}
function varifAgeExit(){

}