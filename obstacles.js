const obstaclesArray = [];
class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height) / 3+44 ;
        this.bottom = (Math.random() * canvas.height) / 3 +44;
        this.x =500;
        this.width = 60;
        this.color = "hsla(" + hue + ",100%,50%,1)";
        this.counted = false;
    }
    draw() {
        ctx.fillStyle = this.color;
        //top pipe drawing
        ctx.fillRect(this.x, 0, this.width, this.top);
        //bottom pipe drawing
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    update() {
        this.x -= 2;
        if (!this.counted && this.x+this.width < bird.x+bird.width) {
            sco.play()
            score++;

            this.counted = true;

        }
        if(score>10){
            this.x-=3

        }
        this.draw();
    }
}
const sco =new Audio();
sco.src='sound/score.mp3';
function handlleObstacle() {
    if (frame % 80 === 0) {
        obstaclesArray.unshift(new Obstacle());
    }


    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    // if (obstaclesArray.length > 20) {
    //     obstaclesArray.pop(obstaclesArray[0]);
    // }
}
