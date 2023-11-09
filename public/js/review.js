const postReviewFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const review_content = document.querySelector('#review-input').value.trim();
  const game_id =  window.location.pathname.split('/').pop();

    

  console.log( game_id);

  if (review_content) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/reviews/create', {
      method: 'POST',
      body: JSON.stringify({ review_content,  }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('#post-review')
  .addEventListener('submit', postReviewFormHandler);
