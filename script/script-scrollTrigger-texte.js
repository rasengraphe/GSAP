
// impression que le texte s'ecrit fur et a mesure

// let selection = Splitting()

// gsap.registerPlugin(ScrollTrigger);

// gsap.from(selection[0].chars, {
//     color:"rgb(13,13,13)",
//     stagger:0.1,
//     scrollTrigger:".text-revel",
//     scrub:true,
// }
// )

// FIN impression que le texte s'ecrit fur et a mesure

let selection = Splitting()

gsap.registerPlugin(ScrollTrigger);

gsap.from(selection[0].chars, { //caractere avec 'chars' ou 'words' pour les mots
   
    y:100,
    scacleY:0,
    rotation:90,
    opacity:0  ,
    
    color:"rgb(13,13,13)",
    stagger:0.05,
    scrollTrigger: {
        trigger: ".text-revel",
        start : "top 50%",
        end : "bottom 50%",
        markers: true,
        scrub: true,
        
            }
        
    
}
)

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on('scroll', (e) => {
  
});
//rend le scoll plus doux
// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 600); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);