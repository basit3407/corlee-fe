gsap.to("h1", {
  scrollTrigger: {
    trigger: ".two",
    start: "top 0",
    end: "bottom -200%",
    scrub: 1,
    pin: true,
  },
  transform: "translate(-2%, -100%)",
});
const tl = gsap.timeline();

tl.to(".slidernavbar", {
  x: 0,
  duration: 0.6,
  ease: "power1.out",
});
tl.from(".links", {
  opacity: 0,
  stagger: 0.2,
  duration: 0.4,
  x: 100,
  ease: "power1.out",
});
tl.from(".closeicon", {
  opacity: 0,
  y: -100,
  duration: 0.8,
  ease: "power1.out",
});
tl.pause();
document.getElementsByClassName("menuicon")[0].addEventListener("click", () => {
  tl.play();
});
document
  .getElementsByClassName("closeicon")[0]
  .addEventListener("click", () => {
    tl.reverse();
  });

const secondtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "top 0",
    end: "bottom -100%",
    scrub: 1,
    pin: true,
  },
});

secondtl.to(".secondary1", {
  width: "110%",
  duration: 1,
  ease: "power1.out",
});
secondtl.to(
  ".secondary2",
  {
    width: "100%",
    duration: 1,
    ease: "power1.out",
  },
  "-=0.44"
);
document.addEventListener("mousemove", (e) => {
  gsap.to(".mouseFollower", {
    x: e.clientX,
    y: e.clientY,
    stagger: 0.01,
    ease: "elastic.out(1,0.3)",
    duration: 1,
  });
});
document
  .getElementsByClassName("cardWrapper")[0]
  .addEventListener("mouseenter", (e) => {
    gsap.to(".mouseFollower", {
      backgroundColor: "rgb(129, 129, 129)",
      color: "white",
      duration: 0.5,
    });
    document.getElementsByClassName("cardWrapper")[0].style.cursor = "pointer";
    document
      .getElementsByClassName("cardWrapper")[0]
      .addEventListener("click", () => {
        window.open("https://gsap.com");
      });
  });
document
  .getElementsByClassName("cardWrapper")[0]
  .addEventListener("mouseleave", (e) => {
    gsap.to(".mouseFollower", {
      backgroundColor: "#fff",
      color: "transparent",
      duration: 0.5,
    });
    document.getElementsByClassName("cardWrapper")[0].style.cursor = "default";
  });
const loadtl = gsap.timeline();

loadtl.from(".letter", {
  y: 150,
  duration: 0.5,
  stagger: 0.05,
  ease: "power1.out",
});
loadtl.from(
  ".logo",
  {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  },
  "-=1"
);
loadtl.from(".paragraph", {
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});
loadtl.from(".menuicon", {
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});
gsap.from(".cardwrapper", {
  scrollTrigger: {
    trigger: ".card",
    start: "top 50%",
    end: "bottom 0",
  },
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});
document
  .getElementsByClassName("one")[0]
  .addEventListener("mouseenter", (e) => {
    gsap.to(".mouseFollower", {
      backgroundColor: "rgb(0, 152, 163)",
      duration: 0.5,
    });
  });
document
  .getElementsByClassName("two")[0]
  .addEventListener("mouseenter", (e) => {
    gsap.to(".mouseFollower", {
      backgroundColor: "rgb(240, 83, 201)",
      duration: 0.5,
    });
  });
document
  .getElementsByClassName("three")[0]
  .addEventListener("mouseenter", (e) => {
    gsap.to(".mouseFollower", {
      backgroundColor: "rgb(124, 204, 32)",
      duration: 0.5,
    });
  });
document
  .getElementsByClassName("four")[0]
  .addEventListener("mouseenter", (e) => {
    gsap.to(".mouseFollower", {
      backgroundColor: "#fff",
      duration: 0.5,
    });
  });
