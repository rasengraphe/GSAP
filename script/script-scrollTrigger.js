gsap.registerPlugin(ScrollTrigger);
const box1 = document.querySelector(".sec1 .box1");
const box2 = document.querySelector(".sec1 .box2");

gsap.to(box1, {
    xPercent : 500,
    scrollTrigger :{
        trigger: box1,
        markers : true,
        }
    

});