const menu = document.querySelector(".menu");
const icon = document.querySelector(".menuIcon");
const iconx = document.querySelector(".iconx");

icon.addEventListener("click", () => {
  menu.classList.add("show");
  icon.classList.add("disppear");
  iconx.classList.add("appear");
});
iconx.addEventListener("click", () => {
  menu.classList.remove("show");
  icon.classList.remove("disppear");
  iconx.classList.remove("appear");
});
document.addEventListener("click", (e) => {
  const isClickInsideMenu = menu.contains(e.target);
  const isClickicon = icon.contains(e.target);
  if (!isClickicon && !isClickInsideMenu && menu.classList.contains("show")) {
    menu.classList.remove("show");
    iconx.classList.remove("appear");
    icon.classList.remove("disppear");
  }
});

window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
