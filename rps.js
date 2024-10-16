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


}










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}