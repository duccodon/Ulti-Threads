const menuItems = document.querySelectorAll('.menu-item');
const sidebarFunctionButton = document.getElementById('sidebar-function');
const functionPopup = document.getElementById('sidebar-functionPopup');
const topFunctionPopup = document.getElementById("top-functionPopup");

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.id != "sidebar-function") {
            if (item.id == "top-function") {
              if (topFunctionPopup.style.display == "block")
                topFunctionPopup.style.display = "none";
              else topFunctionPopup.style.display = "block";
            } else {
              functionPopup.style.display = "none";
              menuItems.forEach((i) => i.classList.remove("active"));
              item.classList.add("active");
            }
        } else {
          if (functionPopup.style.display == "block")
            functionPopup.style.display = "none";
          else functionPopup.style.display = "block";
        }
    });
});


document.addEventListener('click', (e) => {
    if (!functionPopup.contains(e.target) && !sidebarFunctionButton.contains(e.target)) {
        functionPopup.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!topFunctionPopup.contains(e.target) && !document.getElementById('top-function').contains(e.target)) {
        topFunctionPopup.style.display = 'none';
    }
});


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


function loadOverlay() {
  fetch('./comment_overlay/comment.html')  // Correct relative path to comment-overlay.html
    .then(response => response.text())    // Convert the response to text
    .then(data => {

        document.getElementById('comment-overlay-container').innerHTML = data;
        const middle = document.querySelector('.middle'); // Select the middle element

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './comment_overlay/comment.css';  
        document.head.appendChild(link); 

        const script = document.createElement('script');
        script.src = './comment_overlay/comment.js';  
        document.body.appendChild(script); 
        middle.style.overflowY = 'hidden';  // Hide the scroll on .middle

        script.onload = function() {
          addBackButtonListener(script);

        };
    })
    
    .catch(error => console.error('Error loading overlay:', error));
}

function addBackButtonListener(script) {
  const backButton = document.querySelector('.back-button'); // Select the back button
  const overlayContainer = document.getElementById('comment-overlay-container'); // Select the overlay container

  if (backButton && overlayContainer) {
    backButton.addEventListener('click', () => {
      overlayContainer.innerHTML = ''; // Clear the overlay container
      const middle = document.querySelector('.middle'); 
      middle.style.overflowY = 'auto'
    });
  } else {
    console.error('Back button or overlay container not found.');
  }

}


function enableCommentOverlay() {

    window.onload = loadOverlay;
    window.onload();  
}

const commentButtons = document.querySelectorAll('.comment-button');
commentButtons.forEach(button => {
    button.addEventListener('click', enableCommentOverlay);
});