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
