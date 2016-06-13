class GameState extends Phaser.State {
  preload() {
    this.load.image('background', '../assets/wave.jpg');
    this.load.image('phaser', '../assets/phaser.png');
    this.load.image('asuna1', '../assets/asuna_sao_by_vali233.png');
    this.load.image('asuna2', '../assets/fairy_dance_asuna_by_vali233.png');
  }

	create() {
	  const pic = this.rnd.between(1,2);
    this.state.start('StateB', true, false, pic);
	}
}

export default GameState;
