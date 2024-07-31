
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

const baseX = 400;
const baseY = 150;
const ballRadius = 20;
// const l = 250;
const g = 9.80665;
// const angularFrequency = Math.sqrt(g / l);
// const maxRadian = Math.PI / 2;

let t = 0;
let fps = 60;

setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 支点
    drawPendulum(baseX, baseY, 10);

    const colors = ["purple", "blue", "green", "red", "pink"]

    for (let i = 3; i >= 0; i--) {
        const l = 60 * (i + 1);
        const maxRadian = Math.PI / 8 * (i + 1);
        const angularFrequency = Math.sqrt(g / l);
        const radian = maxRadian * Math.cos(angularFrequency * t);
        // const radian = maxRadian * Math.cos(
        //     angularFrequency * t * (1 - maxRadian * maxRadian / 16)
        // );

        const x = baseX + l * Math.sin(radian);
        const y = baseY + l * Math.cos(radian);
        drawPendulum(x, y, ballRadius, colors[i]);
    }

    for (let i = 4; i >= 0; i--) {
        const l = 60 * 4;
        const maxRadian = Math.PI / 8 * (i + 1);
        const angularFrequency = Math.sqrt(g / l);
        const radian = maxRadian * Math.cos(angularFrequency * t);
        // const radian = maxRadian * Math.cos(
        //     angularFrequency * t * (1 - maxRadian * maxRadian / 16)
        // );

        const x = baseX + l * Math.sin(radian);
        const y = baseY + l * Math.cos(radian);
        drawPendulum(x, y, ballRadius, colors[i]);
    }

    // {
    //     // 角度
    //     const radian = maxRadian * Math.cos(angularFrequency * t);
    //     // const radian = maxRadian * Math.cos(
    //     //     angularFrequency * t * (1 - maxRadian * maxRadian / 16)
    //     // );

    //     // 振り子
    //     const x = baseX + l * Math.sin(radian);
    //     const y = baseY + l * Math.cos(radian);
    //     drawPendulum(x, y, ballRadius, "red");
    // }

    // {
    //     // 角度
    //     const maxRadian = Math.PI / 8;
    //     const radian = maxRadian * Math.cos(angularFrequency * t);

    //     // 振り子
    //     const x = baseX + l * 0.25 * Math.sin(radian);
    //     const y = baseY + l * 0.25 * Math.cos(radian);
    //     drawPendulum(x, y, ballRadius, "purple");
    // }

    // {
    //     // 角度
    //     const maxRadian = Math.PI / 4;
    //     const radian = maxRadian * Math.cos(angularFrequency * t);

    //     // 振り子
    //     const x = baseX + l * 0.5 * Math.sin(radian);
    //     const y = baseY + l * 0.5 * Math.cos(radian);
    //     drawPendulum(x, y, ballRadius, "blue");
    // }

    // {
    //     // 角度
    //     const maxRadian = Math.PI / 8 * 3;
    //     const radian = maxRadian * Math.cos(angularFrequency * t);

    //     // 振り子
    //     const x = baseX + l * 0.75 * Math.sin(radian);
    //     const y = baseY + l * 0.75 * Math.cos(radian);
    //     drawPendulum(x, y, ballRadius, "green");
    // }

    // {
    //     // 角度
    //     const maxRadian = Math.PI / 8 * 5;
    //     const radian = maxRadian * Math.cos(angularFrequency * t);

    //     // 振り子
    //     const x = baseX + l * 1.25 * Math.sin(radian);
    //     const y = baseY + l * 1.25 * Math.cos(radian);
    //     drawPendulum(x, y, ballRadius, "pink");
    // }

    t += 1 / fps * 10;
}, 1000 / fps);

function drawPendulum(x, y, r, color = "black") {
    context.beginPath();
    context.moveTo(baseX, baseY);
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}
