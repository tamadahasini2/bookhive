// Get search and filter elements
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const sortSelect = document.getElementById("sort");

// ====================
// FILTER AND SORT BOOKS
// ====================

function applyFilters() {

    let filteredBooks = [...books];

    // 1. Search filter
    const searchTerm =
        searchInput.value.trim().toLowerCase();

    if (searchTerm) {

        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
        );
    }

    // 2. Category filter
    const selectedCategory = categoryFilter.value;

    if (
        selectedCategory &&
        selectedCategory !== "all"
    ) {

        filteredBooks = filteredBooks.filter(book =>
            book.category === selectedCategory
        );
    }

    // 3. Sorting
    const sortBy = sortSelect.value;

    switch (sortBy) {

        case "price-low":
            filteredBooks.sort((a, b) => a.price - b.price);
            break;

        case "price-high":
            filteredBooks.sort((a, b) => b.price - a.price);
            break;

        case "rating":
            filteredBooks.sort((a, b) => b.rating - a.rating);
            break;
    }

    // Display filtered books
    renderBooks(filteredBooks);

    // IMPORTANT:
    // New buttons are created after renderBooks()
    attachAddToCartListeners();

    // Show result count
    showResultCount(filteredBooks.length);
}


// ====================
// SHOW RESULT COUNT
// ====================

function showResultCount(count) {

    let countDisplay =
        document.getElementById("result-count");

    if (!countDisplay) {

        countDisplay =
            document.createElement("p");

        countDisplay.id = "result-count";

        countDisplay.style.textAlign = "center";
        countDisplay.style.color = "#666";

        const grid =
            document.getElementById("books-container");

        grid.parentNode.insertBefore(
            countDisplay,
            grid
        );
    }

    countDisplay.textContent =
        `Showing ${count} book${count !== 1 ? "s" : ""}`;
}


// ====================
// EVENT LISTENERS
// ====================

searchInput.addEventListener(
    "input",
    applyFilters
);

categoryFilter.addEventListener(
    "change",
    applyFilters
);

sortSelect.addEventListener(
    "change",
    applyFilters
);


// ====================
// RUN ON PAGE LOAD
// ====================

applyFilters();