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
            markers: true,
          },
        });
      }
    },
    false
  );
});
