// import axios
const axios = require('axios');

// import class
const GameOBJ = require('./gameClass');

// api key
const apiKey = process.env.CLIENT_ID;
const token = process.env.ACCESS_TOKEN;

// array for game obj for bulk create 
const games = [];

// func to get image for game 
const getImageUrl = async (coverImageId) => {
    try { // try 
        // await response for axios post request
        const response = await axios({
            url: 'https://api.igdb.com/v4/covers',
            method: 'POST',
            headers: {
                'Client-ID': apiKey,
                'Authorization': `Bearer ${token}`,
            },
            data: `fields url; where id = ${coverImageId};`,
        })
        // set image url to url from response
        const imageUrl = response.data[0].url;
        // return url
        return imageUrl;
    } catch (error) { // catch error
        console.error('An error occurred:', error);
        return null;
    }
}

const fetchGame = async () => {
    // axios req post to get 20 games 
    const results = await axios({
        url: `https://api.igdb.com/v4/games`,
        method: 'POST',
        headers: {
            'Client-ID': apiKey,
            'Authorization': `Bearer ${token}`,
        },
        data: 'fields name, summary, cover; limit 15;'
    })
        // array of game obj 
        .then(async (res) => {
            // iterate array of objects
            //console.log(res.data)
            let responseArray = res.data;

            // iterate obj from response
            for (const game of responseArray) {
                // set var to cover property
                const coverImageId = game.cover;
                // if coverimage await getimageurl func else use placeholder
                let imageUrl = coverImageId ? await getImageUrl(coverImageId) : 'https://www.coalitionrc.com/wp-content/uploads/2017/01/placeholder.jpg';

                // make object instance
                let thisGame = new GameOBJ(game.name, game.summary, imageUrl);

                // push obj to array
                games.push(thisGame);
            }
            //console.log(games);
        })
        // catch err
        .catch(error => {
            console.error(error);
        });
}

// export module
module.exports = fetchGame;

