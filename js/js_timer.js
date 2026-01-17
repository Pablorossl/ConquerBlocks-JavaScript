// js/js_timer.js
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const startBtn = document.getElementById('startBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const resetBtn = document.getElementById('resetBtn');

  if (!display || !startBtn || !pauseBtn || !resetBtn) {
    console.warn('Elementos del temporizador no encontrados');
    return;
  }

  let hours = 0, minutes = 0, seconds = 0;
  let intervalId = null;
  let running = false;

  function pad(n) { return String(n).padStart(2, '0'); }
  function updateDisplay() { display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`; }

  function tick() {
    seconds += 1;
    if (seconds >= 60) { seconds = 0; minutes += 1; }
    if (minutes >= 60) { minutes = 0; hours += 1; }
    updateDisplay();
  }

  function startTimer() {
    if (running) return;
    intervalId = setInterval(tick, 1000);
    running = true;
  }

  function pauseTimer() {
    if (!running) return;
    clearInterval(intervalId);
    intervalId = null;
    running = false;
  }

  function resetTimer() {
    pauseTimer();
    hours = 0; minutes = 0; seconds = 0;
    updateDisplay();
  }

  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
});
