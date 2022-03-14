const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let hue = 0;
let frame = 0;
let score = 0;


const background = new Image();
background.src='BG.png';
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background,0,0,canvas.width,canvas.height)
    handlleObstacle();
    bird.update();
    bird.draw();
    ctx.font = "90px Georgia";
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollision();
    if (handleCollision()) return;
    requestAnimationFrame(animate);
    hue++;
    frame++;
}
window.addEventListener("keydown", function (e) {
    if (e.code === "Space") spacePressed = true;
});

window.addEventListener("keyup", function (e) {
    if (e.code === "Space") spacePressed = false;
});

const bang = new Image();
bang.src = "bang.png";
function handleCollision() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if ((bird.x < obstaclesArray[i].x + obstaclesArray[i].width) &&
            (bird.x + bird.width > obstaclesArray[i].x)&&
            ((bird.y < obstaclesArray[i].top ) ||
                (bird.y+bird.height > canvas.height - obstaclesArray[i].bottom)))
         {
            ctx.drawImage(bang, bird.x, bird.y, 50, 50);
            ctx.font = "40px sans-serif";
            ctx.fillStyle = "Red";
            ctx.fillText(
                "Game Over, Your Score is " + score,
                50,
                canvas.height / 2
            );
            return true;
        }
    }
}
animate();
