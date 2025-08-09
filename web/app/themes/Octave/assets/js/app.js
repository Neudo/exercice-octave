// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM loaded");

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    "load",
    function (e) {
      console.log("window loaded");
      gsap.to(".line-svg", {
        rotation: 360,
        duration: 2,
        ease: "bounce.out",
      });
    },
    false
  );
});
