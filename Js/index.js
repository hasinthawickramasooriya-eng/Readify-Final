document.addEventListener("DOMContentLoaded", () => {
  setupQuotes();
  setupAuthorOfTheDay(); 
});

function setupQuotes() {
  const quoteDisplay = document.querySelector("#quote-display p");
  if (!quoteDisplay) return;

  const quotes = [
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "You can never get a cup of tea large enough or a book long enough to suit me.",
    "Books are a uniquely portable magic."
  ];

  let i = 0;
  setInterval(() => {
    i = (i + 1) % quotes.length;
    quoteDisplay.style.opacity = 0;
    setTimeout(() => {
      quoteDisplay.textContent = `"${quotes[i]}"`;
      quoteDisplay.style.opacity = 1;
    }, 500);
  }, 4000);
}

function setupAuthorOfTheDay() {
  const authorContainer = document.getElementById('author-card');
  
  setTimeout(() => {
    if (authorContainer && typeof authors !== 'undefined' && authors.length > 0) {
      const today = new Date().getDate();
      const index = today % authors.length;
      const dailyAuthor = authors[index];

      authorContainer.innerHTML = `
        <div class="author-highlight card">
          <h3 class="brand-gradient" style="margin-bottom: 10px;">${dailyAuthor.name}</h3>
          <p style="font-size: 0.95rem; line-height: 1.5;">${dailyAuthor.bio}</p>
          <small style="display:block; margin-top: 15px; opacity: 0.6; font-style: italic;">
            Featured Author for ${new Date().toLocaleDateString()}
          </small>
        </div>
      `;
    } else if (authorContainer) {
      authorContainer.innerHTML = "<p>Discover your next favorite writer tomorrow!</p>";
      console.error("Author of the Day Error: authors array not found in books.js");
    }
  }, 100); 
}