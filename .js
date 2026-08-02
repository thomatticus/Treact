const menu = document.querySelector(".mobile-menu");
const openButton = document.querySelector(".mobile-menu-button");
const closeButton = document.querySelector(".mobile-menu__close");
const overlay = document.querySelector(".mobile-menu__overlay");
const menuLinks = document.querySelectorAll(".mobile-menu__link");

function openMenu() {
  menu.classList.add("mobile-menu--open");
  document.body.classList.add("menu-open");

  menu.setAttribute("aria-hidden", "false");
  openButton.setAttribute("aria-expanded", "true");

  closeButton.focus();
}

function closeMenu() {
  menu.classList.remove("mobile-menu--open");
  document.body.classList.remove("menu-open");

  menu.setAttribute("aria-hidden", "true");
  openButton.setAttribute("aria-expanded", "false");

  openButton.focus();
}

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menu.classList.contains("mobile-menu--open")
  ) {
    closeMenu();
  }
});