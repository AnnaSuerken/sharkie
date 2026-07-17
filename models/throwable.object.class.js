class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.throw();
    }
        
    throw(){
        setTimeout(() => {
            this.speedY = 20;
            this.applyGravity();
            
            setInterval(()=> {
                this.x += 6; 
            }, 20)
            }, 200)
    }
    
}