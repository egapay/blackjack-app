# Planning and Architecture Phase
## Define Requirements

### Functional Requirements:
- Users can play blackjack as a guest.
- Users can create an account to track their stats (e.g., win/loss ratio).
- Users can log in and view their game history.
- Users can choose a starting amount to play with.
### Non-functional Requirements: 
- Performance, security, user-friendly interface, scalability, etc.

## Design Application Flow and Features 

- User Flow (DrawIO): (Need to update with JWT flow)
  - Written Flow: [Link](./game-flow.md)
  - Plays as Guest: [Link](./blackjackGuestFlow.png)
  - Plays Logged In: [Link](./blackjackLoggedInFlow.png)
- Game Mechanics (Markdown): [Documentation](./game-mechanics.md)


## System Architecture
### Front-End Components (Figma): 
- [Mockup Designs](https://www.figma.com/design/pPVVgK9VNgP4EjkGfNQqZG/Blackjack-Project?node-id=0-1&node-type=canvas&t=hbNhmgK7fCboWdkF-0)

### Back-End APIs (Swagger):
- [Swagger API](https://app.swaggerhub.com/apis/EthanGapay/blackjackAPI/1.0.0#/)

### Database Design (DrawIO):
- [ER Diagram](./ERDiagram.drawio.png)

## Data Flow and State Management (Miro/Markdown)

- Front-End State Management: 
  - Plan how you'll manage the state of the application. 
  - For example, consider using React Context or Redux for user authentication and game state.
- API Interaction: 
  - Determine how data will flow between the front end and back end. Sketch out the interactions for logging in, fetching user stats, and game actions.

## Security Considerations 

- Authentication (JWT.io): [Documentation](https://jwt.io/)
- Password Security (bcrypt): [Documentation](https://www.npmjs.com/package/bcrypt)

## Tech Stack and Tools (Markdown)

**Front-End**: 
- React, CSS (consider using TailwindCSS or Material-UI for components).

**Back-End**: 
- Express.js, Node.js.

**Database**: 
- MariaDB.

**Other Tools**: 
- Docker (for containerization), Postman (for API testing), GitHub (for version control).
