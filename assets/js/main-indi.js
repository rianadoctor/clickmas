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
    document.getElementById('checkoutAmount').textContent = `$${productDetails.total.toFixed(2)}`;
    document.getElementById('price').textContent = `$${parseInt(productDetails.price, 10)}`;

    // Additional text updates
    document.getElementById('name').textContent = productDetails.name;
    document.getElementById('description').textContent = productDetails.description;
}

function getProductDetailsById(productId) {
    // Replace this with your actual data retrieval logic
    const key = String(productId);

    const productDetails = {
        1: { subtotal: 498.00, shipping: 2.00, total: 4818.00, price: 500, name: 'Vacuum', description: '256GB, Navy Blue' },
        // Add more products as needed
    };

    // Convert productId to string to handle both numeric and string input
    return productDetails[key] || null;
}
