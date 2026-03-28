class StatusBar extends DrawableObject{

    IMAGES_HEALTH = [
        'img/4.Marcadores/orange/0_  copia.png',
        'img/4.Marcadores/orange/20_  copia.png',
        'img/4.Marcadores/orange/40_  copia.png',
        'img/4.Marcadores/orange/60_  copia.png',
        'img/4.Marcadores/orange/80_  copia.png',
        'img/4.Marcadores/orange/100_  copia.png',

    ]

    IMAGES_COINS = [
        'img/4.Marcadores/orange/0_  copia 2.png',
        'img/4.Marcadores/orange/20_  copia 2.png',
        'img/4.Marcadores/orange/40_  copia 2.png',
        'img/4.Marcadores/orange/60_  copia 2.png',
        'img/4.Marcadores/orange/80_  copia 2.png',
        'img/4.Marcadores/orange/100_  copia 2.png',
    ]

    IMAGES_POISON = [
        'img/4.Marcadores/orange/0_copia2.png',
        'img/4.Marcadores/orange/20_copia2.png',
        'img/4.Marcadores/orange/40_copia2.png',
        'img/4.Marcadores/orange/60_copia2.png',
        'img/4.Marcadores/orange/80_copia2.png',
        'img/4.Marcadores/orange/100_copia2.png',
    ]

    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 20;
        this.y = 5;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }

    resolveImageIndex(){
            if (this.percentage == 100) {
                return 5; 
            } else if (this.percentage > 80){
                return 4;
            } else if (this.percentage > 60) {
                return 3;
            } else if (this.percentage < 40) {
                return 2;
            } else if (this.percentage < 20) {
                return 1;
            } else {
                return 0
            }
        }   
    }
