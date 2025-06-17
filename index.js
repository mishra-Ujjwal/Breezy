let page2imgs = document.querySelectorAll(".first")

let videoSection = document.querySelector(".videoSection");

//show reel image on video
videoSection.addEventListener("mousemove",function(dets){
   
   gsap.to(videoSection.childNodes[3],{           //here child nodes is used for accesing the videosection element
      x:dets.x - videoSection.getBoundingClientRect().x-50,
      y:dets.y - videoSection.getBoundingClientRect().y-50,
      opacity:1,
      scale:1,
   })
})
videoSection.addEventListener("mouseleave",function(dets){
   gsap.to(videoSection.childNodes[3],{
      opacity:0,
      scale:0,
   })
})
// play the video


page2imgs.forEach(function(elem){
    elem.childNodes[1].addEventListener("mousemove",function(dets){
       
       gsap.to(elem.childNodes[5],{
              x:dets.x - elem.getBoundingClientRect().x - 50,
              y:dets.y - elem.getBoundingClientRect().y-50,
              opacity:1,
              scale:1,
       })
    })
    elem.childNodes[1].addEventListener("mouseleave",function(){
       gsap.to(elem.childNodes[5],{
        opacity:0,
        scale:0,
       })
    })
    
})