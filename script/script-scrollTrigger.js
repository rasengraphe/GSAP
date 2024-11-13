gsap.registerPlugin(ScrollTrigger);

const box1 = document.querySelector(".sec1 .box1");
const box2 = document.querySelector(".sec1 .box2");

gsap.to(box1, {
    xPercent : 500,
    duration: 2,
    scrollTrigger :{
        trigger: box1,
        toggleActions:"restart, reverse play none",
        start : "top 25%",
        end : "bottom 50%",
        
        markers : true,
        scrub: 2,
        pin: true,
        }
    })       
gsap.to(box2, {
            xPercent : 600,
            duration: 2,
            scrollTrigger :{
                trigger: box1,
                toggleActions:"restart, reverse play none",
                start : "top 25%",
                end : "bottom 50%",
                
                markers : true,
                scrub: 5,
                }
                

});