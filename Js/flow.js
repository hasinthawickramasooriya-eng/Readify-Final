document.addEventListener("DOMContentLoaded", () => {
  setupAccordionsOnThisPage();
});

function setupAccordionsOnThisPage() {
  const acc = document.getElementsByClassName("accordion");
  if (!acc || acc.length === 0) return;

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (!panel) return;
      panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
    });
  }
}
