import 'phaser';
import tile_file from "../assets/Itch release raw tileset 01.png";

class MenuScene extends Phaser.Scene {

    private canvas: any;

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
        this.canvas = this.sys.game.canvas;
    }

    public create (data: object) {

        const img = this.add.image(-10000, -10000, 'tiles');
        const wide = 12, tall = 9;
        const lvl = [];
        for (let i=0; i<tall; i++) {
            let arr:number[] = [];
            for (let j=0; j<wide; j++)
                arr.push([47, 55][Math.floor(Math.random() * 2)]); // random sample from 47, 55
            lvl.push(arr);
        }
        const map = this.make.tilemap({
            data: lvl,
            tileWidth: 8,
            tileHeight: 8
        });
        const tiles = map.addTilesetImage('tiles');
        const layer = map.createLayer(0, tiles, 0, 0);
        const tile_scale = Math.ceil(Math.ceil(this.canvas.width / wide) / 8);
        layer.scale = tile_scale;
        layer.scrollFactorX = 2;
        layer.scrollFactorY = 2;
    }

    public update (time: number, delta: number) {

        //
    }
}

export { MenuScene };
