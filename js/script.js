const menu = document.querySelector(".menu");
const icon = document.querySelector(".menuIcon");

icon.addEventListener("click", () => {
  menu.classList.toggle("show");
});
document.addEventListener("click", (e) => {
  const isClickInsideMenu = menu.contains(e.target);
  const isClickicon = icon.contains(e.target);
  if (!isClickicon && !isClickInsideMenu && menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
});
