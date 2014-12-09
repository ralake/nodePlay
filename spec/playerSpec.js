var Player = require('../src/player');

describe('player', function() {

  var player = new Player;

  it('should have a name', function() {
  	player.addName("Crispy")
  	expect(player.name).toEqual("Crispy");
  });

});