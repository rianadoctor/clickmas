document.addEventListener('DOMContentLoaded', function () {
    // Get product ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Use the product ID to update content
    updateProductDetails(productId);
});

function updateProductDetails(productId) {
    // Replace this with your actual data retrieval logic
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
    // Replace this with your actual data retrieval logic
    const key = String(productId);

    const productDetails = {
        1: { subtotal: 98.00, shipping: 2.00, total: 4818.00, price: 50, name: 'Vacuum', description: 'Super Pixel Vacuum', imageFileName:'shop-1.png' },
        2: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-2.png' },
        3: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-3.png' },
        4: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-4.png' },
        5: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-5.png' },
        6: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-6.png' },
        7: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-7.png' },
        8: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'Phone', description: 'Super Pixel Phone', imageFileName:'shop-8.png' },
    };

    

    // Convert productId to string to handle both numeric and string input
    return productDetails[key] || null;
}
