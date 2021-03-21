import 'phaser';
import bg from '../assets/phaser.png';

class BoilerplateScene extends Phaser.Scene {

    private image!: Phaser.GameObjects.Image;

    constructor () {
        super({
            key: 'boilerplate'
        });
    }

    public preload () {
        this.load.image('phaser', bg);
    }

    public create() {
        this.image = this.add.image(400, 300, 'phaser');
        this.input.on('pointerdown', (e: any) => {
            this.image.x = e.x;
            this.image.y = e.y;
        });
    }
}

export { BoilerplateScene };
