const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(likeButton => {
    const heartIcon = likeButton.querySelector('i');
    likeButton.addEventListener('click', () => {
        if (heartIcon.classList.contains('fa-regular')) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
        } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector('.back-button'); // Select the back button
    const overlay = document.getElementById('comment-overlay'); // Select the overlay

    // Check if the back button and overlay exist in the document
    if (backButton && overlay) {
        backButton.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    } else {
        console.error('Back button or overlay element not found.');
    }
});