var ComputerPlayer = require('../src/computerPlayer.js');

describe('ComputerPlayer', function() {

	var computer = new ComputerPlayer();

	it('should have three choices of rock, paper and scissors', function() {
		expect(computer.choices).toEqual(['rock', 'paper', 'scissors']);
	});

	it('should make a random choice', function() {
		expect(computer.sample()).not.toEqual(null);
	});

});