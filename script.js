$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 100) {
      $(".navbar").addClass("apear");
    } else {
      $(".navbar").removeClass("apear");
    }
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Ethiopia",
      "Land of Origin",
      "Owner of Nature",
      "Land of Diversity",
    ],
    typeSpeed: 90,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Traveling", "Photography", "Gaming", "Designing", "Football"],
    typeSpeed: 90,
    backSpeed: 60,
    loop: true,
  });
});
