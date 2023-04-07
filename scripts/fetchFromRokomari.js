"use strict";
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("underDev").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "./snips/underDev.ajax", true);
    xhttp.send();
};

loadDoc();

// AJAX is working