document.addEventListener("DOMContentLoaded", function () {
  const bookList = document.getElementById("book-list-ul");
  const bookDetails = {
    title: document.getElementById("book-title"),
    author: document.getElementById("book-author"),
    year: document.getElementById("book-year"),
    genre: document.getElementById("book-genre"),
    rating: document.getElementById("book-rating"),
    description: document.getElementById("book-description"),
    image: document.getElementById("book-image"),
  };

  // Function to create and display book cards
  function displayBookCards(books) {
    bookList.innerHTML = "";
    books.forEach((book, index) => {
      const card = createBookCard(book, index);
      bookList.appendChild(card);
    });
  }

  // Function to create a book card
  function createBookCard(book, index) {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = book.image;
    image.alt = book.title;

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const year = document.createElement("p");
    year.textContent = `Year: ${book.year}`;

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${book.genre}`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${book.rating}`;

    const description = document.createElement("p");
    description.textContent = `Description: ${book.description}`;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(year);
    card.appendChild(genre);
    card.appendChild(rating);

    // Add a line break before the description
    const br = document.createElement("br");
    card.appendChild(br);

    card.appendChild(description);

    card.addEventListener("click", function () {
      displayBookDetails(book);
    });

    return card;
  }

  // Function to display book details
  function displayBookDetails(book) {
    bookDetails.title.textContent = `Title: ${book.title}`;
    bookDetails.author.textContent = `Author: ${book.author}`;
    bookDetails.year.textContent = `Year: ${book.year}`;
    bookDetails.genre.textContent = `Genre: ${book.genre}`;
    bookDetails.rating.textContent = `Rating: ${book.rating}`;
    bookDetails.description.textContent = `Description: ${book.description}`;
    bookDetails.image.src = book.image;
    bookDetails.image.alt = book.title;
  }

  // Initial display of book cards
  displayBookCards(books);

  // Get the genre filter dropdown element
  const genreFilter = document.getElementById("genre-filter");

  // Add an event listener to the genre filter dropdown
  genreFilter.addEventListener("change", function () {
    const selectedGenre = genreFilter.value;
    const filteredBooks =
      selectedGenre === "all"
        ? books
        : books.filter((book) => book.genre === selectedGenre);
    displayBookCards(filteredBooks);
  });

  // Get the sorting buttons
  const sortNewestButton = document.getElementById("sort-newest");
  const sortOldestButton = document.getElementById("sort-oldest");

  // Add event listeners to the sorting buttons
  sortNewestButton.addEventListener("click", function () {
    sortBooksByYear(true); // Sort by newest
  });

  sortOldestButton.addEventListener("click", function () {
    sortBooksByYear(false); // Sort by oldest
  });

  // Function to sort books by publication year
  function sortBooksByYear(newestFirst) {
    const sortedBooks = [...books];

    sortedBooks.sort((a, b) =>
      newestFirst ? b.year - a.year : a.year - b.year
    );

    displayBookCards(sortedBooks);
  }
});
