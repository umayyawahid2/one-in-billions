const params = new URLSearchParams(window.location.search);
const sender = params.get("from") || "Someone";
const receiver = params.get("to") || "Beautiful";

document.getElementById("receiver-name").innerText = receiver;
document.getElementById("sender-name").innerText = sender;

// Customize the question slightly
document.getElementById("question").innerHTML = `Will you be my Valentine, <br><span style="color: #ff6b81; font-weight: bold;">${receiver}</span>?`;

let noClickCount = 0;
const messages = [
    "No 💔",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Is that your final answer?",
    "You're breaking my heart 💔",
    "Don't do this with meee 😭",
    "Say yesss🙈💝"
];

function moveNoButton() {
    const btnNo = document.getElementById("btn-no");
    const btnYes = document.getElementById("btn-yes");
    
    // Change text
    noClickCount++;
    if (noClickCount < messages.length) {
        btnNo.innerText = messages[noClickCount];
    } else {
        btnNo.innerText = messages[messages.length - 1];
    }

    // Make Yes button bigger
    const currentScale = 1 + (noClickCount * 0.15);
    btnYes.style.transform = `scale(${currentScale})`;
    
    // Ensure long text can wrap and be measured correctly
    btnNo.style.whiteSpace = 'normal';
    btnNo.style.width = 'auto';
    btnNo.style.maxWidth = 'none';
    btnNo.style.boxSizing = 'border-box';
    btnNo.style.position = 'fixed';
    btnNo.style.left = '0';
    btnNo.style.top = '0';
    btnNo.style.right = 'auto';
    btnNo.style.transform = 'none';

    if (btnNo.parentNode !== document.body) {
        document.body.appendChild(btnNo);
        btnNo.style.zIndex = '9999';
    }

    const padding = 16;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const maxButtonWidth = Math.min(320, viewportWidth - padding * 2);
    btnNo.style.maxWidth = `${maxButtonWidth}px`;

    const rect = btnNo.getBoundingClientRect();
    const buttonWidth = Math.min(rect.width, maxButtonWidth);
    const buttonHeight = rect.height;

    const maxX = Math.max(0, viewportWidth - buttonWidth - padding);
    const maxY = Math.max(0, viewportHeight - buttonHeight - padding);
    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));

    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
}

function sayYes() {
    const btnNo = document.getElementById("btn-no");
    const btnYes = document.getElementById("btn-yes");
    const mainImage = document.getElementById("main-image");
    const question = document.getElementById("question");
    const subtitle = document.getElementById("subtitle-text");
    const hiddenMessage = document.getElementById("hidden-message");
    
    // Hide buttons and subtitle
    btnNo.style.display = 'none';
    btnYes.style.display = 'none';
    subtitle.style.display = 'none';
    question.style.display = 'none';
    
    // Change image
    mainImage.src = "../assets/proposal_yes.png";
    
    // Show hidden message
    hiddenMessage.style.display = 'block';
    
    // Create sparkles
    createSparkles();
}

function createSparkles() {
    const container = document.body;
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle-yes");
        
        // Random position for explosion
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 50;
        
        sparkle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
        sparkle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
        
        sparkle.style.left = '50%';
        sparkle.style.top = '50%';
        
        container.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}
