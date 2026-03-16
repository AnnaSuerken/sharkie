class Light extends MovableObject {
    y = 5;
    height = 250;
    width = 300;


    constructor(){
        super().loadImage('img/3.Background/Layers/1.Light/1.png');
        this.x = 200 + Math.random() * 500;
    }

}