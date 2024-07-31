
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const baseX = 300;
const baseY = 50;
const ballRadius = 20;
const l = 250;
const g = 9.80665;
const angularFrequency = Math.sqrt(g / l);
const maxRadian = Math.PI / 2;

let t = 0;
let fps = 60;

setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 支点
    drawCircle(baseX, baseY, 10);

    // 角度
    // const radian = maxRadian * Math.cos(angularFrequency * t);
    const radian = maxRadian * Math.cos(
        angularFrequency * t * (1 - maxRadian * maxRadian / 16)
    );

    // 振り子
    const x = baseX + l * Math.sin(radian);
    const y = baseY + l * Math.cos(radian);
    drawCircle(x, y, ballRadius, "red");

    t += 1 / fps * 10;
}, 1000 / fps);

function drawCircle(x, y, r, color = "black") {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}
