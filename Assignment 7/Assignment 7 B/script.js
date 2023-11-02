const display = document.getElementById('custom-display');
const inputDate = document.getElementById('custom-date-input');
const startBtn = document.getElementById('custom-start-button');
const stopBtn = document.getElementById('custom-stop-button');
const resetBtn = document.getElementById('custom-reset-button');

let timerInterval;
let timeInSeconds = 0;
let isRunning = false;

inputDate.valueAsDate = new Date();

function updateTimeDisplay() {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

inputDate.addEventListener("focus", function () {
    this.blur();
});

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;

        timerInterval = setInterval(() => {
            timeInSeconds++;
            updateTimeDisplay();
        }, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 0;
    updateTimeDisplay();
    resetBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
