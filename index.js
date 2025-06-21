// paste the locomotive code from codepen i.e locomotive scrolltrigger codepen
//remove red,orange,green,purple pannel and more three lines.
function locomotiveAnimation() {
   gsap.registerPlugin(ScrollTrigger);

   const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,

      // for tablet smooth
      tablet: { smooth: true },

      // for mobile
      smartphone: { smooth: true }
   });
   locoScroll.on("scroll", ScrollTrigger.update);

   ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
         return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
         return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
         };
      }

      // follwoing line is not required to work pinning on touch screen

      /* pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed"*/
   });

   // --- RED PANEL ---

   // gsap.from(".line-1", {
   //   scrollTrigger: {
   //     trigger: ".line-1",
   //     scroller: ".main",
   //     scrub: true,
   //     start: "top bottom",
   //     end: "top top"
   //   },
   //   scaleX: 0,
   //   transformOrigin: "left center",
   //   ease: "none"
   // });

   // // --- ORANGE PANEL ---
   // gsap.from(".line-2", {
   //   scrollTrigger: {
   //     trigger: ".orange",
   //     scroller: ".main",
   //     scrub: true,
   //     pin: true,
   //     start: "top top",
   //     end: "+=100%"
   //   },
   //   scaleX: 0,
   //   transformOrigin: "left center",
   //   ease: "none"
   // });

   // // --- PURPLE/GREEN PANEL ---
   // var tl = gsap.timeline({
   //   scrollTrigger: {
   //     trigger: ".purple",
   //     scroller: ".main",
   //     scrub: true,
   //     pin: true,
   //     start: "top top",
   //     end: "+=100%"
   //   }
   // });

   // tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
   //   .from(
   //     ".line-3",
   //     { scaleX: 0, transformOrigin: "left center", ease: "none" },
   //     0
   //   )
   //   .to(".purple", { backgroundColor: "#28a92b" }, 0);

   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

   ScrollTrigger.refresh();

}
locomotiveAnimation()
let page2imgs = document.querySelectorAll(".first");
let videoSection = document.querySelector(".videoSection");

//show reel image on video
videoSection.addEventListener("mousemove", function (dets) {

   gsap.to(videoSection.childNodes[3], {           //here child nodes is used for accesing the videosection element
      x: dets.x - videoSection.getBoundingClientRect().x - 50,
      y: dets.y - videoSection.getBoundingClientRect().y - 50,
      opacity: 1,
      scale: 1,
   })
})
videoSection.addEventListener("mouseleave", function (dets) {
   gsap.to(videoSection.childNodes[3], {
      opacity: 0,
      scale: 0,
   })
})
// play the video
let page = document.querySelector(".videoSection");
let video = document.querySelector(".videoSection video");
let btn = document.querySelector(".showReelImg");
btn.addEventListener("click", function () {
   if (video.muted) {
      btn.style.display = "none";

      video.muted = false;
      video.volume = 0.5;
      video.play();
   }
})
video.addEventListener("click", function () {
   video.muted = true;
   btn.style.display = "flex";
})

page2imgs.forEach(function (elem) {
   elem.childNodes[1].addEventListener("mousemove", function (dets) {

      gsap.to(elem.childNodes[5], {
         x: dets.x - elem.getBoundingClientRect().x - 50,
         y: dets.y - elem.getBoundingClientRect().y - 50,
         opacity: 1,
         scale: 1,
      })
   })
   elem.childNodes[1].addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[5], {
         opacity: 0,
         scale: 0,
      })
   })

})

let page4video = document.querySelector("#page4video")
let playbtn = document.querySelector(".playbtn")
let right = document.querySelector(".page4 .right")
page4video.addEventListener("mouseenter", function () {
   page4video.play()
   gsap.to(page4video, {
      scale: "1.05"
   })
})
playbtn.addEventListener("mouseleave", function () {
   page4video.pause();

})
page4video.addEventListener("mousemove", function (dets) {
   gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
      x: dets.x - page4video.getBoundingClientRect().x - 70,
      y: dets.y - page4video.getBoundingClientRect().y - 70,
   })
})
right.addEventListener("mouseleave", function () {
   gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
   })
   gsap.to(page4video, {
      scale: "1"
   })
   page4video.pause();
   page4video.currentTime = 0;

})

