console.log("Happy New Year 2026 🎆");

// Title glow animation
const text = document.querySelector(".text3d");
setInterval(() => {
    text.style.textShadow =
        "0 0 5px #fff, 0 0 15px #00f0ff, 0 0 30px #ff004f";
    setTimeout(() => {
        text.style.textShadow =
            "0 0 10px #fff, 0 0 25px #00f0ff, 0 0 40px #ff004f";
    }, 800);
}, 1500);

// Floating gallery images
document.querySelectorAll(".gallery img").forEach((img, i) => {
    img.style.animation = `float 3s ease-in-out ${i * 0.3}s infinite`;
});

// Fireworks effect
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
let cw, ch;
function resizeCanvas() {
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
    constructor(x, y, color) {
        this.x = x; this.y = y;
        this.radius = Math.random() * 2 + 1;
        this.color = color;
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.alpha = 1;
        this.fade = Math.random() * 0.02 + 0.01;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.fade;
    }
    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

let particles = [];
function createFirework() {
    const x = Math.random() * cw;
    const y = Math.random() * ch / 2;
    const colors = ["#ff004f","#00f0ff","#ffff00","#ff00ff","#00ff00"];
    for(let i=0;i<40;i++){
        particles.push(new Particle(x, y, colors[Math.floor(Math.random()*colors.length)]));
    }
}

function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,cw,ch);
    particles.forEach((p, i)=>{
        p.update();
        p.draw();
        if(p.alpha <=0) particles.splice(i,1);
    });
    requestAnimationFrame(animate);
}
animate();
setInterval(createFirework, 800);
