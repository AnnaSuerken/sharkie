class Character extends MovableObject {
    width = 400;
    height = 350;
    y = 80;
    speed = 10;
    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png', 
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ]

    world;

    constructor(){
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();

    }

    animate(){
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
            this.x += this.speed;
            this.otherDirection = false;
            }

            if(this.world.keyboard.LEFT && this.x > 0){
            this.x -= this.speed;
            this.otherDirection = true;
            }
            this.world.camera_x = -this.x;

        }, 1000/60);

        setInterval( () => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
                this.playAnimation(this.IMAGES_SWIMMING)
        }
        }, 50)
    }

    jump(){
        setInterval(() => {
            if(this.world.keyboard.UP){
            this.y -= this.speed;
            }

        }, 1000/60);
    }
}