const counters = document.querySelectorAll("#counter");

counters.forEach((counter) => {
  let startValue = 1;
  let endValue = parseInt(counter.getAttribute("data-counter"));

  let interval = setInterval(function () {
    startValue += 1;
    counter.innerHTML = startValue;
    if (startValue == endValue) {
      clearInterval(interval);
    }
  }, 1);
});
