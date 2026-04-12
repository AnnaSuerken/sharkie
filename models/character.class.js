class Character extends MovableObject {
  width = 400;
  height = 350;
  y = -50;
  speed = 10;
  coins = 0;
  poison = 0;
  health = 100;
  lastMove = new Date().getTime();

  IMAGES_SWIMMING = [
    "img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];

  IMAGES_RESTING = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];

  IMAGES_SHOCK = [
    "img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];

  IMAGES_POISONED = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  IMAGES_DEAD = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  IMAGES_SLEEP = [
    "img/1.Sharkie/2.Long_IDLE/i1.png",
    "img/1.Sharkie/2.Long_IDLE/I2.png",
    "img/1.Sharkie/2.Long_IDLE/I3.png",
    "img/1.Sharkie/2.Long_IDLE/I4.png",
    "img/1.Sharkie/2.Long_IDLE/I5.png",
    "img/1.Sharkie/2.Long_IDLE/I6.png",
    "img/1.Sharkie/2.Long_IDLE/I7.png",
    "img/1.Sharkie/2.Long_IDLE/I8.png",
    "img/1.Sharkie/2.Long_IDLE/I9.png",
    "img/1.Sharkie/2.Long_IDLE/I10.png",
    "img/1.Sharkie/2.Long_IDLE/I11.png",
    "img/1.Sharkie/2.Long_IDLE/I12.png",
    "img/1.Sharkie/2.Long_IDLE/I13.png",
    "img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  IMAGES_POISON_ATTACK = [
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png",
  ];

  world;

  constructor() {
    super().loadImage("img/1.Sharkie/3.Swim/1.png");
    this.loadImages(this.IMAGES_SWIMMING);
    this.loadImages(this.IMAGES_RESTING);
    this.loadImages(this.IMAGES_SHOCK);
    this.loadImages(this.IMAGES_POISONED);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_SLEEP);
    this.loadImages(this.IMAGES_POISON_ATTACK);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.lastMove = new Date().getTime();
        this.sleepStarted = false;
        this.sleepFinished = false;
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
        this.lastMove = new Date().getTime();
        this.sleepStarted = false;
        this.sleepFinished = false;
      }
      this.world.camera_x = -this.x;

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        this.lastMove = new Date().getTime();
        this.sleepStarted = false;
        this.sleepFinished = false;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        if (!this.deadStarted) {
          this.currentImage = 0;
          this.deadStarted = true;
        }
        this.playAnimationOnce(this.IMAGES_DEAD);
        return;
      }
      if (this.isHurt()) {
        this.playAnimation(this.IMAGES_SHOCK);
        return;
      }
      if(this.checkIfAttack()){
        return;
      }

      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.IMAGES_SWIMMING);
        return;
      }
      if (this.checkIfAsleep()) {
        return;
      }
      this.playAnimation(this.IMAGES_RESTING);
    }, 200);
  }

  checkIfAsleep() {
    let timePassed = new Date().getTime() - this.lastMove;
    if (timePassed > 15000) {
      if (!this.sleepStarted) {
        this.currentImage = 0;
        this.sleepStarted = true;
        this.sleepFinished = false;
      }
      if (!this.sleepFinished) {
        this.playAnimationOnce(this.IMAGES_SLEEP);
        if (this.currentImage >= this.IMAGES_SLEEP.length) {
          this.sleepFinished = true;
          this.currentImage = 0;
        }
        return true;
      }
      this.playAnimationRange(this.IMAGES_SLEEP, this.IMAGES_SLEEP.length - 4);
      return true;
    }
    return false;
  }

  checkIfAttack(){
    if(!this.isAttacking) return false;

  if(!this.attackStarted){
    this.currentImage = 0;
    this.attackStarted = true;
    this.hasShot = false;
  }

  this.playAnimationOnce(this.IMAGES_POISON_ATTACK);

  if(this.currentImage === 4 && !this.hasShot){

    let bubble = new ThrowableObject(
      this.x + 250,
      this.y + 120
    );

    this.world.throwableObjects.push(bubble);

    this.hasShot = true;
  }

  if(this.currentImage >= this.IMAGES_POISON_ATTACK.length){
    this.isAttacking = false;
    this.attackStarted = false;
  }

  return true;
  }
}


