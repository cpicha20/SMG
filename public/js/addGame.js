// func to add game to collection  
const addGameToCollection = async (event) => {

    // prevent default behaviour 
    event.preventDefault();

    // get game_id from url
    const game_id = window.location.pathname.split('/').pop();

    // if game id
    if (game_id) {
        // send game_id to server 
        const response = await fetch('/api/games', {
            method: 'PUT',
            body: JSON.stringify({ game_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        // success
        if (response.ok) {
            console.log("Game added to your collection posted!");
            document.location.reload();
        } else { // failure
            alert('Failed to add game to collection');
        }
    }
}

// event listener for button 
document
    .getElementById("add-game")
    .addEventListener("click", addGameToCollection);
