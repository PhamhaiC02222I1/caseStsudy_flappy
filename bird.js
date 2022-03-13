const dragon =new Image();
dragon.src ='frame.png'



class Bird {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.originalWidth=950;
        this.originalHeight=680
        this.width = 20;
        this.height = 20;
        this.weight = 0.4;
    }
    update() {
        let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - this.height * 3 + curve) {
            this.y = canvas.height - this.height * 3 + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.7;
            this.y += this.vy;
        }
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        }

        if (spacePressed &&this.y>this.height*3) this.flap();
    }
    draw() {
        ctx.fillStyle = "#30f";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(dragon,0,0,this.originalWidth,this.originalHeight,this.x,this.y,this.width*2,this.height*2)
    }
    flap() {
        this.vy -= 1.8;
    }
}

let bird = new Bird();

