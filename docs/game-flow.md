# Game Flow
    Client - Server - Database 

## User Plays as Guest
1. Player goes to blackjack landing page
2. Player presses play as guest
3. Player chooses starting amount of chips 
4. **Client** stores chip count locally
5. **Client** sends request to **Server** API to start new game session
6. **Server** generates new deck and stores it locally with unique *deckID*
7. **Server** returns *deckID* to **Client**
8. **Client** receives *deckID* stores it locally and begins new game with local chip count
9. **Client** makes request to **Server** API to draw card from *deckID* for Dealer and Player
10. Player has option to Hit, Stand, Double Down, Split
    1.  Hit: **Client** makes request to **Server** API to draw card
    2.  Stand: Begin dealer turn
    3.  Double Down: **Client** makes request to **Server** API to draw card (Same as Hit)
    4.  Split: **Client** makes request to **Server** API to draw one card for each hand
11. After each action, **Client** checks for blackjack or bust
12. Once Player has finished turn, Dealer goes next 
13. **Client** makes request to **Server** to draw card for dealer
14. After each action, **Client** checks for blackjack or bust
15. **Client** determines winner of game, giving/taking chips based on win/lose
16. Steps 9 - 15 repeat until user quits or they run out of money

## User Plays Logged In
1. Player goes to blackjack landing page
2. Player presses Log In/Register
   1. Login:
      1. Player enters username and password
      2. **Client** sends information to be checked by **Server**
      3. **Server** queries **Database** to check for match
         1. *Successful*: User will be able to see stats of W/L ratio
         2. *Unsuccessful*: User met with error and have to try again
   2. Register
      1. Player enters username and password
      2. **Client** sends information to be checked by **Server**
      3. **Server** queries **Database** to check if exists already
      4. **Server** returns successful or unsuccessful registration
         1. *Successful*: User creates new account and proceeds to play
         2. *Unsuccessful*: User met with error that account exists already
3. Player send to chip screen
4. Player chooses starting amount of chips 
5. **Client** stores chip count locally
6. **Client** sends request to **Server** API to start new game session
7. **Server** generates new deck and stores it locally with unique *deckID*
8. **Server** returns *deckID* to **Client**
9. **Client** receives *deckID* stores it locally and begins new game with local chip count
10. **Client** makes request to **Server** API to draw card from *deckID* for Dealer and Player
11. Player has option to Hit, Stand, Double Down, Split
    1.  Hit: **Client** makes request to **Server** API to draw card
    2.  Stand: Begin dealer turn
    3.  Double Down: **Client** makes request to **Server** API to draw card (Same as Hit)
    4.  Split: **Client** makes request to **Server** API to draw one card for each hand
12. After each action, **Client** checks for blackjack or bust
13. Once Player has finished turn, Dealer goes next 
14. **Client** makes request to **Server** to draw card for dealer
15. After each action, **Client** checks for blackjack or bust
16. **Client** determines winner of game, giving/taking chips based on win/lose
17. Steps 9 - 15 repeat until user quits or they run out of money
18. Depending on Win/Loss, **Client** will store W/L ratio locally until user quits
19. After user quits (i.e. closes browser) or chooses to manually save session, **Client** will send W/L ratio and login info to **Server**
20. **Server** processes W/L and stores information in Players login info **Database** 