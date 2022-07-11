const menu = () => {
  const burger = document.querySelector(".header__menu-btn");
  const menuContent = document.querySelector(".menu");
  const body = document.querySelector("body");
  const closeMenu = document.querySelector(".menu__close");

  burger.addEventListener("click", () => {
    if (!menuContent.classList.contains("_open")) {
      menuContent.classList.add("_open");
    }
    if (!body.classList.contains("_lock")) {
      body.classList.add("_lock");
    }
  });

  closeMenu.addEventListener("click", () => {
    if (menuContent.classList.contains("_open")) {
      menuContent.classList.remove("_open");
    }
    if (body.classList.contains("_lock")) {
      body.classList.remove("_lock");
    }
  });
};

export default menu;
