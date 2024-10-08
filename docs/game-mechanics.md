# Game Mechanics
    Player against the Dealer, whoever gets the closest to 21 without going over wins.

  At start of game, player will get to choose how much money to start with (e.g. $500).
- Player will be able to bet in these increments: $1, $5, $10, $25, $100, $500, $1000.
- After player places bet, cards will be dealt out:
  - Player: Both cards face up.
  - Dealer: One card face up, one card face down.
- After Player and Dealer turns, bets will be paid/taken depending on win/loss.
- The process repeats until player runs out of money or quits game.

## Card Values
Cards are valued as they are numbered, with these exceptions:
- Face Cards (**J**, **Q**, **K**): These all share the same properties as a 10.
  - 10 = J = Q = K
- Aces (**A**): Valued as 1 or 11 depending on current hand. 
  - If hand total is over 21 if **A** was 11, then it becomes a 1 instead.

## Player Turn
    Player will have the option to either hit, stand, double down, or split.
  - **Hit**: Player will receive another card.
  - **Stand**: Player takes no more cards and ends turn.
  - **Double Down**: Player doubles current bet placed, receives one card, and ends turn.
    - Player **cannot** double down if they do not have enough money.
  - **Split**: Player matches bet on table to create two separate hands.
    - Dealer deals card to first card then second card.
    - Player has decision to play each hand independent from each other.
    - If newly dealt card is another pair, player may split again (up to 3 times).
    - Player may double down on individual split hands.

## Dealer Turn
    After player has finished with turn, the dealer reveals card and begins their play.
  The dealer is bound to a set of rules they must follow every hand.
  - The dealer cannot **double down** or **split**.
  - The dealer must hit until one of these conditions are met:
    - The dealer reaches a **soft 17**.
      - **Soft 17** is when the dealer's total is 17 when one of the cards is an **A**
    - The dealer reaches a total of greater than 17, but less than 21.
    - The dealer reaches a total of 21.
    - The dealer **busts** (total over 21).

## Winning and Losing Conditions

### Winning (Player)
- The player started with 21 (Blackjack).
- The player's total is greater than the dealer's total without going over 21.

### Losing (Player)
- The player's total goes over 21 which results in a **bust**.
- The player's total is lower than the dealer's total without going over 21.

### Other
- The player's total matches the dealer's total, which results in a **push** (bets are returned to player).

