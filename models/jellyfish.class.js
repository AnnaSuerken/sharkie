class Jellyfish extends MovableObject {
  
    IMAGES_SWIMMING = [
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png', 
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    
    constructor(){
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 200 + Math.random() * 500;
        this.height = 100;
        this.width = 80;

        this.animate();

    }

    animate(){
        this.moveLeft();

        setInterval( () => {
        this.playAnimation(this.IMAGES_SWIMMING)
    }, 200)
    }

}