class MovableObject extends DrawableObject{

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    health = 100;
    lastHit = 0;

    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0)
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }, 1000/25);
    }

    isAboveGround(){
        return this.y < 110
    }

    drawFrame(ctx){

        if (this instanceof Character || this instanceof Pufferfish) {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "black";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke(); 
        }

    }
    //chracter.isCOlliding(chicken)
    isColliding(mo){
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height
    }

    playAnimation(images){
        let i = this.currentImage % images.length; // let i = 0 % 6; das % steht für den mathematischen Rest
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {

        this.x -= this.speed;
    }
    
    jump() {
        this.speedY = 30;
    }

    reduceHealth(){
        health - 10;
    }

    hit(){
        this.health -= 5;
        if(this.health < 0 ){
            this.health = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead(){
        return this.health == 0;
    }

    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit 
        timePassed = timePassed / 1000;   
        return timePassed < 1 ;
    }

    } 