function page5UiUxDesign() {
   let section1 = document.querySelector(".page5 .section1")
   let explainitem = document.querySelector(".page5 .explain-items")
   let page5Hr = document.querySelector(".page5 .right hr")
   let open = false;
   section1.addEventListener("click", function () {
      if (!open) {
         page5Hr.style.height = "3px";

         explainitem.style.display = "block";
         open = true;

         gsap.to(".upper i", {
            rotate: 180,
         })
      }
      else {
         page5Hr.style.height = "0.5px";
         explainitem.style.display = "none";
         open = false;
         gsap.to(".upper i", {
            rotate: 0,
         })
      }
   })
   let allitems = document.querySelectorAll(".page5 .sec")
   allitems.forEach((sec) => {

      sec.addEventListener("mouseenter", function () {
         console.log(sec.childNodes)
         gsap.to(sec.childNodes[1], {
            x: 20,
         })
         gsap.to(sec.childNodes[5], {
            x: -10,
            y: -5,
         })

      })
      sec.addEventListener("mouseleave", function () {
         console.log(sec.childNodes)
         gsap.to(sec.childNodes[1], {
            x: 0,
         })
         gsap.to(sec.childNodes[5], {
            x: 0,
            y: 0,
         })


      })
   })
}
page5UiUxDesign();

function page5ProductDesign() {
   let section1 = document.querySelector(".page5 .section2")
   let explainitem = document.querySelector(".page5 .section2 .explain-items")
   let page5Hr = document.querySelector(".page5 .section2 .right hr")
   let open = false;
   section1.addEventListener("click", function () {
      console.log("clicked")
      if (!open) {
         explainitem.style.display = "block";
         open = true;

         gsap.to(".upper2 i", {
            rotate: 180,
         })
      }
      else {
         explainitem.style.display = "none";
         open = false;
         gsap.to(".upper2 i", {
            rotate: 0,
         })
      }
   })
   let allitems = document.querySelectorAll(".page5 .sec")
   allitems.forEach((sec) => {

      sec.addEventListener("mouseenter", function () {
         console.log(sec.childNodes)
         gsap.to(sec.childNodes[1], {
            x: 20,
         })
         gsap.to(sec.childNodes[5], {
            x: -10,
            y: -5,
         })

      })
      sec.addEventListener("mouseleave", function () {
         console.log(sec.childNodes)
         gsap.to(sec.childNodes[1], {
            x: 0,
         })
         gsap.to(sec.childNodes[5], {
            x: 0,
            y: 0,
         })


      })
   })
}

page5ProductDesign();

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
   trigger: ".page5",         // the whole page5 section
   start: "top top",           // when page5 hits top of viewport
   endTrigger: ".section2",
   end: "top top",
   pin: ".page5 .left",        // pin the left section (with the button inside)
   pinSpacing: true,           // adds spacing so the layout doesn't jump
});


gsap.from(".product .list div", {
   x: 0,
   scrollTrigger: {
      trigger: ".list",
      scroller: ".main",
      start: "top bottom",
      end: "top 20%",
      scrub: 2,
   }
})
gsap.from(".uxdesign .list div", {
   x: 0,
   scrollTrigger: {
      trigger: ".list",
      scroller: ".main",
      start: "top bottom",
      end: "top 20%",
      scrub: 2,
   }
})
gsap.from(".uidesign .list div", {
   x: 0,
   scrollTrigger: {
      trigger: ".list",
      scroller: ".main",
      start: "top bottom",
      end: "top 20%",
      scrub: 2,
   }
})

var tl = gsap.timeline();
tl.from(".page1", {
   opacity: 0,
})
tl.from(".page1", {
   transform: "scaleX(0.7) scaleY(0.08)  translateY(-200%)",
   duration: 0.8,
   ease: "expo.out",
})
tl.from("nav", {
   opacity: 0,
}, "-=0.25")
tl.from(".page1 div, .page1 p", {
   opacity: 0,
}, "-=0.25")

tl.from(".heading h1", {
   opacity: 0,
   y: 40,
   stagger: 0.2,
   rotate: 2,
}, "-=0.5");
