class DrawableObject {
    img;
    x = 120;
    y = 290;
    height = 250;
    width = 200;
    imageCache = [];
    currentImage = 0;

    
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    } 

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png',...]
     */
    loadImages(arr){
        arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
        })
    }

    drawFrame(ctx){

        if (this instanceof Character || this instanceof Pufferfish) {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "black";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke(); 
        }

    }
}