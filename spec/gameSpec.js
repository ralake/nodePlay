var Game = require('../src/game.js')

describe('game', function() {

  var player = jasmine.createSpy('player');
  var computer = jasmine.createSpy('computer');
  var game = new Game(player, computer);

  it('should initialize with one player', function() {
    expect(game.player).toEqual(player);
  });

  it('should initialize with one computer player', function() {
    expect(game.computer).toEqual(computer);
  });

});