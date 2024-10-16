const express = require('express');
const app = express();
const PORT = 3000;

const games = []
const deckTemplate = require('./deck');
const { v4: uuidv4 } = require('uuid');

function startGame(reqBody){
    let gameExists = false;

    // check if gameId exists already in games list
    for(let i in games){
        //if game exists
        if(games[i].gameId == reqBody["gameId"]){
            gameExists = true;
            break;
        } else if(games[i].playerId == reqBody["playerId"]){
            games.splice(i, 1)
        }
    }

    // const gameExists = games.find(g => g.gameId === reqBody["gameId"]);
    // const playerExists = games.find(p => p.playerId === reqBody["playerId"]);

    // if(playerExists) games.splice()


    if(!gameExists){
        const playerId = reqBody["playerId"];
        const chipAmount = reqBody["startingChips"];
        // const gameId = uuidv4();
        // TODO - TESTING ONLY
        const gameId = "4321"
        const deck = {
            // "deckId": uuidv4(),
            // TODO - TESTING ONLY
            "deckId": "1234",
            "deck": deckTemplate
        };

        const gameInfo = {
            "playerId": playerId,
            "chipAmount": chipAmount,
            "gameId": gameId,
            "deckInfo": deck
        }

        games.push(gameInfo);
        return { 
            status: 200, 
            data: 
                {
                    gameId: gameInfo["gameId"], 
                    deckId: gameInfo["deckInfo"].deckId
                } 
        };
    } else {
        return { status: 401, message: "Duplicate Game"};
    }
}

function drawCard(gameId, deckId){
    //returns object in games array (BOTH do)
    const gameFound = games.find(g => g.gameId === gameId);

    const { deckInfo } = gameFound;
    const { deck } = deckInfo;
    const { cards } = deck;

    // console.log(cards);

    if(gameFound){
    // if(true){
        //calculate random values
        //access the respective array
        //update array by incrementing value 
        //store cards in another array
        let randomSuitIndex = 0;
        let randomSuit = "clubs";
        let randomValue = 0;

        do{
            // randomSuitIndex = Math.floor(Math.random() * deck.suits.length);
            // randomSuit = deck.suits[randomSuitIndex];
            // randomValue = Math.floor(Math.random() * cards[randomSuit].length);
        } while (cards[randomSuit][randomValue].played > 5);
        
        // console.log(cards[randomSuit][randomValue].value)

        //update played field
        cards[randomSuit] = cards[randomSuit].map(card => {
            if(card.value === cards[randomSuit][randomValue].value){
                let playedCounter = cards[randomSuit][randomValue].played + 1
                return { ...card, played: playedCounter};
            }
            return card;
        })
        console.log("\n -------------------------- Deck -------------------------- ")
        console.log(cards)
        console.log("\n -------------------------- End of Deck -------------------------- ")


        return { status: 200, message: "Success!" }
    } else {
        return { status: 400, message: "Invalid Request" }
    }
}    


app.use(express.json());

app.post('/login', (req, res) => {
    //check login against DB, if auth successful then start game
})

app.post('/start_game', (req, res) => {
    const startGameStatus = startGame(req.body);
    res.status(startGameStatus.status)

    if(startGameStatus.status === 200){
        res.send(startGameStatus.data);
    } else {
        res.send(startGameStatus.message)
    }
    console.log("------------ GAMES LIST ------------\n")
    console.log(games)
    console.log("\n------------ END GAMES LIST ------------")
})

app.post('/:gameId/:deckId/draw', (req, res) => {
    const gameId = req.params.gameId;
    const deckId = req.params.deckId;
    const drawnCard = drawCard(gameId, deckId);
    res.status(drawnCard.status).send(drawnCard.message);
})

app.listen(PORT, (error) => {
    if(!error){
        console.log("Server running on port: " + PORT)
    } else { console.log("Server cannot start on port: " + PORT, error)}
});


// app.get('/', (req, res) => {
//     res.send("Success!");
// })

// app.get('/test', (req, res) => {
//     res.status(200);
//     res.send("test Success!");
// })

// app.get('/htmlTest', (req, res) => {
//     res.set('Content-Type', 'text/html');
//     res.status(200).send("<h1>HTML Test Success!</h1>")
// })