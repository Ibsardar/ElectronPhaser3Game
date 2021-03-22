import { MenuScene } from './scenes/menu';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MenuScene]
};

const game = new Phaser.Game(config);
