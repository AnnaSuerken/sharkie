class Poison extends MovableObject {
    height = 90;
    width = 60;
    y = 330;

    IMAGES_SWIMMING = [
            'img/4.Marcadores/Posión/Animada/1.png',
            'img/4.Marcadores/Posión/Animada/2.png', 
            'img/4.Marcadores/Posión/Animada/3.png',
            'img/4.Marcadores/Posión/Animada/4.png',
            'img/4.Marcadores/Posión/Animada/5.png',
            'img/4.Marcadores/Posión/Animada/6.png',
            'img/4.Marcadores/Posión/Animada/7.png',
            'img/4.Marcadores/Posión/Animada/8.png',
    ];

        constructor(){
        super().loadImage('img/4.Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 200 + Math.random() * 500;
        this.animate();

    }

    animate(){
        setInterval( () => {
        this.playAnimation(this.IMAGES_SWIMMING)
    }, 200)
    }

}