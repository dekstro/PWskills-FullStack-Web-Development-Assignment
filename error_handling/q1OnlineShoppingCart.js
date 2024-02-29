
function addToCart(name, price, quantity) {
    try {
        // Error handling for adding product to cart
        if (!name) console.log("Product name is required.");
        if (typeof price !== 'number' || price <= 0) console.log("Invalid product price.");
        if (typeof quantity !=='number' || quantity <= 0) console.log("Invalid quantity.");
    }
    catch (error) {
        console.error("Error:", error.message);
    }
}

function checkout(name,price,quantity) {
    try {
        // Error handling for checkout process
        if (name==null && price==null && quantity==null) console.log("Cart is empty. Add items before checkout.");  
        // Proceed with checkout process
        else console.log("Checkout successful!");
    }
    catch (error) {
        console.error("Error:", error.message);
    }
}
  
addToCart("Laptop", 999.99, 2);
addToCart("", 49.99, 1);
addToCart("Headphones", -29.99, 1);
addToCart("Keyboard", 59.99, -1);
checkout();
  