class Jellyfish extends MovableObject {
    health = 20;
  
    IMAGES_SWIMMING = [
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png', 
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    
    constructor(){
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 550 + Math.random() * 500;
        this.height = 100;
        this.width = 80;
        this.speed = 0.15 + Math.random() *0.25;
        this.animate();

    }

    animate(){
        setInterval(()=> {
            this.moveLeft();
        }, 1000/60);

        setInterval( () => {
        this.playAnimation(this.IMAGES_SWIMMING)
    }, 200)
    }

}