// document.addEventListener("DOMContentLoaded", function() {
  
//     function slider(){
//       var posX = 0;
//       document.querySelector(".carousel").style.left = posX+"px";
//       var totalImg = document.querySelectorAll(".carousel li").length;
//       var imgW = 0, maxPos = 0;
//       imgW = document.querySelector(".carousel img").width;
//       maxPos = imgW * (totalImg - 3);
//       //document.getElementById("test").innerHTML = maxPos;
//       document.getElementById("next").onclick = function(){
//         posX -= imgW;
//         if(posX<(maxPos*-1)){
//           posX = maxPos*-1;
//         }
//         var carousel = document.querySelector(".carousel");
//         // carousel.style.transition = "all 1s ease";
//         carousel.style.left = posX+"px";
//         document.getElementById("test").innerHTML = posX;
//     };
//       document.getElementById("prev").onclick = function(){
//         posX +=imgW;
//         if(posX>0){
//           posX=0;
//         }
//         var carousel = document.querySelector(".carousel");
//         // carousel.style.transition = "all 1s ease";
//         carousel.style.left = posX+"px";
//         // document.getElementById("test").innerHTML = posX;
//       };
//     }
//     slider();
    
//     window.onresize = slider;
//   });

document.addEventListener("DOMContentLoaded", function(){

    function slider(){
        var posX = 0;
        // var carouselX = ;
        var totalImg = document.querySelectorAll(".carousel li").length;
        var imgW = document.querySelector(".carousel img").width;
        document.getElementById("next").onclick = function(){
             posX += imgW;
             return posX;
        }
        var carouselX = document.querySelector(".carousel li").style.left;
        alert(typeof carouselX);
        alert(carouselX);

    }


    slider();

});