// Welcome message
console.log("Welcome to BookHive! 📚");


// ====================
// VARIABLES
// ====================

const SITE_NAME = "BookHive";
const FOUNDED_YEAR = 2026;
const PI = 3.14159;

let cartCount = 0;
let totalAmount = 0;
let currentUser = null;

console.log(SITE_NAME);
console.log("Founded:", FOUNDED_YEAR);
console.log("Cart count:", cartCount);

// Change let variables
cartCount = 3;
totalAmount = 1497;

console.log("New cart count:", cartCount);
console.log("Total amount: ₹" + totalAmount);


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

function updateCartCount() {

    const cartCountElement =
        document.getElementById("cart-count");

    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

updateCartCount();

console.log("FINAL CART COUNT:", cartCount);

console.log("JS FILE IS RUNNING");
alert("JavaScript is working!");