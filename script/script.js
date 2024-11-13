gsap.to(".circle", {
    y: -300,
    duration : 1,
    // delay : 2,
    // ease : "bounce",
    
    onUpdate : () => {
        document.querySelector(".happy img").setAttribute("src","/img/bob._happy.png")
    },
    stagger : {
each :0.1,
repeat: -1,
yoyo: true,
from: "center",
    },
   


})