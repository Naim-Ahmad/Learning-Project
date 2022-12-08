const progressSection = document.getElementById("progress-section");

const progressBars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  const screenPos = window.innerHeight / 2;

  const sectionPos = progressSection.getBoundingClientRect().top;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.width = `${value}%`;
    progressBar.style.opacity = "1";
  });
}

function hideProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.width = "0";
    progressBar.style.opacity = "0";
  });
}
