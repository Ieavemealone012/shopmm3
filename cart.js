// load cart or create empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// save changes
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// add item from products page
function addToCart(name, price, image) {
    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    saveCart();
    alert(name + " added to cart!");
}

// remove item
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
}

// total $
function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}