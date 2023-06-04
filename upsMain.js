document.addEventListener("DOMContentLoaded", function(event) {
    var estrellas = document.getElementsByClassName("estrella");
  
    for (var i = 0; i < estrellas.length; i++) {
      estrellas[i].style.top = Math.random() * 100 + "%";
      estrellas[i].style.left = Math.random() * 100 + "%";
    }
  });