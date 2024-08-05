document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
    const savedContent = localStorage.getItem(element.id);
    if (savedContent) {
      element.innerHTML = savedContent;
    }
  });

  document.querySelectorAll('input[type="range"]').forEach((input) => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue !== null) {
      input.value = savedValue;
    }
  });

  document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
    element.addEventListener("input", () => {
      localStorage.setItem(element.id, element.innerHTML);
    });
  });

  document.querySelectorAll('input[type="range"]').forEach((input) => {
    input.addEventListener("input", () => {
      localStorage.setItem(input.id, input.value);
    });
  });
});
