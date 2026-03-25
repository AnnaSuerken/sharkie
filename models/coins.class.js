class Coins extends MovableObject {
    height = 50;
    width = 50;

    IMAGES_SWIMMING = [
            'img/4.Marcadores/1.Coins/1.png',
            'img/4.Marcadores/1.Coins/2.png', 
            'img/4.Marcadores/1.Coins/3.png',
            'img/4.Marcadores/1.Coins/4.png',
    ];

        constructor(){
        super().loadImage('img/4.Marcadores/1.Coins/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 200 + Math.random() * 500;
        this.animate();

    }

    animate(){
        setInterval( () => {
        this.playAnimation(this.IMAGES_SWIMMING)
    }, 300)
    }

}