window.onscroll=function(){
     var hdrJs = document.getElementById("hdrJs");
     if (window.pageYOffset > 50) { // Altere o valor 50 para o ponto em que o menu muda
         hdrJs.classList.add("scrolled");
     } else {
         hdrJs.classList.remove("scrolled");
     }
}