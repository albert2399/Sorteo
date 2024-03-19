// Importamos la clase Participante desde el módulo participante.js
import { Participante } from "./participante.js";

// Array para almacenar los participantes
const participantes = [];

// Variable para el ID del próximo participante
let idParticipante = 0;

// Función para crear un nuevo elemento de participante en el DOM
function createParticipante(name, id) {
  let divParticipante = document.createElement("div");
  let nameParticipante = document.createElement("p");
  let participation = document.createElement("div");
  divParticipante.classList.add("participante");
  participation.classList.add("participacion", "active");
  participation.setAttribute("id", "pa-" + id);
  let nameNode = document.createTextNode(name);
  nameParticipante.appendChild(nameNode);
  divParticipante.appendChild(nameParticipante);
  divParticipante.appendChild(participation);
  return divParticipante;
}

// Función para renderizar un nuevo participante en la tabla
function renderNewParticipante(name, id) {
  let table = document.getElementById("table");
  table.appendChild(createParticipante(name, id));
}

// Función para agregar un nuevo participante al array y mostrarlo en la tabla
function pushParticipante(id, name) {
  participantes.push(new Participante(id, name));
  console.log(participantes);
}

// Función para verificar si un nombre de participante está disponible
function isAvailable(name) {
  return !participantes.some((participante) => participante.nombre === name);
}

// Función para agregar un participante cuando se hace clic en el botón "Agregar"
function addParticipante() {
  let name = document.getElementById("name").value;
  if (name.trim() && isAvailable(name)) {
    idParticipante++;
    pushParticipante(idParticipante, name);
    renderNewParticipante(name, idParticipante);
    let audio2 = new Audio("audio/add.mp3");
    audio2.play();
  } else {
    let audio2 = new Audio("audio/add.mp3");
    audio2.play();
  }
}

// Función para eliminar un participante cuando se hace clic en el botón "Eliminar"
function deleteParticipante() {
  if (participantes.length > 1) {
    let aliveParticipantes = participantes.filter(
      (participante) => participante.participacion
    );
    if (aliveParticipantes.length > 1) {
      let randomDeleteParticipante = Math.floor(
        Math.random() * aliveParticipantes.length
      );
      aliveParticipantes[randomDeleteParticipante].participacion = false;
      document
        .getElementById("pa-" + aliveParticipantes[randomDeleteParticipante].id)
        .classList.remove("active");
      let audio = new Audio("audio/disparo.mp3");
      audio.play();
    }
  }
}

// Agregar un listener para el botón "Agregar Participante"
let btnAddParticipante = document.getElementById("addParticipante");
btnAddParticipante.addEventListener("click", addParticipante);

// Agregar un listener para el botón "Eliminar Participante"
let btnDeleteParticipante = document.getElementById("deleteParticipante");
btnDeleteParticipante.addEventListener("click", deleteParticipante);

// Lista de compañeros de clase predefinidos
const classmates = [
  { id: 1, name: "Moha", participacion: true },
  { id: 2, name: "Adrià", participacion: true },
  { id: 3, name: "David", participacion: true },
  { id: 4, name: "Albert", participacion: true },
  { id: 5, name: "Alex", participacion: true },
  { id: 6, name: "Sergi", participacion: true },
  { id: 7, name: "Sergio", participacion: true },
  { id: 8, name: "Thirza", participacion: true },
  { id: 9, name: "Eric", participacion: true },
  { id: 10, name: "Sheherezade", participacion: true },
  { id: 11, name: "Sara", participacion: true },
  { id: 12, name: "Aitor", participacion: true },
];

// Agregar cada compañero de clase a la lista de participantes
classmates.forEach((classmate) => {
  idParticipante = classmate.id;
  pushParticipante(classmate.id, classmate.name);
  renderNewParticipante(classmate.name, classmate.id);
});
