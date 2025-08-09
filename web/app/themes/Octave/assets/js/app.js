// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener(
    "load",
    function () {
      const svgPath = document.querySelector(".line-svg path");

      if (svgPath) {
        const pathLength = svgPath.getTotalLength();

        gsap.set(svgPath, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(svgPath, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".trigger-svg",
            start: "-200px 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        });
      }

      gsap.set(".reveal-main-title", {
        y: 50,
        opacity: 0,
      });

      gsap.to(".reveal-main-title", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reveal-main-title",
          start: "10% 85%",
        },
      });

      gsap.set(".reveal-y", {
        y: 13,
        opacity: 0,
      });

      // Animation reveal-y-with-offset (pour les cartes avec décalage)
      gsap.set(".reveal-y-with-offset", {
        y: -30,
        opacity: 0,
      });

      document.querySelectorAll(".reveal-y-with-offset").forEach((element) => {
        gsap.to(element, {
          y: -40,
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
          },
        });
      });

      // Animation reveal-y standard
      document.querySelectorAll(".reveal-y").forEach((element) => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
          },
        });
      });
    },
    false
  );
});
