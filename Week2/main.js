// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the book list and book details elements
    const bookList = document.getElementById("book-list-ul");
    const bookDetails = document.getElementById("book-details");
  
    // Loop through the 'books' array and create HTML elements for each book
    books.forEach(function (book, index) {
      // Create a new list item for each book
      const listItem = document.createElement("li");
      listItem.textContent = `${book.title} by ${book.author} (${book.year})`;
      
      // Add a click event listener to display book details
      listItem.addEventListener("click", function () {
        displayBookDetails(index);
      });
  
      // Append the list item to the book list
      bookList.appendChild(listItem);
    });
  
    // Function to display book details
    function displayBookDetails(index) {
      const selectedBook = books[index];
  
      // Update the content of the book details element
      bookDetails.innerHTML = `
        <h2>${selectedBook.title}</h2>
        <p>ID: ${index + 1}</p>
        <p>Author: ${selectedBook.author}</p>
        <p>Publication Year: ${selectedBook.year}</p>
        <p>Genre: ${selectedBook.genre}</p>
        <p>Rating: ${selectedBook.rating}</p>
        <p>Description: ${selectedBook.description}</p>
        <img src="${selectedBook.image}" alt="${selectedBook.title}">
      `;
    }

    // Get the genre filter dropdown element
    const genreFilter = document.getElementById("genre-filter");

    // Add an event listener to the genre filter dropdown
    genreFilter.addEventListener("change", function () {
        // Get the selected genre
        const selectedGenre = genreFilter.value;

        // Filter the books based on the selected genre
        const filteredBooks = selectedGenre === "all" ? books : books.filter(book => book.genre === selectedGenre);

        // Clear the existing book list
        bookList.innerHTML = '';

        // Loop through the filtered books and create list items
        filteredBooks.forEach(function (book, index) {
          const listItem = document.createElement("li");
          listItem.textContent = `${book.title} by ${book.author} (${book.year})`;
          listItem.addEventListener("click", function () {
            displayBookDetails(index);
            });
        bookList.appendChild(listItem);
        });
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
    // Create a copy of the books array to avoid modifying the original array
    const sortedBooks = [...books];

    sortedBooks.sort(function (a, b) {
      if (newestFirst) {
        return b.year - a.year;
      } else {
        return a.year - b.year;
      }
    });

    // Clear the existing book list
    bookList.innerHTML = '';

    // Loop through the sorted books and create list items
    sortedBooks.forEach(function (book, index) {
      const listItem = document.createElement("li");
      listItem.textContent = `${book.title} by ${book.author} (${book.year})`;
      listItem.addEventListener("click", function () {
        displayBookDetails(index);
      });
      bookList.appendChild(listItem);
    });
  }
});