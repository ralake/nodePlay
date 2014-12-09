var Player = require('../src/player');

describe('player', function() {

  var player = new Player;

  it('should have a name', function() {
  	player.addName("Crispy")
  	expect(player.name).toEqual("Crispy");
  });

  it('should intitialize without making a choice', function() {
    expect(player.choice).toEqual(undefined);
  });

  it('should be able to make a choice', function() {
    player.makeChoice('rock');
    expect(player.choice).toEqual('rock');
  });



});