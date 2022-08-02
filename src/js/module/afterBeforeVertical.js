const afterBeforeVertical = () => {
  const project = document.querySelectorAll("#afterBefore");
  const body = document.body;
  let isActive = false;

  document.addEventListener("DOMContentLoaded", function (event) {
    window.onresize = function () {
      resize_info();
    };
  });

  function resize_info() {
    projectFunction();
  }

  const projectFunction = function () {
    setTimeout(() => {
      project.forEach(function (i) {
        console.log(i);
        const before = i.querySelector(".after-before__after");
        const change = i.querySelector(".after-before__line");
        const beforeImage = before.querySelector("img");

        let height = i.offsetHeight;
        beforeImage.style.height = `${height}px`;

        const beforeAfterSlider = (x) => {
          let shift = Math.max(0, Math.min(x, i.offsetHeight));
          console.log(i.offsetHeight);
          console.log(x);

          before.style.height = `${shift}px`;
          change.style.top = `${shift}px`;
        };

        const pauseEvents = (e) => {
          e.stopPropagation();
          return false;
        };

        change.addEventListener("mousedown", () => {
          isActive = true;
        });

        i.addEventListener("mouseup", () => {
          isActive = false;
        });

        i.addEventListener("mouseleave", () => {
          isActive = false;
        });

        i.addEventListener("mousemove", (e) => {
          if (!isActive) {
            return;
          }

          let x = e.pageY;

           x -= i.offsetTop;
          beforeAfterSlider(x);
          pauseEvents(e);
        });

        change.addEventListener("touchstart", () => {
          isActive = true;
          body.classList.add('_lock')
        });
        i.addEventListener("touchend", () => {
          isActive = false;
          body.classList.remove('_lock')

        });
        i.addEventListener("touchcancel", () => {
          isActive = false;
          body.classList.remove('_lock')

        });
        i.addEventListener("touchcancel", () => {
          isActive = false;
          body.classList.remove('_lock')

        });
        i.addEventListener("touchmove", (e) => {
          if (!isActive) {
          body.classList.remove('_lock')
            return;
          }

          let x;

          for (let item = 0; item < e.changedTouches.length; item++) {
            x = e.changedTouches[item].pageY;
          }

          x -= i.offsetTop;
          beforeAfterSlider(x);
          pauseEvents(e);
        });
      });
    }, 5);
  };

  projectFunction();
};

export default afterBeforeVertical;