function Player() {

}

Player.prototype.addName = function(name) {
  this.name = name;
};

Player.prototype.makeChoice = function(choice) {
  this.choice = choice;
};

module.exports = Player;