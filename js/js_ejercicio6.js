// js/js_ejercicio6.js — versión muy simple

document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('timerDisplay');
  const startPauseBtn = document.getElementById('startPauseBtn');
  const resetBtn = document.getElementById('resetBtn');

  if (!display || !startPauseBtn || !resetBtn) return;

  let time = 0;
  let intervalId = null;
  const TICK = 30;

  //Rellenar ceros por la izquierda
  function pad(n) { return String(n).padStart(2, '0'); }

  function update() {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = time % 1000;
    display.textContent = `${pad(minutes)}:${pad(seconds)}.${String(ms).padStart(3,'0')}`;
  }

  
  function start() {
    if (intervalId !== null) return;

    const startTime = Date.now() - time;
    intervalId = setInterval(() => {
      time = Date.now() - startTime;
      update();
    }, TICK);
    startPauseBtn.textContent = 'Pausar';
  }
  function pause() {
    if (intervalId === null) return;
    clearInterval(intervalId);
    intervalId = null;
    startPauseBtn.textContent = 'Iniciar';
  }
  function reset() {
    pause();
    time = 0;
    update();
  }

  update();
  startPauseBtn.addEventListener('click', () => {if (intervalId === null) start(); else pause();});
  resetBtn.addEventListener('click', () => {reset();startPauseBtn.textContent = 'Iniciar';});
});
