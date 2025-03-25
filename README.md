# Assembly: Endgame

## Description
Assembly: Endgame is a word-guessing game built with React. Players must guess a randomly selected word within 8 attempts to prevent Assembly from taking over the programming world. Incorrect guesses eliminate programming languages one by one until the game is lost.

## Features
- **Interactive Word Guessing**: Users can guess letters to uncover the hidden word.
- **Keyboard Input**: An on-screen keyboard allows letter selection.
- **Game Over Conditions**: Lose when all attempts are used, win by correctly guessing the word.
- **Dynamic Visual Feedback**:
  - Correct guesses highlight letters.
  - Incorrect guesses eliminate languages.
  - Confetti animation on win.
- **Farewell Messages**: Custom messages appear when programming languages are eliminated.
- **New Game Option**: Restart the game anytime with a new word.

## Technologies Used
- **React 19**
- **Vite** (for fast development)
- **clsx** (for conditional styling)
- **react-confetti** (for win animations)
- **ESLint** (for code linting and best practices)

## Installation & Setup
To run the project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/assembly-endgame.git
   ```
2. Navigate into the project directory:
   ```sh
   cd assembly-endgame
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
assembly-endgame/
├── src/
│   ├── components/  # UI Components (if applicable)
│   ├── languages.js  # Programming languages data
│   ├── utils.js  # Helper functions
│   ├── App.jsx  # Main game logic
│   ├── index.jsx  # Entry point
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## Usage
- Click letters to make guesses.
- Track incorrect attempts with eliminated programming languages.
- Win by guessing all letters correctly.
- Lose when 8 incorrect guesses are made.
- Click "New Game" to start over.

## Accessibility
- Uses `aria-live` for status updates.
- Keyboard navigation is supported.
- Visually hidden messages assist screen readers.


## License
This project is open-source under the [MIT License](LICENSE).

## Author
Created by **Anuj Maurya**.

## Contributions
Contributions are welcome! Feel free to fork the repo and submit a pull request.


