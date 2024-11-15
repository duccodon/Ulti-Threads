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




// function loadOverlay() {
//   fetch('./comment_overlay/comment.html')  // Correct relative path to comment-overlay.html
//       .then(response => response.text())   // Convert the response to text
//       .then(data => {
//           // Inject the overlay content into the container
//           document.getElementById('comment-overlay-container').innerHTML = data;

//           // Show the overlay
//           document.getElementById('comment-overlay').style.display = 'flex';

//           // Handle close event for overlay
//           const closeOverlay = document.getElementById('close-overlay');
//           closeOverlay.addEventListener('click', () => {
//               document.getElementById('comment-overlay').style.display = 'none';
//           });
//       })
//       .catch(error => console.error('Error loading overlay:', error));
// }

// // Load overlay on page load
// window.onload = loadOverlay;