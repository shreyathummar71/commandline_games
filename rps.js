// Function to generate a random move for the computer
const getComputerMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

// Function to get the player's move from command line arguments
const getPlayerMove = () => {
  const myMove = process.argv[2];
  if (!["rock", "paper", "scissors"].includes(myMove)) {
    console.log("Invalid! Please choose rock, paper, or scissors.");
  }
  return myMove;
};

// Function to determine the winner
const identifyWinner = (myMove, computerMove) => {
  if (myMove === computerMove) {
    return "It's a draw!";
  }
  if (
    (myMove === "rock" && computerMove === "scissors") ||
    (myMove === "scissors" && computerMove === "paper") ||
    (myMove === "paper" && computerMove === "rock")
  ) {
    return "You win this game good job!";
  } else {
    return "You lose this game try again!";
  }
};

// Main function to run the game
const playGame = () => {
  const myMove = getPlayerMove();
  const computerMove = getComputerMove();
  const result = identifyWinner(myMove, computerMove);

  console.log(`Player move: ${myMove}`);
  console.log(`Computer move: ${computerMove}`);
  console.log(result);
};
playGame();
