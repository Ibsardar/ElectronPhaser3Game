import 'phaser';
import tile_file from "../assets/Itch release raw tileset 01.png";

import { BasicButton } from "../ui/Button";

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

        var texture = this.textures.createCanvas('gradient', 16, 256);
        var context = texture.getContext();
        var grd = context.createLinearGradient(0, 0, 0, 256);    // ERROR LINE
        grd.addColorStop(0, '#8ED6FF');
        grd.addColorStop(1, '#004CB3');
        context.fillStyle = grd;
        context.fillRect(0, 0, 16, 256);
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

        var button = new BasicButton({
            'scene': this,
            'key':'gradient',
            'up': 0,
            'over':1,
            'down':2,
            'x': 240,
            'y': 480
        });
        button.on('pointerdown',this.onPressed,this);
    }

    onPressed () {

        console.log("I am pressed!");
    }

    public update (time: number, delta: number) {

        //
    }
}

export { MenuScene };
