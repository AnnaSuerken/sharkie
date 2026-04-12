class World {
  character = new Character();
  level = level1;
  enemies = level1.enemies;
  light = level1.light;
  coins = level1.coins;
  poison = level1.poison;
  backgrounObjects = level1.backgrounObjects;
  statusBar = new StatusBar("health", 20, 5);
  coinBar = new StatusBar("coins", 20, 50);
  poisonBar = new StatusBar("poison", 20, 100);
  throwableObjects = [];

  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollision();
      this.collectCoins();
      this.collectPoison();

      if(this.character.poison > 0){
      this.checkThrowObjects();
      }
      }, 500);
  }

  checkCollision(){
    this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.hit();
          this.statusBar.setPercentage(this.character.health);
        }
      });
  }

  collectCoins(){
    this.level.coins.forEach((coin, index) => {
        if (this.character.isColliding(coin)) {
          this.character.coins += 20;

          if (this.character.coins > 100) {
            this.character.coins = 100;
          }

          this.coinBar.setPercentage(this.character.coins);

          this.level.coins.splice(index, 1);
        }
      })
  }

  collectPoison(){
    this.level.poison.forEach((poison, index) => {
          if (this.character.isColliding(poison)) {
            this.character.poison += 20;

            if (this.character.poison > 100) {
              this.character.poison = 100;
            }

            this.poisonBar.setPercentage(this.character.poison);

            this.level.poison.splice(index, 1);
          }
        })
  }

  checkThrowObjects(){
    if(this.keyboard.D && this.character.poison >= 20){
      this.character.isAttacking = true;
      this.character.attackStarted = false;
      this.character.poison -= 20;
      this.poisonBar.setPercentage(this.character.poison);   
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjToMap(this.level.backgrounObjects);
    this.addToMap(this.character);
    this.addObjToMap(this.level.enemies);
    this.addObjToMap(this.level.light);
    this.addObjToMap(this.level.coins);
    this.addObjToMap(this.level.poison);
    this.addObjToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.poisonBar);

    let self = this; //innerhalb der function wird this. nicht mehr erkannt daher muss man einen workaound bilden
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjToMap(obj) {
    obj.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
