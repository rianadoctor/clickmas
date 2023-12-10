
document.addEventListener('DOMContentLoaded', function () {
    // Get product ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Use the product ID to update content
    updateProductDetails(productId);

    if (productId === '34') {
        setTimeout(showOverlayWithMessage, 500); // Show the overlay with a timer
    }

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
            // Filler
            console.log('User is signed up. Proceed with the purchase logic.');   
            
        }
    });
});


function checkIfUserIsSignedUp() {
    // Replace this with actual logic to check if the user is signed up
    return true;
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

    updateCountdownInDescription(productDetails);
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
        34: { subtotal: 150.00, shipping: 100.00, total: 250.00, price: 150, name: 'HAT', description: 'Selling OUT SOON!', sellOutSoon: true, sellOutTime: Math.floor(Date.now() / 1000) + 1000, imageFileName:'gc-2.png' },
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



function updateCountdownInDescription(productDetails) {
    const descriptionElement = document.getElementById('description');

    if (productDetails.sellOutSoon) {
        // Calculate the remaining time (in seconds)
        const remainingTime = productDetails.sellOutTime - Math.floor(Date.now() / 1000);

        // Display the countdown in the description
        displayCountdownInDescription(remainingTime, descriptionElement);

        // Redirect when countdown reaches zero
        if (remainingTime <= 0) {
            window.location.href = 'loser.html'; // Replace with your actual URL
        }
    } else {
        // If not selling out soon, use the regular description
        descriptionElement.textContent = productDetails.description;
    }
}


// Function to display countdown in the product description
function displayCountdownInDescription(remainingTime, descriptionElement) {
    function updateCountdown() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        // Set the description to the countdown
        descriptionElement.textContent = `BUY NOW; Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            descriptionElement.textContent = 'SOLD OUT';
        } else {
            remainingTime--;
        }
    }

    updateCountdown(); // Call initially to avoid delay
    const countdownInterval = setInterval(updateCountdown, 1000);
}

function showOverlayWithMessage() {
    console.log('showOverlayWithMessage function is called'); // Add this line for logging

    // Create overlay div
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Adjust background color
    document.body.appendChild(overlay);

    // Message
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerText = 'You found it!';
    overlay.appendChild(message);

    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '100px';

    // Set up the fade-out effect
    overlay.style.transition = 'opacity 1s ease-in-out';

    // Trigger fading effect after a delay
    setTimeout(() => {
        overlay.style.opacity = '0';

        // Remove overlay after fading
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 1000); // Adjust the duration if needed
    }, 3000); // Adjust the delay before fading if needed
}


// Show the wheel spin popup
document.getElementById('buyButton').addEventListener('click', function () {
    document.getElementById('mainbox').style.display = 'block';
});

// Close the wheel spin popup
function closePopup() {
    document.getElementById('mainbox').style.display = 'none';
}

// Spin the wheel and display the result
function rotateWheel() {
    var min = 1024; // min value
    var max = 9999; // max value

    var deg = Math.floor(Math.random() * (max - min)) + min; // generates the value between min and max

    document.getElementById('box').style.transform = `rotate(${deg}deg`;

    let element = document.getElementById('mainbox');
    element.classList.remove('animate');
    
    setTimeout(function () {
        element.classList.add('animate');
        
        // Show the result after the wheel stops spinning
        setTimeout(function () {
            showResultOnPopup(deg);
        }, 2000); // 5000 = 5 seconds
    }, 5000); // 5000 = 5 seconds
}


// Function to show the result on the wheel spin popup
function showResultOnPopup(deg) {
    console.log(`Degrees: ${deg}`);

    // Define the categories and their corresponding degree ranges
    const categories = [
        { name: '$2 Off', range: [-45, 45] },
        { name: '$2 Off', range: [45, 135] },
        { name: '$2 Off', range: [135, 225] },
        { name: '$2 Off', range: [225, 315] },
        { name: '$2 Off', range: [315, 405] },
        { name: '$2 Off', range: [405, 495] },
        { name: '$2 Off', range: [495, 585] },
        { name: '$2 Off', range: [585, 675] }, // Default category
    ];

    // Offset the degrees by 45 to match the wheel layout
    const offsetDeg = (deg + 360) % 360;

    // Find the category whose range includes the offset degrees
    const resultCategory = categories.find(category => offsetDeg >= category.range[0] && offsetDeg < category.range[1]);

    // Check if resultCategory is defined before using it
    const result = resultCategory ? resultCategory.name : 'Unknown';


    // Display the result in the overlay
    const overlay = document.getElementById('overlay2');
    overlay.style.display = 'block';
    overlay.style.position = 'fixed';
    overlay.style.top = '50%';
    overlay.style.left = '50%';
    overlay.style.transform = 'translate(-50%, -50%)';

    const resultMessage = document.createElement('div');
    resultMessage.classList.add('result-message');
    resultMessage.style.zIndex = '1000';
    resultMessage.style.top = '30px'; 
    resultMessage.style.fontSize = '50px';
    resultMessage.style.textAlign = 'center';
    resultMessage.innerText = `You won: ${result}`;
    overlay.appendChild(resultMessage);

    // Set up the fade-out effect
    overlay.style.transition = 'opacity 1s ease-in-out';

    // Trigger fading effect after a delay
    setTimeout(() => {
        overlay.style.opacity = '0';

        // Remove overlay after fading
        setTimeout(() => {
            overlay.style.display = 'none';
            overlay.removeChild(resultMessage);

            window.location.href = 'redeem.html';
        }, 1000); // Adjust the duration if needed
    }, 3000); // Adjust the delay before fading if needed
}