function ComputerPlayer() {
  this.choices = ['rock', 'paper', 'scissors'];
}

ComputerPlayer.prototype.sample = function() {
  return this.choices[Math.floor(Math.random()*this.choices.length)];
};

module.exports = ComputerPlayer;