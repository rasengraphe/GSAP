const timeline = gsap.timeline({repeat: -1, yoyo: true})
timeline.to(".bob", {x:-150})

timeline.to(".bob", {y:-250})
timeline.to(".bob", {x:250})
