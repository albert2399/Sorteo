import { Participante } from "./participante.js";

const participantes = [];
let idParticipante = 0;

function createParticipante(name) {
  let divParticipante = document.createElement("div");
  let nameParticipante = document.createElement("p");
  let participation = document.createElement("div");
  divParticipante.classList.add("participante");
  participation.classList.add("participacion", "active");
  participation.setAttribute("id", 'pa-' + idParticipante);
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

function pushParticipante(name) {
  participantes.push(new Participante(idParticipante, name));
  console.log(participantes);
}

function addParticipante() {
  let name = document.getElementById("name").value;
  if (name != "") {
    idParticipante++;
    console.log(idParticipante);
    pushParticipante(name);
    renderNewParticipante(name);
  }
}

function deleteParticipante() {
    let aliveParticipantes = []
    participantes.forEach(participante => {
        if (participante.participacion == true) {
            aliveParticipantes.push(participante)
        }
    })
    let randomDeleteParticipante = Math.floor(Math.random() * aliveParticipantes.length)
    aliveParticipantes[randomDeleteParticipante].participacion = false
    document.getElementById('pa-' + aliveParticipantes[randomDeleteParticipante].id).classList.remove('active')
}

let btnAddParticipante = document.getElementById("addParticipante");
btnAddParticipante.addEventListener("click", addParticipante);

let btnDeleteParticipante = document.getElementById("deleteParticipante");
btnDeleteParticipante.addEventListener("click", deleteParticipante);
