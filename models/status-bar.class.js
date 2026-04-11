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
        'img/4.Marcadores/orange/20_ copia 2.png',
        'img/4.Marcadores/orange/40_  copia 2.png',
        'img/4.Marcadores/orange/60_  copia 2.png',
        'img/4.Marcadores/orange/80_  copia 2.png',
        'img/4.Marcadores/orange/100_ copia 2.png',
    ]

    IMAGES_POISON = [
        'img/4.Marcadores/orange/0_ copia.png',
        'img/4.Marcadores/orange/20_ copia.png',
        'img/4.Marcadores/orange/40_ copia.png',
        'img/4.Marcadores/orange/60_ copia.png',
        'img/4.Marcadores/orange/80_ copia.png',
        'img/4.Marcadores/orange/100_ copia.png',
    ]

    percentage = 100;
    type;

    constructor(type = 'health', x = 20, y = 5){
        super();

        this.type = type;

        // 👉 entscheidet welche Bilder geladen werden
        if(type === 'health'){
            this.images = this.IMAGES_HEALTH;
            this.percentage = 100;
        } else if(type === 'coins'){
            this.images = this.IMAGES_COINS;
            this.percentage = 0;
        } else if(type === 'poison'){
            this.images = this.IMAGES_POISON;
            this.percentage = 0;
        }

        this.loadImages(this.images);

        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 60;

        this.setPercentage(this.percentage);
    }

    setPercentage(percentage){
        this.percentage = Math.max(0, Math.min(100, percentage));

        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex(){
        if (this.percentage >= 100) return 5;
        else if (this.percentage > 80) return 4;
        else if (this.percentage > 60) return 3;
        else if (this.percentage > 40) return 2;
        else if (this.percentage > 20) return 1;
        else return 0;
    }

}