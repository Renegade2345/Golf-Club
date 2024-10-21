 var a = document.querySelector("#cursor")
var b = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    

    a.style.left =dets.x + "px"
    a.style.top = dets.y+ "px"

    b.style.left =dets.x -200 +"px"
    b.style.top = dets.y -200 + "px"
})


gsap.registerPlugin(ScrollTrigger);
gsap.to("#nav",{
    backgroundColor : "#000",
    duration:0.5,
    height: "105px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:1
        
    }
});


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers: true,
        start:"top -30%",
        end:"top -80vh",
        scrub:2

    }
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem1) {
    elem1.addEventListener("mouseenter", function(){
        a.style.scale = 3;
        a.style.border = "1px solid #fff";
        a.style.backgroundColor = "transparent";


    });
    elem1.addEventListener("mouseleave", function(){
        a.style.scale = 1;
        a.style.border = "0px solid #95C11E";
        a.style.backgroundColor = "#95C11E";

    });
    
});


gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity: 0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:3
    }
})



gsap.from(".card",{
    scale:0.8,
    opacity: 0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})

gsap.from("#comma1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#comma1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  
  gsap.from("#comma2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#comma2",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  
  
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });
  