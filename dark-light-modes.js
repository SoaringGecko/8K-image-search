function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
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

function checkCookie() {
  var user=getCookie("username");
  if (user == "dark") {
    var allLinks = document.head.getElementsByTagName('link');
// find and replace the element
for (var i = 0; i < allLinks.length; i++) {
    if ( allLinks[i].href = "https://soaringgecko.github.io/8K-image-search/pc.css") {
        allLinks[i].href = "https://soaringgecko.github.io/8K-image-search/pc-light.css";
        }
    }
  } else {
   var allLinks = document.head.getElementsByTagName('link');
// find and replace the element
for (var i = 0; i < allLinks.length; i++) {
    if ( allLinks[i].href = "https://soaringgecko.github.io/8K-image-search/pc.css") {
        allLinks[i].href = "https://soaringgecko.github.io/8K-image-search/pc.css";
        }
    }
  }
}
