# Planning and Architecture Phase
## Define Requirements

### Functional Requirements: (Trello/Google Docs)
- Users can play blackjack as a guest.
- Users can create an account to track their stats (e.g., win/loss ratio).
- Users can log in and view their game history.
### Non-functional Requirements: 
- Performance, security, user-friendly interface, scalability, etc.

## Design Application Flow and Features 

- User Flow (Miro/Lucidchart): 
  - Sketch out how a user moves through the application—registration, logging in, playing as a guest, viewing stats, etc.
- Game Mechanics (Markdown): 
  - Define how the blackjack game functions—rules, dealing cards, handling user input, and calculating results.


## System Architecture
### Front-End Components (Figma)
- **Login/Register Form**: To manage user accounts.
- **Game Board**: Where the blackjack game takes place.
- **User Dashboard**: To display stats.

### Back-End APIs (Swagger)
- **User Management**: Register, login, logout.
- **Game Management**: Play a game, record stats, save progress.
- **Deck of Cards API**: Generate and shuffle cards for gameplay.

### Database Design (Lucidchart)
- **Users Table**: To store user info (e.g., user_id, username, password_hash).
- **Game Stats Table**: To track user stats (e.g., user_id, wins, losses, games_played).
- **Game History Table**: To store details about each game played (e.g., game_id, user_id, outcome).

## Data Flow and State Management (Miro/Markdown)

- Front-End State Management: 
  - Plan how you'll manage the state of the application. 
  - For example, consider using React Context or Redux for user authentication and game state.
- API Interaction: 
  - Determine how data will flow between the front end and back end. Sketch out the interactions for logging in, fetching user stats, and game actions.

## Security Considerations 

- Authentication (JWT.io): 
  - Decide on using JWT (JSON Web Tokens) for user sessions.
- Password Security (bcrypt): 
  - Use bcrypt to hash passwords before storing them.
- Input Validation (Swagger): 
  - Validate all user inputs both on the client side and server side.

## Tech Stack and Tools (Markdown)

**Front-End**: 
- React, CSS (consider using TailwindCSS or Material-UI for components).

**Back-End**: 
- Express.js, Node.js.

**Database**: 
- MySQL.

**Other Tools**: 
- Docker (for containerization), Postman (for API testing), GitHub (for version control).

## Wireframes and UI/UX Design (Figma)

**Wireframes for the core pages**:
- Landing Page: Show options to log in, register, or play as a guest.
- Game Page: Layout of the blackjack game.
- User Dashboard: Display statistics and past game results.

## Set Milestones (Trello or Notion)

- [ ] Create milestones and tasks for each feature. Example milestones:
- [ ] Set up project structure (front end, back end, database).
- [ ] Implement user authentication.
- [ ] Build the blackjack game logic.
- [ ] Create the deck of cards API.
- [ ] Connect front end to back end.