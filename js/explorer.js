document.addEventListener("DOMContentLoaded", () => {
  setupExplorerPage();
});

function setupExplorerPage() {
  const bookGrid = document.getElementById("book-grid");
  if (!bookGrid) return; 

  if (typeof bookData === "undefined") {
    alert("Book database not loaded!");
    return;
  }

  renderBooks(bookData);

  const searchInput = document.getElementById("search-input");
  const genreFilter = document.getElementById("genre-filter");

  function filterBooks() {
    const rawSearch = (searchInput?.value || "").toLowerCase();
    const searchTerm = rawSearch.replace(/\./g, "").trim();
    const selectedGenre = genreFilter?.value || "all";

    const filtered = bookData.filter((book) => {
      const cleanTitle = book.title.toLowerCase().replace(/\./g, "");
      const cleanAuthor = book.author.toLowerCase().replace(/\./g, "");
      const matchesSearch = cleanTitle.includes(searchTerm) || cleanAuthor.includes(searchTerm);
      const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });

    renderBooks(filtered);
  }

  if (searchInput) searchInput.addEventListener("input", filterBooks);
  if (genreFilter) genreFilter.addEventListener("change", filterBooks);
}

function renderBooks(booksToRender) {
  const bookGrid = document.getElementById("book-grid");
  if (!bookGrid) return;

  bookGrid.innerHTML = "";
  if (!booksToRender || booksToRender.length === 0) {
    bookGrid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; color: #333;">No books found matching your search.</p>';
    return;
  }

  booksToRender.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card", "card");
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
      <h3>${book.title}</h3>
      <p style="color: var(--secondary-color); font-weight:bold;">${book.author}</p>
      <small style="background: #eee; padding: 2px 8px; border-radius: 4px; color: #333;">${book.genre}</small>
    `;
    card.addEventListener("click", () => openModal(book));
    bookGrid.appendChild(card);
  });
}

function openModal(book) {
  const modal = document.getElementById("book-modal");
  const modalBody = document.getElementById("modal-body");

  if (!modal || !modalBody) {
    console.error("Modal elements missing in HTML!");
    return;
  }

  modalBody.innerHTML = `
    <div class="modal-layout">
      <img src="${book.image}" alt="${book.title}" class="modal-image"
           onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'">

      <div class="modal-info">
        <span class="close-btn" onclick="closeBookModal()">&times;</span>

        <h2 class="brand-gradient" style="line-height: 1.2; margin-bottom: 5px;">${book.title}</h2>
        <h4 style="color: var(--secondary-color); margin-bottom: 15px;">By ${book.author}</h4>

        <div style="margin-bottom: 15px;">
          <span style="background: rgba(108, 99, 255, 0.2); color: var(--primary-color);
                       padding: 5px 15px; border-radius: 20px; font-size: 0.85rem; font-weight: bold;">
            ${book.genre}
          </span>
        </div>

        <p><strong>Rating:</strong> ${book.rating || "N/A"} / 5 ⭐</p>
        <p style="margin-top: 15px; line-height: 1.6; font-size: 0.95rem; opacity: 0.9;">
          <strong>Synopsis:</strong> ${book.synopsis || "No synopsis available."}
        </p>

        <button id="add-btn" class="cta-btn" style="margin-top: 25px; width: 100%;">
          Add to My List
        </button>
      </div>
    </div>
  `;

  document.getElementById('add-btn').onclick = () => saveToMyList(book);

  modal.style.display = "flex";
}

function closeBookModal() {
  const modal = document.getElementById("book-modal");
  if (modal) modal.style.display = "none";
}

function saveToMyList(book) {
  const user = localStorage.getItem("readifyUser");
  if (!user) {
    alert("Please login to save books.");
    if (typeof openAuthModal === "function") openAuthModal();
    return;
  }

  let myList = JSON.parse(localStorage.getItem("userLibrary")) || [];
  
  const isDuplicate = myList.some(savedBook => savedBook.title === book.title);

  if (!isDuplicate) {
    myList.push({
        title: book.title,
        image: book.image
    });
    localStorage.setItem("userLibrary", JSON.stringify(myList));
    alert(`"${book.title}" saved to your account!`);
  } else {
    alert("You already saved this book.");
  }
}