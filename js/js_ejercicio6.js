//Crea una página con un temporizador que comience en 00:00:00. 
// Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”.

//Al hacer clic en “Iniciar”, el temporizador debe comenzar a 
// contar los segundos, minutos y horas.

//“Pausar” detiene el conteo pero mantiene el tiempo actual.

//“Reiniciar” pone el temporizador en 00:00:00.



//Buenas prácticas
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('timerDisplay');
  const startPauseBtn = document.getElementById('startPauseBtn');
  const resetBtn = document.getElementById('resetBtn');

  //Buenas prácticas
  if (!display || !startPauseBtn || !resetBtn) return;

  let time = 0;
  let intervalId = null;
  const TICK = 30;

  //Rellenar ceros por la izquierda
  function pad(n) { return String(n).padStart(2, '0'); }

  //Actualizamos la vista del temporizador en formato MM.SS.mmm
  function update() {
    //Obtenemos los segundos y minutos
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = time % 1000;
    // Construimos la cadena 
    display.textContent = `${pad(minutes)}:${pad(seconds)}.${String(ms).padStart(3,'0')}`;
  }

  
  function start() {
    if (intervalId !== null) return;
      //Preservamos el tiempo transcurrido previo
    const startTime = Date.now() - time;
    intervalId = setInterval(() => { //Temporizador con calculo ms (TICK)
      time = Date.now() - startTime;
      update();
    }, TICK);
     //Cambiamos el nombre del boton si se ha pulsado iniciar
    startPauseBtn.textContent = 'Pausar';
  }

  //Funcion para pausar
  function pause() {
    if (intervalId === null) return;
    clearInterval(intervalId);
    intervalId = null;
    //Cambiamos el nombre del boton si se ha pulsado pausar
    startPauseBtn.textContent = 'Iniciar';
  }

  //Funcion para resetear
  function reset() {
    pause();
    time = 0;
    update();
  }

  update();
  startPauseBtn.addEventListener('click', () => {if (intervalId === null) start(); else pause();});
  resetBtn.addEventListener('click', () => {reset();startPauseBtn.textContent = 'Iniciar';});
});
