// Welcome message
console.log("Welcome to BookHive! 📚");


// ====================
// VARIABLES
// ====================

const SITE_NAME = "BookHive";
const FOUNDED_YEAR = 2026;
const PI = 3.14159;


let totalAmount = 0;
let currentUser = null;

console.log(SITE_NAME);
console.log("Founded:", FOUNDED_YEAR);


// Change let variables


// ====================
// DATA TYPES
// ====================

const bookTitle = "Wings of Fire";
const author = "A.P.J. Abdul Kalam";
const description = `Bestseller since 1999`;

const price = 299;
const discountRate = 0.20;
const rating = 4.8;

const isInStock = true;
const isOnSale = false;

const couponCode = null;

let promoMessage;

console.log(typeof bookTitle);
console.log(typeof price);
console.log(typeof isInStock);
console.log(typeof promoMessage);


// ====================
// TEMPLATE LITERALS
// ====================

const message1 =
    "Hello, " + author +
    "! Your book '" + bookTitle +
    "' costs ₹" + price;

const message2 =
    `Hello, ${author}! Your book '${bookTitle}' costs ₹${price}`;

console.log(message1);
console.log(message2);

// Dynamic string 1
const welcomeMessage = `Welcome to ${SITE_NAME}!`;
console.log(welcomeMessage);

// Dynamic string 2
const bookInfo = `${bookTitle} is written by ${author}.`;
console.log(bookInfo);

// Dynamic string 3
const priceMessage = `${bookTitle} costs ₹${price}.`;
console.log(priceMessage);

// Multi-line template literal
const productCard = `
    <div class="book-card">
        <h3>${bookTitle}</h3>
        <p>by ${author}</p>
        <p>₹${price}</p>
    </div>
`;

console.log(productCard);


// ====================
// MATH
// ====================

const bookPrice = 299;
const quantity = 3;

const subtotal = bookPrice * quantity;
const tax = subtotal * 0.05;
const total = subtotal + tax;
const discount = total * 0.10;
const finalPrice = total - discount;

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Total:", total);
console.log("After discount:", finalPrice);

console.log("Final:", finalPrice.toFixed(2));

console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(10, 20));
console.log(Math.min(10, 20));
console.log(Math.random());


// ====================
// DOM MANIPULATION
// ====================

const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");

if (heroTitle && heroSubtitle) {

    console.log("Current title:", heroTitle.textContent);

    heroTitle.textContent = "Welcome to BookHive";

    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning! 🌅";
    } else if (currentHour < 17) {
        greeting = "Good Afternoon! ☀️";
    } else {
        greeting = "Good Evening! 🌙";
    }

    heroSubtitle.textContent =
        `${greeting} Find your next great read.`;
}


// ====================
// SELECTING ELEMENTS
// ====================

// 1. getElementsByClassName
const allBookCards =
    document.getElementsByClassName("book-card");

// 2. querySelector
const firstCard =
    document.querySelector(".book-card");

// 3. querySelectorAll
const allCardsQuery =
    document.querySelectorAll(".book-card");

console.log(
    "Number of book cards:",
    allCardsQuery.length
);


// ====================
// CART COUNT
// ====================
// ====================
// CART COUNT
// ====================





// ====================
// GENERATE BOOK CARDS DYNAMICALLY
// ====================
 
// First, link books.js BEFORE this file in HTML
// <script src="js/books.js"></script>
// <script src="js/main.js"></script>
 
// Find the container where book cards should go
const booksContainer = document.getElementById("books-container");
 
// Function to create HTML for one book
function createBookCard(book) {
    return `
        <article class="book-card" data-id="${book.id}">
            <img src="${book.image}" alt="${book.title}" loading="lazy">
            <h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="rating">⭐ ${book.rating} (${book.reviews} reviews)</p>
            <p class="price">
                ₹${book.price}
                <small><s>₹${book.originalPrice}</s></small>
            </p>
            <button
                class="add-to-cart"
                data-id="${book.id}"
                ${!book.inStock ? "disabled" : ""}
            >
                ${book.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
        </article>
    `;
}
 
// Function to render all books to the page
function renderBooks(bookList) {
    if (!booksContainer) return;
 
    // map() each book to its HTML, then join all into one string
    const allHTML = bookList.map(book => createBookCard(book)).join("");
 
    // Replace the container's content
    booksContainer.innerHTML = allHTML;
}
 

// ====================
// ATTACH ADD TO CART EVENTS
// ====================

function attachAddToCartListeners() {

    const buttons = document.querySelectorAll(".add-to-cart");

    console.log("🟢 BUTTONS FOUND:", buttons.length);

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const bookId = parseInt(this.dataset.id);

            console.log("🔥 BUTTON CLICKED");
            console.log("📚 BOOK ID:", bookId);

            addToCart(bookId);

        });

    });
}
// Render books first, then attach click events
if (typeof books !== "undefined") {
    renderBooks(books);
    attachAddToCartListeners();
}


// ====================
// ARRAY METHODS
// ====================

// MAP - get all book titles
const titles = books.map(book => book.title);
console.log("Book Titles:", titles);

// FILTER - get books under ₹300
const cheapBooks = books.filter(book => book.price < 300);
console.log("Books under ₹300:", cheapBooks);

// FILTER - get fiction books
const fictionBooks = books.filter(book => book.category === "fiction");
console.log("Fiction Books:", fictionBooks);

// REDUCE - calculate total price
const totalPrice = books.reduce((sum, book) => sum + book.price, 0);
console.log("Total catalog value: ₹" + totalPrice);

// ====================
// SORTING BOOKS
// ====================

// ====================
// SORTING BOOKS
// ====================

if (typeof books !== "undefined") {

    const sortedByPriceLow = [...books].sort((a, b) => a.price - b.price);
    console.log("Price Low to High:", sortedByPriceLow);

    const sortedByPriceHigh = [...books].sort((a, b) => b.price - a.price);
    console.log("Price High to Low:", sortedByPriceHigh);

    const sortedByRating = [...books].sort((a, b) => b.rating - a.rating);
    console.log("Highest Rated:", sortedByRating);

    const sortedByTitle = [...books].sort((a, b) =>
        a.title.localeCompare(b.title)
    );
    console.log("Alphabetical:", sortedByTitle);
}



// ====================
// PRACTICE FUNCTIONS
// ====================

// Find cheapest book
const cheapestBook = books.reduce((cheapest, book) =>
    book.price < cheapest.price ? book : cheapest
);

console.log("Cheapest Book:", cheapestBook.title);

// Find books in a category
function findBooksByCategory(category) {
    return books.filter(book => book.category === category);
}

console.log("Business Books:", findBooksByCategory("business"));

// Count books in each category
const categoryCount = books.reduce((count, book) => {
    count[book.category] = (count[book.category] || 0) + 1;
    return count;
}, {});

console.log("Books by Category:", categoryCount);


// ====================
// FIND & CHECK METHODS
// ====================

const wingsOfFire = books.find(book => book.id === 1);
console.log("Found Book:", wingsOfFire.title);

const bookIndex = books.findIndex(book => book.id === 5);
console.log("Book Index:", bookIndex);

const hasAtomicHabits = books.some(
    book => book.title === "Atomic Habits"
);
console.log("Has Atomic Habits:", hasAtomicHabits);

const allWellRated = books.every(
    book => book.rating > 4
);
console.log("All books rated above 4:", allWellRated);