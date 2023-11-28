/* 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea 
y un botón que al ser presionado agregue dicha tarea a una lista, 
cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
 */

  
const obtenerDatos = (e) => {
    e.preventDefault();
const inputTarea = document.getElementById('inputTarea');
console.log(inputTarea.value);
const li = document.createElement('li');
li.innerText = inputTarea.value;
let tareas = document.querySelector('ul');
tareas.appendChild(li);
formularioBusqueda.reset();
}


const formularioBusqueda = document.querySelector('form');
console.log(formularioBusqueda);

formularioBusqueda.addEventListener('submit', obtenerDatos);

const btnBorrar = document.getElementById('btnBorrar');

btnBorrar.addEventListener('click', function(){
    let tareas = document.querySelector('ul');
    const ultimo = tareas.lastElementChild;
    if (ultimo) {
      tareas.removeChild(ultimo);
    }  
})
  


