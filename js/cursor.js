const cursorStyle = document.createElement('style');
cursorStyle.innerHTML = `
.mouse-sparkle {
    position: absolute;
    width: 15px;
    height: 15px;
    pointer-events: none;
    z-index: 99999;
    animation: sparkleFall 0.8s ease-out forwards;
}

@keyframes sparkleFall {
    0% { transform: scale(1) translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: scale(0.1) translateY(40px) rotate(180deg); opacity: 0; }
}

@keyframes bgHeartFloat {
    0% { transform: translateY(0) scale(1) rotate(-15deg); }
    100% { transform: translateY(-110vh) scale(1.5) rotate(15deg); opacity: 0; }
}
`;
document.head.appendChild(cursorStyle);

// Star/sparkle SVG paths
const shapes = [
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>', // star
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' // heart
];

const colors = ['#ffb3c6', '#ffcbf2', '#f3c4fb', '#c8e7ff', '#b9fbc0', '#fdfd96'];

let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', function(e) {
    // Only spawn a sparkle if mouse moved a bit to avoid too many
    if (Math.abs(e.pageX - lastX) < 10 && Math.abs(e.pageY - lastY) < 10) return;
    
    lastX = e.pageX;
    lastY = e.pageY;

    if (Math.random() < 0.3) return; // random skip for natural look

    const sparkle = document.createElement('div');
    sparkle.className = 'mouse-sparkle';
    sparkle.style.left = (e.pageX - 7.5) + 'px';
    sparkle.style.top = (e.pageY - 7.5) + 'px';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    sparkle.innerHTML = shape;
    sparkle.style.color = color;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 800);
});

function createBackgroundHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = shapes[1]; // Use the heart SVG
    
    const size = Math.random() * 20 + 15; // 15px to 35px
    heart.style.position = 'fixed';
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    
    const bgColors = ['#ff8fa3', '#ffb3c6', '#ffccd5', '#ff99a8'];
    heart.style.color = bgColors[Math.floor(Math.random() * bgColors.length)];
    heart.style.opacity = Math.random() * 0.4 + 0.1; 
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '0'; 
    
    const duration = Math.random() * 6 + 6; 
    heart.style.animation = `bgHeartFloat ${duration}s linear forwards`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createBackgroundHeart, 500);
