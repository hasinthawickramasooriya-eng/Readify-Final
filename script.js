let currentAudio = null;
function toggleSound(type) {
  const audio = document.getElementById(`audio-${type}`);
  if (!audio) return;

  if (currentAudio === audio && !audio.paused) {
    audio.pause();
    currentAudio = null;
  } else {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    audio.play().catch(() => console.log("Playback blocked by browser. Click the page first."));
    currentAudio = audio;
  }
}

function setupTheme() {
  const savedTheme = localStorage.getItem("readifyTheme");
  const isDark = savedTheme === "dark";
  if (isDark) document.body.classList.add("dark-mode");
  updateHeroImage(isDark);
}

function toggleTheme() {
  const body = document.body;
  // briefly disable transitions/animations to avoid flashing
  body.classList.add('theme-transition-disabled');
  requestAnimationFrame(() => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("readifyTheme", isDark ? "dark" : "light");
    updateHeroImage(isDark);
    // remove the disable class after a short delay so styles settle
    setTimeout(() => body.classList.remove('theme-transition-disabled'), 60);
  });
}

function updateHeroImage(isDark) {
  const heroImg = document.getElementById("heroImg");
  if (!heroImg) return;

heroImg.src = isDark
  ? "./images/hero-dark.jpg"
  : "./images/hero-light.jpg";

}

function subscribeNewsletter() {
  const emailInput = document.getElementById("newsletter-email");
  if (emailInput && emailInput.value) {
    localStorage.setItem("readifySubscriber", emailInput.value);
    alert("Thank you for subscribing!");
    emailInput.value = "";
  } else {
    alert("Please enter a valid email.");
  }
}

function setupHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

function setupGlobalOutsideClickClose() {
  window.onclick = (event) => {
    const bookModal = document.getElementById("book-modal");
    if (event.target === bookModal) bookModal.style.display = "none";

    const authModal = document.getElementById("auth-modal");
    if (event.target === authModal) authModal.style.display = "none";
  };
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof setupGlobalLogin === "function") setupGlobalLogin();

  setupTheme();
  setupHamburger();
  setupGlobalOutsideClickClose();
});
