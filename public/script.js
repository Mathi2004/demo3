let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header=document.querySelector('.header-3');
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY>250)
    {
        header.classList.add('active');
    }
    else{
        header.classList.remove('active')
    }
}

// Select all the "thumbs up" icons
const thumbsUpIcons = document.querySelectorAll(".fas.fa-thumbs-up");

// Handle click event on each "thumbs up" icon
thumbsUpIcons.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    event.preventDefault();

    // Retrieve the product name, price, and image URL from data attributes
    const productName = icon.getAttribute("data-product-name");
    const productPrice = parseFloat(icon.getAttribute("data-product-price"));
    const productImage = icon.getAttribute("data-product-image"); // Add this line

    // Create an object to represent the product
    const product = {
      name: productName,
      price: productPrice,
      image: productImage, // Add image URL to the product object
    };

    // Retrieve the wishlist from local storage or create an empty array
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Check if the product is already in the wishlist
    const existingProduct = wishlist.find((item) => item.name === productName);

    if (!existingProduct) {
      // Add the product to the wishlist if it's not already there
      wishlist.push(product);

      // Save the updated wishlist to local storage
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      // Display a confirmation message (optional)
      alert(`${productName} has been added to your wishlist.`);
    } else {
      // Display a message indicating that the product is already in the wishlist (optional)
      alert(`${productName} is already in your wishlist.`);
    }
  });
});

// ... (existing code)


// Select all the "Add To Cart" buttons
const addToCartButtons = document.querySelectorAll(".btn.add-to-cart");

// Handle click event on each "Add To Cart" button
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    // Retrieve the product name, price, and image URL from data attributes
    const productName = button.getAttribute("data-product-name");
    const productPrice = parseFloat(button.getAttribute("data-product-price"));
    const productImage = button.getAttribute("data-product-image");

    // Create an object to represent the product
    const product = {
      name: productName,
      price: productPrice,
      image: productImage,
    };

    // Retrieve the cart items from local storage or create an empty array
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cartItems.findIndex(
      (item) => item.name === productName
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity or other details here
      // For example, you can increment the quantity:
      cartItems[existingProductIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it
      product.quantity = 1; // Set the initial quantity to 1
      cartItems.push(product);
    }

    // Save the updated cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Display a confirmation message (optional)
    alert(`${productName} has been added to your cart.`);
  });
});
