class Pufferfish extends MovableObject {

    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png', 
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];
  
    
    constructor(){
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
         this.loadImages(this.IMAGES_SWIMMING);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.height = 80;
        this.width = 60;
        this.animate();
    }

    animate(){
        this.moveLeft();

    setInterval( () => {
        let i = this.currentImage % this.IMAGES_SWIMMING.length; // let i = 0 % 6; das % steht für den mathematischen Rest
        let path = this.IMAGES_SWIMMING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }, 200)
    }
}