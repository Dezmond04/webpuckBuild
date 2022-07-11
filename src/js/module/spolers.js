import windowAnimateOpacity from "./helper";

const spolers = () => {
  const spolersContainer = document.querySelectorAll("[data-spoler]");

  const modalAnimateOpen = (e) => {
    windowAnimateOpacity({
      duration: 200,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        e.style.opacity = progress;
        e.style.top = 100 - progress * 100 + "%";
      },
    });
  };
  const modalAnimateClose = (e) => {
    windowAnimateOpacity({
      duration: 200,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        e.style.opacity = progress - 1;
        e.style.top = -progress * 100 + "%";
      },
    });
  };

  if (spolersContainer.length) {
    spolersContainer.forEach((spoler) => {
      const spolersButton = spoler.querySelectorAll("[data-spoler-title]");
      const spolersContent = spoler.querySelectorAll("[data-spoler-body]");

      spolersButton.forEach((button, index) => {
        button.addEventListener("click", (e) => {
          console.log(spolersButton[index]);
          console.log(e.target);
          if (spolersButton[index].classList.contains("_active")) {
            modalAnimateClose(spolersContent[index]);
            spolersButton[index].classList.remove("_active");
            spolersContent[index].classList.remove("_active");
            return;
          } else {
            button.classList.add("_active");
            spolersContent[index].classList.add("_active");
            modalAnimateOpen(spolersContent[index]);
          }
        });
      });
    });
  }
};

export default spolers;
