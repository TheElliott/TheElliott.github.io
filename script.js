const phrases = ["Game Designer", "Game Developer", "Gamer", "Student"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 100; // Adjust typing speed (in milliseconds)
const pauseTime = 2000; // Adjust pause time after each phrase (in milliseconds)

const typingText = document.querySelector('.typing-text span');

// Cursor variables
let cursorVisible = true;
const cursorBlinkInterval = 500; // Cursor blink speed in milliseconds

// Function to toggle the cursor visibility
setInterval(() => {
    cursorVisible = !cursorVisible;
    updateCursor();
}, cursorBlinkInterval);

function updateCursor() {
    typingText.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex) + (cursorVisible ? '|' : '');
}

function type() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        currentCharIndex++;
        updateCursor();
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, pauseTime);
    }
}

function erase() {
    if (currentCharIndex > 0) {
        currentCharIndex--;
        updateCursor();
        setTimeout(erase, typingSpeed);
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, pauseTime);
    }
}

// Start the typing effect
type();

// Smooth scrolling and active link highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + window.innerHeight / 2; // Center the viewport
    let closestSection = null;
    let closestDistance = Infinity;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const distanceToBottom = Math.abs(sectionBottom - scrollPosition);

        if (distanceToBottom < closestDistance) {
            closestDistance = distanceToBottom;
            closestSection = section;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === closestSection.id) {
            link.classList.add("active");
        }
    });
});
