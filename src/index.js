import GameState from 'states/GameState';
import StateB from 'states/StateB';

class Game extends Phaser.Game {
	constructor() {
		super(800, 800, Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
    this.state.add('StateB', StateB, false);
		this.state.start('GameState');
	}
}

new Game();
