function rockPaperScissors(player1, player2) {
  
  // Defining object which includes rules of rockPaperScissors
  const rules = {
    // Defining which options lose against rock, paper, scissors, spock, lizard
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    spock: ['scissors', 'rock'], 
    lizard: ['spock', 'paper']
  };
  
  // If string is the same then 'draw' is returned
  if (player1 === player2) {
    return 'draw';
  }
  
  // Shorter way of identifying winning player
  // Ternary operator to compare the arrays 
  return rules[player1].includes(player2) ? 'player1' : 'player2';
}
  
/* 
Orginal code for identifying winning player
  if (rules[player1].includes(player2)) {
    return 'player1';
  } else {
    return 'player2';
  } 
*/ 

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}