// func to make fetch to update review 
const updateReviewHandler = async (event) => {
    // prevent default behaviour 
    event.preventDefault();

    //  should make review form editable 
        // on enter 

    // fetch to update review 
    const response = await fetch('/api/reviews/:id', {
        method: 'POST',
        body: JSON.stringify({ review_content }),
        headers: { 'Content-Type': 'application/json' },
    });

    // success
    if (response.ok) {
        console.log("Review updated!");
        document.location.reload();
    } else { // failure
        alert('Failed to update Review');
    }
}

// event listener 
document
    .getElementById('edit-btn')
    .addEventListener('click', updateReviewHandler);