// get parent element to access data attr
const parentEle = document.getElementById('review-change-container');
 
// modal hook 
const modal = document.getElementById("reviewModal");

// btn hooks
const editBtn = document.getElementById("edit-btn");
const closeBtn = document.getElementsByClassName("close")[0];
const saveBtn = document.getElementById('save-btn');

// open modal func
const openModal = (event) => {
    // prevent default behaviour 
    event.preventDefault();

    // display modal
    modal.style.display = "block";
}

// close modal func
const closeModal = (event) => {
    // prevent default behaviour 
    event.preventDefault();

    // close modal
    modal.style.display = "none";
}

// func to make fetch to update review 
const updateReviewHandler = async (event) => {
    // prevent default behaviour 
    event.preventDefault(); 

    //console.log(parentEle.dataset.id); 
    // pull review id from parent data set 
    let review_id = parentEle.dataset.id;
    console.log(review_id);

    // get content of updated review 
    const review_content = document.querySelector('#review').value.trim();

    // fetch to update review 
    const response = await fetch(`/api/reviews/${review_id}`, {
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

// event listeners

editBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);
saveBtn.addEventListener('click', updateReviewHandler);