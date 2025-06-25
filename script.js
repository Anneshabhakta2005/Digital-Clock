function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    document.getElementById('ampm').innerText = ampm;
}

// Cursor movement tracking
let cursor = document.querySelector('.cursor');
let isMoving = false;
let moveTimeout;

document.addEventListener('mousemove', (e) => {
    // Update cursor position
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Create wave effect
    if (!isMoving) {
        isMoving = true;
        createWave(e.clientX, e.clientY);
    }
    
    // Clear existing timeout
    clearTimeout(moveTimeout);
    
    // Set timeout to reset moving state
    moveTimeout = setTimeout(() => {
        isMoving = false;
    }, 100);
});

// Create wave ripple effect
function createWave(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    document.body.appendChild(ripple);
    
    // Remove ripple element after animation
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 1000);
}

// Add hover effect to interactive elements
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.clock-container') || e.target.closest('.clock span')) {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'rgba(255, 255, 255, 1)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.clock-container') || e.target.closest('.clock span')) {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

setInterval(updateClock, 1000);

function changeBackground() {
    const images = [
        'https://source.unsplash.com/1600x900/?nature,sunset',
        'https://source.unsplash.com/1600x900/?ocean,beach',
        'https://source.unsplash.com/1600x900/?mountains,forest',
        'https://source.unsplash.com/1600x900/?stars,galaxy'
    ];
    document.body.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
}

updateClock();
