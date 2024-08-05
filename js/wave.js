let lastClickedElement = null;

document.addEventListener("click", function (event) {
  let element = event.target.closest(".ripple-surface");

  if (element) {
    if (element === lastClickedElement) {
      return;
    }

    lastClickedElement = element;

    let rect = element.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    let ripple = document.createElement("div");
    ripple.classList.add("ripple-effect");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    element.prepend(ripple);

    ripple.addEventListener("animationend", function () {
      ripple.remove();
    });
  }
});
