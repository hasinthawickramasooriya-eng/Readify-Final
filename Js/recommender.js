document.addEventListener("DOMContentLoaded", () => {
  const genre = document.getElementById("rec-genre");
  const length = document.getElementById("rec-length");
  if (!genre || !length) return;
});

function recommendBook() {
  if (typeof bookData === "undefined") {
    alert("Book database not loaded!");
    return;
  }

  const genre = document.getElementById("rec-genre")?.value;
  const length = document.getElementById("rec-length")?.value;

  const resultDiv = document.getElementById("recommendation-result");
  const contentDiv = document.getElementById("book-content");
  const spinner = document.getElementById("spinner");

  if (!resultDiv || !contentDiv || !spinner) return;

  resultDiv.style.display = "block";
  contentDiv.style.opacity = "0";
  spinner.style.display = "block";

  const candidates = bookData.filter((book) => {
    const genreMatch = genre === "any" || book.genre === genre;
    const lengthMatch = length === "any" || book.length === length;
    return genreMatch && lengthMatch;
  });

  setTimeout(() => {
    spinner.style.display = "none";

    if (candidates.length > 0) {
      const randomBook = candidates[Math.floor(Math.random() * candidates.length)];
      document.getElementById("rec-title").innerText = randomBook.title;
      document.getElementById("rec-author").innerText = "By " + randomBook.author;
      document.getElementById("rec-synopsis").innerText = randomBook.synopsis;
      resultDiv.dataset.currentBookTitle = randomBook.title;
    } else {
      document.getElementById("rec-title").innerText = "No Matches Found";
      document.getElementById("rec-author").innerText = "Try changing your filters.";
      document.getElementById("rec-synopsis").innerText = "";
    }

    contentDiv.style.opacity = "1";
  }, 600);
}
