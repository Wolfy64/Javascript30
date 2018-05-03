function setDate() {
    const now = new Date();

    // Seconds
    const secondsHands = document.querySelector('.second-hand');
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHands.style.transform = `rotate(${secondsDegrees}deg)`;

    // Minutes
    const minutesHands = document.querySelector('.min-hand');
    const minutesDigit = document.querySelector('.min-digit')
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHands.style.transform = `rotate(${minutesDegrees}deg)`;
    minutesDigit.innerHTML = (minutes<10?'0':'') + minutes;

    // Hours
    const hoursHands = document.querySelector('.hour-hand');
    const hoursDigit = document.querySelector(".hour-digit")
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHands.style.transform   = `rotate(${hoursDegrees}deg)`;
    hoursDigit.innerHTML = (hours<10?'0':'') + hours;
}

setInterval(setDate, 1000);