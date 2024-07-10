// Function to generate a random move for the computer
const getComputerMove = () => {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
};

// Function to determine the winner
const determineWinner = (playerMove, computerMove) => {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerMove === computerMove) {
    return "It's a draw!";
  } else if (winConditions[playerMove] === computerMove) {
    return "You win!";
  } else {
    return "You lose!";
  }
};

// Function to play the game
const playGame = (playerMove) => {
  const computerMove = getComputerMove();

  console.log(`Player chose: ${playerMove}`);
  console.log(`Computer chose: ${computerMove}`);

  const result = determineWinner(playerMove, computerMove);
  console.log(result);
};

// Main logic to handle command line input
const args = process.argv.slice(2); // Get command line arguments excluding first two (node and script path)

if (args.length === 0) {
  console.log(
    "Please provide your move as an argument (rock, paper, or scissors)."
  );
} else {
  const [playerMove] = args; // Destructuring to get the first argument
  if (["rock", "paper", "scissors"].includes(playerMove)) {
    playGame(playerMove);
  } else {
    console.log(
      "Invalid move. Please choose either 'rock', 'paper', or 'scissors'."
    );
  }
}
