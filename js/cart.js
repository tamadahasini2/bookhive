// ====================
// CART STATE
// ====================

let cart = [];

// Load cart from localStorage
const savedCart = localStorage.getItem("bookhive-cart");

if (savedCart) {
    cart = JSON.parse(savedCart);
}


// ====================
// ADD TO CART
// ====================

function addToCart(bookId) {

    // Find the book
    const book = books.find(b => b.id === bookId);

    if (!book) {
        alert("Book not found!");
        return;
    }

    // Check stock
    if (!book.inStock) {
        alert("Sorry, this book is out of stock!");
        return;
    }

    // Check if already in cart
    const existingItem = cart.find(item => item.id === bookId);

    if (existingItem) {

        // Increase quantity
        existingItem.quantity += 1;

    } else {

        // Add new item
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image,
            quantity: 1
        });
    }

    // Save cart
    saveCart();

    // Update navbar count
    updateCartCount();

    // Show notification
    showNotification(`Added "${book.title}" to cart! 🎉`);
}


// ====================
// SAVE CART
// ====================

function saveCart() {

    localStorage.setItem(
        "bookhive-cart",
        JSON.stringify(cart)
    );
}


// ====================
// UPDATE CART COUNT
// ====================

function updateCartCount() {

    const cartCountElement =
        document.getElementById("cart-count");

    if (cartCountElement) {

        const totalQuantity =
            cart.reduce(
                (sum, item) => sum + item.quantity,
                0
            );

        cartCountElement.textContent = totalQuantity;
    }
}


// ====================
// SHOW NOTIFICATION
// ====================

function showNotification(message) {

    const notification =
        document.createElement("div");

    notification.className = "notification";

    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}


// ====================
// CALL ON PAGE LOAD
// ====================

updateCartCount();