var Game = require('../src/game.js')

describe('game', function() {

  var player = jasmine.createSpy('player');
  var computer = jasmine.createSpy('computer');
  var game = new Game(player, computer);

  describe('when the game starts...', function() {

	  it('should initialize with one player', function() {
	    expect(game.player).toEqual(player);
	  });

	  it('should initialize with one computer player', function() {
	    expect(game.computer).toEqual(computer);
	  });

	});

	describe('should know when to draw a match', function() {

		it('two rocks equal a draw', function() {
			expect(game.winner('rock', 'rock')).toEqual('draw')
		});

		it('two rocks equal a draw', function() {
			expect(game.winner('paper', 'paper')).toEqual('draw')
		});

		it('two rocks equal a draw', function() {
			expect(game.winner('scissors', 'scissors')).toEqual('draw')
		});

	});

	describe('it should know when a player wins', function() {

		it('between rock and scissors', function() {
			expect(game.winner('rock', 'scissors')).toEqual('player wins!')
		});

		it('between rock and paper', function() {
			expect(game.winner('rock', 'paper')).toEqual('computer wins!')
		});

	});

});