const menu = document.querySelector(".menu");
const icon = document.querySelector(".menuIcon");

icon.addEventListener("click", () => {
  menu.classList.toggle("show");
});
