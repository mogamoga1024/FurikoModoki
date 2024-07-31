
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

const baseX = 400;
const baseY = 150;
const ballRadius = 20;
const g = 9.80665;

let t = 0;
const fps = 60;

setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const colors = ["purple", "blue", "green", "red", "orange"];

    for (let i = 4; i >= 0; i--) {
        for (let j = 4; j >=0; j--) {
            const l = 60 * (i + 1);
            const maxRadian = Math.PI / 8 * (j + 1);
            const angularFrequency = Math.sqrt(g / l);
            const radian = maxRadian * Math.cos(angularFrequency * t);

            const x = baseX + l * Math.sin(radian);
            const y = baseY + l * Math.cos(radian);
            drawPendulum(x, y, ballRadius, colors[i], (j + 1) / 5);
        }
    }

    t += 1 / fps * 10;
}, 1000 / fps);

function drawPendulum(x, y, r, color = "black", alpha = 1) {
    context.beginPath();
    context.globalAlpha = 0.2;
    context.moveTo(baseX, baseY);
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.fill();
}
