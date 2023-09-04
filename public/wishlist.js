document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the wishlist from local storage
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistContainer = document.querySelector(".liked-products");
  
    // Render wishlist items
    if (wishlist.length === 0) {
      wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    } else {
      const ul = document.createElement("ul");
  
      wishlist.forEach(function (product) {
        const li = document.createElement("li");
  
        // Create an image element and set its source to the product image URL
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
  
        li.appendChild(img);
  
        // Display product name and price
        const productInfo = document.createElement("span");
        productInfo.textContent = `${product.name} - $${product.price}`;
        li.appendChild(productInfo);
  
        ul.appendChild(li);
      });
  
      wishlistContainer.appendChild(ul);
    }
  });
  