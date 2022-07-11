const popup = () => {
  const popupBtn = document.querySelectorAll("[data-popup]");
  const body = document.querySelector("body");
  popupBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const popupWindow = document.querySelector(
        btn.getAttribute("data-popup")
      );
      const popupWindowWrapper = popupWindow.querySelector(".popup__wrapper");
      const popupWindowClose = popupWindow.querySelector(".popup__close");

      popupWindow.classList.add("popup__show");
      body.classList.add("_lock");

      popupWindow.addEventListener("click", (e) => {
        const inputs = popupWindow.querySelectorAll("input");
        if (e.target == popupWindowWrapper || e.target == popupWindowClose) {
          popupWindow.classList.remove("popup__show");
          body.classList.remove("_lock");
          inputs.forEach((input) => {
            input.value = "";
          });
        } else {
          return;
        }
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const openPopup = document.querySelector(".popup__show");
        const inputs = document.querySelectorAll(".popup input");

        if (openPopup) {
          openPopup.classList.remove("popup__show");
          body.classList.remove("_lock");
          inputs.forEach((input) => {
            input.value = "";
          });
        }
      }
    });
  });
};

export default popup;
