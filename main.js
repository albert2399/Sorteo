import { Participante } from "./participante.js";

const participantes = [];
let idParticipante = 0;

function createParticipante(name, idP) {
  console.log(idP);
  let divParticipante = document.createElement("div");
  let nameParticipante = document.createElement("p");
  let participation = document.createElement("div");
  divParticipante.classList.add("participante");
  participation.classList.add("participacion", "active");
  participation.setAttribute("id", idParticipante);
  let nameNode = document.createTextNode(name);
  nameParticipante.appendChild(nameNode);
  divParticipante.appendChild(nameParticipante);
  divParticipante.appendChild(participation);
  return divParticipante;
}

function renderNewParticipante(name) {
  let table = document.getElementById("table");
  table.appendChild(createParticipante(name));
}

function pushParticipante(name, id) {
  participantes.push(new Participante(id, name));
  console.log(participantes);
}

function addParticipante() {
  let name = document.getElementById("name").value;
  if (name != "") {
    idParticipante++;
    console.log(idParticipante);
    pushParticipante(name, idParticipante);
    renderNewParticipante(name, idParticipante);
  }
}

function deleteParticipante() {}

let btnAddParticipante = document.getElementById("addParticipante");
btnAddParticipante.addEventListener("click", addParticipante);

let btnDeleteParticipante = document.getElementById("deleteParticipante");
btnDeleteParticipante.addEventListener("click", deleteParticipante);
