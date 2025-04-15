// Countdown Timer Script
const eventDate = new Date("2025-05-01T09:00:00"); // Set the event date and time here
const countdownElement = document.getElementById("countdown-timer");

function updateCountdown() {
    const now = new Date();
    const timeRemaining = eventDate - now;

    if (timeRemaining <= 0) {
        countdownElement.innerHTML = "The event has started!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
