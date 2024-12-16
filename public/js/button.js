

//Like and Unlike Button
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
      button.addEventListener('click', async function (event) {
        event.stopPropagation(); // Prevent event bubbling
  
        const threadId = button.getAttribute('data-post-id');
        const buttonType = button.getAttribute('button-id');

        console.log("Start Liking !!!");
        console.log(threadId);
        console.log(buttonType);
  
        try {
          button.disabled = true; // Disable the button to prevent multiple clicks

          let response;
          
          if (buttonType === "like") {
            response = await fetch(`/Button/Like/${threadId}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            });
          } else if (buttonType === "unlike") {
            response = await fetch(`/Button/Like/${threadId}`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
            });
          }

          if (response.ok) {
            const icon = button.querySelector('i');
            const likeCountSpan = button.querySelector('.like-count');
            const data = await response.json();

            if (data.isLiked) {
              button.setAttribute('button-id', 'unlike');
              icon.classList.remove('fa-regular');
              icon.classList.add('fa-solid');

            } else {
              button.setAttribute('button-id', 'like');
              icon.classList.remove('fa-solid');
              icon.classList.add('fa-regular');
            }
            if(likeCountSpan)
              likeCountSpan.textContent = data.likeCount;
          } else {
            alert('Error like/unlike posts');
          }
        } catch (err) {
          console.error('Error:', err);
          alert('An unexpected error occurred. Please try again.');
        } finally {
          button.disabled = false; // Re-enable the button after processing
        }
      });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const followButtons = document.querySelectorAll('.follow-button');
  
    followButtons.forEach(button => {
      button.addEventListener('click', async function (event) {
        event.stopPropagation(); // Prevent event bubbling
        console.log("Start !!!");
  
        const userId = event.target.getAttribute('data-user-id');
        const buttonText = event.target.textContent.trim();
  
        console.log(userId);
        console.log(buttonText);
  
        try {
          event.target.disabled = true; // Disable button while processing
          event.target.textContent = "Processing..."; // Show loading state
  
          let response;
  
          if (buttonText === "Follow") {
            response = await fetch(`/Button/Follow/${userId}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            });
          } else if (buttonText === "Unfollow") {
            response = await fetch(`/Button/Follow/${userId}`, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
            });
          }
          
          console.log(response);
          if (response.ok) {
            event.target.textContent = (buttonText === "Follow") ? "Unfollow" : "Follow";
          } else {
            alert('Error following/unfollowing user');
          }
        } catch (err) {
          console.error('Error:', err);
          alert('An unexpected error occurred. Please try again.');
        } finally {
          event.target.disabled = false; // Re-enable the button after processing
        }
      });
    });
  });
   


