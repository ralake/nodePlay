function Game(player, computer) {
  this.player = player;
  this.computer = computer;
}

Game.prototype.winner = function(playerChoice, computerChoice) {
  var winningCombos = { rock: 'scissors', scissors: 'paper', paper: 'rock'};
  if (playerChoice === computerChoice) {
  	return 'draw';
  }
  else if (winningCombos[playerChoice] === computerChoice) {
  	return 'player wins!';
  }
  else {
  	return 'computer wins!';
  }
};

module.exports = Game; 