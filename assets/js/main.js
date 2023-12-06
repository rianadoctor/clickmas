document.getElementById('card').addEventListener('click', function () {
    // Toggle the 'flipped' class on the card
    this.classList.toggle('flipped');

    // Get the button element
    var button = document.querySelector('.button');

    // Toggle the visibility of the button based on the 'flipped' class
    if (this.classList.contains('flipped')) {
        button.style.display = 'block'; // Show the button
    } else {
        button.style.display = 'block'; // Hide the button
    }
});


