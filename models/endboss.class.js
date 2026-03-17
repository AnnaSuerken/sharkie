class Endboss extends MovableObject {
    
    constructor(){
        super().loadImage('img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.loadImages([
            'img/2.Enemy/3 Final Enemy/2.floating/1.png',
            'img/2.Enemy/3 Final Enemy/2.floating/2.png', 
            'img/2.Enemy/3 Final Enemy/2.floating/3.png',
            'img/2.Enemy/3 Final Enemy/2.floating/4.png',
            'img/2.Enemy/3 Final Enemy/2.floating/5.png',
            'img/2.Enemy/3 Final Enemy/2.floating/6.png',
            'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        ])

        this.x = 200 + Math.random() * 500;
        this.height = 380;
        this.width = 390;
        this.y = 50;
    }

}