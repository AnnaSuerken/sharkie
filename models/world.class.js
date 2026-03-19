class World{
    character = new Character();
    enemies = [
        new Jellyfish(),
        new Jellyfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Endboss(),
    ];
    light = [
        new Light(),
    ]

    backgrounObjects = [
        new BackgroundObject ('img/3.Background/Layers/5.Water/L2.png', -720),
        new BackgroundObject ('img/3.Background/Layers/3.Fondo1/L2.png', -720),
        new BackgroundObject ('img/3.Background/Layers/4.Fondo2/L2.png', -720),
        new BackgroundObject('img/3.Background/Layers/2.Floor/L2.png', -720),
        new BackgroundObject ('img/3.Background/Layers/5.Water/L1.png', 0),
        new BackgroundObject ('img/3.Background/Layers/3.Fondo1/L1.png', 0),
        new BackgroundObject ('img/3.Background/Layers/4.Fondo2/L1.png', 0),
        new BackgroundObject('img/3.Background/Layers/2.Floor/L1.png', 0),
        new BackgroundObject ('img/3.Background/Layers/5.Water/L2.png', 720),
        new BackgroundObject ('img/3.Background/Layers/3.Fondo1/L2.png', 720),
        new BackgroundObject ('img/3.Background/Layers/4.Fondo2/L2.png', 720),
        new BackgroundObject('img/3.Background/Layers/2.Floor/L2.png', 720),

        new BackgroundObject ('img/3.Background/Layers/5.Water/L1.png', 1440),
        new BackgroundObject ('img/3.Background/Layers/3.Fondo1/L1.png', 1440),
        new BackgroundObject ('img/3.Background/Layers/4.Fondo2/L1.png', 1440),
        new BackgroundObject('img/3.Background/Layers/2.Floor/L1.png', 1440),
        new BackgroundObject ('img/3.Background/Layers/5.Water/L2.png', 720*3),
        new BackgroundObject ('img/3.Background/Layers/3.Fondo1/L2.png', 720*3),
        new BackgroundObject ('img/3.Background/Layers/4.Fondo2/L2.png', 720*3),
        new BackgroundObject('img/3.Background/Layers/2.Floor/L2.png', 720*3),
    ]

    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
        
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjToMap(this.backgrounObjects);
        this.addToMap(this.character);
        this.addObjToMap(this.enemies);
        this.addObjToMap(this.light);
        this.ctx.translate(-this.camera_x, 0);

        let self = this; //innerhalb der function wird this. nicht mehr erkannt daher muss man einen workaound bilden
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjToMap(obj){
        obj.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo){
        if (mo.otherDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if(mo.otherDirection){
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}