window.onscroll=function(){
     var hdrJs = document.getElementById("hdrJs");
     if (window.pageYOffset > 50) {
         hdrJs.classList.add("scrolled");
     } else {
         hdrJs.classList.remove("scrolled");
     }
}
