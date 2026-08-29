// ====================
// CART PAGE
// ====================

const cartItemsContainer =
    document.getElementById("cart-items");

const cartTotalElement =
    document.getElementById("cart-total");


// ====================
// RENDER CART
// ====================

function renderCart() {

    if (!cartItemsContainer) return;

    // Check if cart is empty
    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center; padding:40px;">
                    Your cart is empty.
                    <a href="books.html">Browse books</a>
                </td>
            </tr>
        `;

        cartTotalElement.textContent = "₹0";
        const subtotalElement = document.getElementById("summary-subtotal");
const taxElement = document.getElementById("summary-tax");
const grandTotalElement = document.getElementById("summary-grand-total");

if (subtotalElement) subtotalElement.textContent = "₹0";
if (taxElement) taxElement.textContent = "₹0";
if (grandTotalElement) grandTotalElement.textContent = "₹0";

        return;
    }


    // Generate rows
    const rowsHTML = cart.map(item => `

        <tr data-id="${item.id}">

            <td>
                <img
                    src="${item.image}"
                    alt="${item.title}"
                    width="60"
                >
            </td>

            <td>
                <strong>${item.title}</strong><br>
                <small>${item.author}</small>
            </td>

            <td>₹${item.price}</td>

            <td>
                <input
                    type="number"
                    value="${item.quantity}"
                    min="1"
                    max="10"
                    class="qty-input"
                    data-id="${item.id}"
                >
            </td>

            <td>
                ₹${item.price * item.quantity}
            </td>

            <td>
                <button
                    class="remove-btn"
                    data-id="${item.id}"
                >
                    ❌
                </button>
            </td>

        </tr>

    `).join("");


    // Put rows into table
    cartItemsContainer.innerHTML = rowsHTML;


    // Calculate total
    const total = cart.reduce(
        (sum, item) =>
            sum + (item.price * item.quantity),
        0
    );

    cartTotalElement.textContent = `₹${total}`;
    const subtotalElement = document.getElementById("summary-subtotal");
const taxElement = document.getElementById("summary-tax");
const grandTotalElement = document.getElementById("summary-grand-total");

const tax = total * 0.05;
const grandTotal = total + tax;

if (subtotalElement) {
    subtotalElement.textContent = `₹${total.toFixed(2)}`;
}

if (taxElement) {
    taxElement.textContent = `₹${tax.toFixed(2)}`;
}

if (grandTotalElement) {
    grandTotalElement.textContent = `₹${grandTotal.toFixed(2)}`;
}


    // Attach events
    attachQuantityListeners();
    attachRemoveListeners();
}


// ====================
// QUANTITY EVENTS
// ====================

function attachQuantityListeners() {

    const inputs =
        document.querySelectorAll(".qty-input");

    inputs.forEach(input => {

        input.addEventListener("change", function () {

            const id =
                parseInt(this.getAttribute("data-id"));

            const newQty =
                parseInt(this.value);

            const item =
                cart.find(i => i.id === id);

            if (item) {

                item.quantity = newQty;

                saveCart();

                renderCart();

                updateCartCount();
            }

        });

    });
}


// ====================
// REMOVE EVENTS
// ====================

function attachRemoveListeners() {

    const buttons =
        document.querySelectorAll(".remove-btn");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const id =
                parseInt(this.getAttribute("data-id"));

            if (confirm("Remove this item from cart?")) {

                cart =
                    cart.filter(item => item.id !== id);

                saveCart();

                renderCart();

                updateCartCount();
            }

        });

    });
}


// ====================
// RENDER ON PAGE LOAD
// ====================

renderCart();