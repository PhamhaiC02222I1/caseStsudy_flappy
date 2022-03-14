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
        this.weight = 1.2;
    }
    update() {
        // let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - this.height*3  ) {
            this.y = canvas.height - this.height*3  ;
            this.vy =0;
        } else {
            this.y += this.weight;
            this.vy *= 0.7;
            this.y += this.vy;
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
        fly.play();
    }
}
let bird = new Bird();
let fly =new Audio();
fly.src ='sound/fly.mp3'

