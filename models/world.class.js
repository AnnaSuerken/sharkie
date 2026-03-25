class World{
    character = new Character();
    level = level1;
    enemies = level1.enemies;
    light = level1.light;
    coins = level1.coins;
    poison = level1.poison;
    backgrounObjects = level1.backgrounObjects;

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

        this.addObjToMap(this.level.backgrounObjects);
        this.addToMap(this.character);
        this.addObjToMap(this.level.enemies);
        this.addObjToMap(this.level.light);
        this.addObjToMap(this.level.coins);
        this.addObjToMap(this.level.poison);
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