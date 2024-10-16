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
    const deckFound = games.find(d => d.deckInfo.deckId === deckId);

    if(gameFound && deckFound){
        //destructure objects
        const { deckInfo } = deckFound;
        const { deck } = deckInfo;
        const { cards } = deck;

        //initial searching values
        let randomSuitIndex = 0;
        let randomSuit = "";
        let randomValue = 0;
        
        let selectedCardValue = "";
        let selectedCardPlayed = 0;

        try{
            do{
                //pick random suit from list of suits
                randomSuitIndex = Math.floor(Math.random() * deck.suits.length);
                //get name of suit
                randomSuit = deck.suits[randomSuitIndex]; //change back
                //get random value from number of objects in suit array
                randomValue = Math.floor(Math.random() * cards[randomSuit].length);

                selectedCardValue = cards[randomSuit][randomValue].value;
                selectedCardPlayed = cards[randomSuit][randomValue].played;

                //checks for card played more than 6 times, if true, removes from array
                if(selectedCardPlayed > 5){
                    cards[randomSuit].splice(randomValue, 1)
                }
            } while (cards[randomSuit] && cards[randomSuit][randomValue] && 
                        selectedCardPlayed > 5);
        } catch(err){
            console.log(err);
        }

        //update played field
        cards[randomSuit] = cards[randomSuit].map(card => {
            //selects value of card object in suit array
            if(card.value === selectedCardValue){
                //increments played by one, and inserts it back into the array
                selectedCardPlayed = cards[randomSuit][randomValue].played + 1
                return { ...card, played: selectedCardPlayed};
            }
            return card;
        })

        //create card object to include suit
        let drawnCard = {
            suit: randomSuit,
            value: selectedCardValue,
            played: selectedCardPlayed
        }

        // console.log("\n -------------------------- Deck -------------------------- ")
        // console.log(cards)
        // console.log("\n -------------------------- End of Deck -------------------------- ")

        return { status: 200, data: drawnCard };
    } else {
        return { status: 400, data: "Deck/Game not found!" }
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
    res.status(drawnCard.status).send(drawnCard.data)
})

app.listen(PORT, (error) => {
    if(!error){
        console.log("Server running on port: " + PORT)
    } else { console.log("Server cannot start on port: " + PORT, error)}
});