# Planning and Architecture Phase
## Define Requirements

### Functional Requirements: (Trello/Google Docs)
- Users can play blackjack as a guest.
- Users can create an account to track their stats (e.g., win/loss ratio).
- Users can log in and view their game history.
- Users can choose a starting amount to play with.
### Non-functional Requirements: 
- Performance, security, user-friendly interface, scalability, etc.

## Design Application Flow and Features 

- User Flow (Miro/Lucidchart): 
  - Plays as Guest: https://lucid.app/lucidchart/c41af8ca-ac69-4bb3-b1b6-de969f02cc5e/edit?viewport_loc=-2874%2C-890%2C4145%2C2053%2C0_0&invitationId=inv_6ab7069a-0a58-49e9-8864-3285342a2228
  - Plays Logged In: https://lucid.app/lucidchart/d9912c22-b510-4aa0-9aa4-ec00f572aee5/edit?viewport_loc=-2227%2C92%2C3072%2C1521%2C0_0&invitationId=inv_8da06c5a-e856-4782-b508-e53a9157dc47
- Game Mechanics (Markdown): [Documentation](./game-mechanics.md)


## System Architecture
### Front-End Components (Figma): 
- [Mockup Designs](https://www.figma.com/design/pPVVgK9VNgP4EjkGfNQqZG/Blackjack-Project?node-id=0-1&node-type=canvas&t=hbNhmgK7fCboWdkF-0)

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
- MariaDB.

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