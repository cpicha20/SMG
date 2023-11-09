const postReviewFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const review_content = document.querySelector('#review-input').value.trim();
  const game_id =  window.location.pathname.split('/').pop();
  console.log( game_id);

  if (review_content) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/reviews/', {
      method: 'POST',
      body: JSON.stringify({ review_content, game_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("review posted");
      document.location.reload();
    } else {
      alert('Failed to post');
    }
  }
};


document
  .querySelector('#post-review')
  .addEventListener('click', postReviewFormHandler);

