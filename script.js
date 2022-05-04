$(document).ready(function () {
  $(".js--scroll-to-aboutme").click(function () {});

  const toggleButton = document.getElementsByClassName("nav-toggle")[0];
  const navbarLinks = document.getElementsByClassName("navibar-links")[0];

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
});
