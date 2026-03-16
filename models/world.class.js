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
        new BackgroundObject ('img/3.Background/Layers/5.Water/L1.png', 0),
        new BackgroundObject ('img/3.Background/Layers/4.Fondo2/L1.png', 0),
        new BackgroundObject ('img/3.Background/Layers/3.Fondo1/L1.png', 0),
        new BackgroundObject('img/3.Background/Layers/2.Floor/L1.png', 0),
    ]
    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjToMap(this.backgrounObjects);
        this.addToMap(this.character);
        this.addObjToMap(this.enemies);
        this.addObjToMap(this.light);
 

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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }
}