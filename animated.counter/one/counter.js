const numberDisplays = document.querySelectorAll(".number");

const interval = 4000;

numberDisplays.forEach((display) => {
  let startValue = 0;
  let endValue = parseInt(display.getAttribute("data-counter"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    display.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
