function rockPaperScissors(player1, player2) {
  
  const winningOptions = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    spock: ['scissors', 'rock'], 
    lizard: ['spock', 'paper']
  };
  
  if (player1 === player2) {
    return 'draw';
  }
  
  if (winningOptions[player1].includes(player2)) {
    return 'player1';
  } else {
    return 'player2';
  }

}










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}