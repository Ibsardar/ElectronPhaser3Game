import 'phaser';
import tile_file from "../assets/Itch release raw tileset 01.png";

class MenuScene extends Phaser.Scene {

    constructor () {
        super({
            key: 'menu'
        });

        //
    }

    public init (data: object) {

        //
    }

    public preload () {

        this.load.image("tiles", tile_file);
    }

    public create (data: object) {

        const img = this.add.image(64, 120, 'tiles');
        const lvl = [
            [47, 55, 47, 55],
            [55, 47, 55, 47],
            [47, 55, 47, 55]
        ];
        const map = this.make.tilemap({
            data: lvl,
            tileWidth: 8,
            tileHeight: 8
        });
        const tiles = map.addTilesetImage('tiles');
        const layer = map.createLayer(0, tiles, 0, 0);
    }

    public update (time: number, delta: number) {

        //
    }
}

export { MenuScene };
