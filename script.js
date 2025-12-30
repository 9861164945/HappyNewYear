// Small festive console message
console.log("🎆 Happy New Year 2025 🎆");

// Optional: subtle glow pulse
const text = document.querySelector(".text3d");

setInterval(() => {
    text.style.textShadow =
        "1px 1px 0 #00f0ff, 2px 2px 12px rgba(0,240,255,0.9)";
    setTimeout(() => {
        text.style.textShadow =
            "1px 1px 0 #ff004f, 2px 2px 12px rgba(255,0,79,0.9)";
    }, 500);
}, 1000);
