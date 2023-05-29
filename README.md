
# Rock-Paper-Scissors

This is a simple rock-paper-scissors game built with React.

## Features

- Play rock-paper-scissors against the computer.
- Keep track of wins, losses, and ties.
- Score is stored in the session to persist across page reloads.
- Display the player's choice and the computer's choice.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Webdevava/rock-paper-scissors.git
   ```

2. Navigate to the project directory:

   ```bash
   cd myapp
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:3000` to play the game.

## Technologies Used

- React

## Demo

![Live Demo](https://rock-paper-scissor-webdevava.vercel.app/)

## Session Storage

The game uses session storage to store the score. This allows the score to persist even if the page is reloaded. The score is stored under the key "score" in the session storage.

## Displaying Choices

The game displays the player's choice and the computer's choice. After making a selection, the chosen option is displayed on the screen. The computer's choice is randomly generated each time.


