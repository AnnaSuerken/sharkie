class MovableObject{
    x = 120;
    y = 290;
    img;
    height = 250;
    width = 200;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;


    loadImage(path){
        this.img = new Image();
        this.img.src = path;
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

    playAnimation(images){
        let i = this.currentImage % images.length; // let i = 0 % 6; das % steht für den mathematischen Rest
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
       setInterval(()=> {
            this.x -= this.speed;
        }, 1000/60);
    }
    
    } 