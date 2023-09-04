document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartContainer = document.querySelector(".cart-products");

    // Initialize the total amount
    let totalAmount = 0;

    // Render cart items and calculate total
    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        const ul = document.createElement("ul");

        cartItems.forEach(function (product) {
            const li = document.createElement("li");

            // Create an image element and set its source to the product image URL
            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.nAame;

            li.appendChild(img);

            // Display product name and price
            const productInfo = document.createElement("span");
            productInfo.textContent = `${product.name} - Rs${product.price}`;
            li.appendChild(productInfo);

            // Calculate and update the total amount
            totalAmount += product.price;

            ul.appendChild(li);
        });

        cartContainer.appendChild(ul);
    }

    // Display the total amount
    const totalInfo = document.createElement("p");
    totalInfo.textContent = `Total: Rs${totalAmount.toFixed(2)}`;
    cartContainer.appendChild(totalInfo);
});
