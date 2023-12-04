
document.addEventListener('DOMContentLoaded', function () {
    // Get product ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Use the product ID to update content
    updateProductDetails(productId);

    // Get the buy button element
    const buyButton = document.getElementById('buyButton');

    // Attach a click event listener to the button
    buyButton.addEventListener('click', function () {
        // Check if the user is signed up (replace this condition with your actual check)
        const isUserSignedUp = checkIfUserIsSignedUp();

        // If the user is not signed up, show a pop-up message
        if (!isUserSignedUp) {
            alert('You must sign up first before you can make any purchases.');
            window.location.href = 'sign-up.html';
        } else {
            // If the user is signed up, proceed with the purchase logic
            // For demonstration purposes, log a message to the console
            console.log('User is signed up. Proceed with the purchase logic.');
            
            // Redirect the user to another page (replace 'newPage.html' with the actual URL)
            
        }
    });
});


function checkIfUserIsSignedUp() {
    // Replace this with actual logic to check if the user is signed up
    // For demonstration purposes, always return false
    return false;
}

function updateProductDetails(productId) {
    const productDetails = getProductDetailsById(productId);

    // Update HTML content with product details
    document.getElementById('subtotal').textContent = `$${productDetails.subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${productDetails.shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${productDetails.total.toFixed(2)}`;
    document.getElementById('price').textContent = `$${parseInt(productDetails.price, 10)}`;

    // Additional text updates
    document.getElementById('name').textContent = productDetails.name;
    document.getElementById('description').textContent = productDetails.description;



    // Updating image source 
    document.getElementById('productImage').src = '../assets/img/' + productDetails.imageFileName; 

}

function getProductDetailsById(productId) {
    const key = String(productId);
    const productDetails = {
        //Main page
        1: { subtotal: 98.00,  shipping: 2.00,   total: 4818.00,price: 50,  name: 'Vacuum', description: 'Super Pixel Vacuum', imageFileName:'shop-1.png' },
        2: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-2.png' },
        3: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-3.png' },
        4: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-4.png' },
        5: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-5.png' },
        6: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-6.png' },
        7: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-7.png' },
        8: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-8.png' },
        //Christmas hats
        9:  { subtotal: 98.00,  shipping: 2.00,   total: 4818.00, price: 50, name: 'HAT', description: 'Super Pixel Vacuum', imageFileName:'c-1.png'},
        10: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'c-2.png' },
        11: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'c-3.png' },
        12: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'c-4.png' },
        13: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'c-5.png' },
        14: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'c-6.png' },
        15: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'c-7.png' },
        16: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'c-8.png' },

        //Green hats
        17:  { subtotal: 98.00,  shipping: 2.00,   total: 4818.00, price: 50, name: 'HAT', description: 'Super Pixel Vacuum', imageFileName:'g-1.png'},
        18: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'g-2.png' },
        19: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'g-3.png' },
        20: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'g-4.png' },
        21: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'g-5.png' },
        22: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'g-6.png' },
        23: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'g-7.png' },
        24: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'g-8.png' },

        //Caps
        25:  { subtotal: 98.00,  shipping: 2.00,   total: 4818.00, price: 50, name: 'Pink Cap', description: 'Super Pixel Vacuum', imageFileName:'p-1.png'},
        26: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'p-2.png' },
        27: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'p-3.png' },
        28: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'p-4.png' },
        29: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'p-5.png' },
        30: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'p-6.png' },
        31: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'p-7.png' },
        32: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'p-8.png' },
    
        //Caps
        33:  { subtotal: 98.00,  shipping: 2.00,   total: 4818.00, price: 50, name: 'Pink Cap', description: 'Super Pixel Vacuum', imageFileName:'gc-1.png'},
        34: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Selling OUT SOON!', imageFileName:'gc-2.png' },
        35: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'gc-3.png' },
        36: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'gc-4.png' },
        37: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'gc-5.png' },
        38: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'gc-6.png' },
        39: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'gc-7.png' },
        40: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Super Pixel Phone', imageFileName:'gc-8.png' },
    };

    

    // Convert productId to string to handle both numeric and string input
    return productDetails[key] || null;
}
