// Fallback authors list in case `books.js` doesn't load on GitHub Pages
if (typeof authors === 'undefined') {
  var authors = [
    { name: "J.K. Rowling", bio: "British author best known for the Harry Potter fantasy series." },
    { name: "Arthur Conan Doyle", bio: "British writer best known for creating the legendary character Sherlock Holmes." },
    { name: "Frank Herbert", bio: "American sci-fi author best known for the Dune saga." },
    { name: "Paulo Coelho", bio: "Brazilian author best known for his international bestseller The Alchemist." },
    { name: "Yann Martel", bio: "Canadian author famous for his philosophical novel Life of Pi." },
    { name: "James Clear", bio: "Author and speaker focused on habits, decision-making, and continuous improvement." },
    { name: "Yuval Noah Harari", bio: "Historian and philosopher known for his deep exploration of human history in Sapiens." },
    { name: "Ana Huang", bio: "Bestselling author known for her intense and popular contemporary romance novels like the Twisted series." },
    { name: "Christos Gage", bio: "Acclaimed writer for comics, film, and television, notably for Marvel's Spider-Man projects." }
  ];
}

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
  console.log('setupAuthorOfTheDay: start', { authorContainerExists: !!authorContainer, authorsType: typeof authors });
  
  setTimeout(() => {
    console.log('setupAuthorOfTheDay: in timeout', { authorsPresent: Array.isArray(authors), authorsLen: Array.isArray(authors) ? authors.length : null });
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