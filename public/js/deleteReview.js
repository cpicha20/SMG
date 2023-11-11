// get parent element to access data attr
const parentEl = document.getElementById('review-change-container');

// func to handle delete review 
const deleteReviewHandler = async (event) => {

    // prevent default behaviour 
    event.preventDefault();

    //console.log(parentEl.dataset.id);
    // pull review id from parent data set 
    let review_id = parentEl.dataset.id;

    // fetch to delete review using review id 
    const response = await fetch(`/api/reviews/${review_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    // success
    if (response.ok) {
        console.log("Review deleted!");
        document.location.reload();
    } else { // failure
        alert('Failed to delete Review');
    }
}

// event listener for btn
document
    .getElementById('delete-btn')
    .addEventListener('click', deleteReviewHandler);