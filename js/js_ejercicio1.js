//Crea una página web con un botón que diga 
// "Cambiar color". Cada vez que el usuario haga clic en el 
// botón, el color de fondo de la página debe cambiar a un color 
// aleatorio.




//Funcion para crear colores aleatorios usando RGB
function getRandomColor() {
  //Crear números aleatorios hasta 256 con variables r,g & b
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256);
  //Devuelvo lo que genero de modo que tengo los "estilos"
  return `rgb(${r}, ${g}, ${b})`; 
}

//Esperar a que el código esté parseado (Buenas práticas)
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('changeColor');
  //Verificar si existe elemento (Buenas prácticas)
  if (!button) return; 
   //Cambio los estilos con la funcion de generar colores
  button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
});
