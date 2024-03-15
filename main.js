import { Participante } from "./participante.js";

const participantes = [];
let idParticipante = 0;

function createParticipante(name) {
  let divParticipante = document.createElement("div");
  let nameParticipante = document.createElement("p");
  let participation = document.createElement("div");
  divParticipante.classList.add("participante");
  participation.classList.add("participacion", "active");
  participation.setAttribute("id", "pa-" + idParticipante);
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

function isAvaible(name) {
  let participanteAvaible = true;
  if (participantes.length > 0) {
    participantes.forEach((participante) => {
      if (participante.nombre == name) {
        participanteAvaible = false;
      }
    });
  }
  return participanteAvaible;
}

function addParticipante() {
  let name = document.getElementById("name").value;
  if (name != "" && isAvaible(name)) {
    idParticipante++;
    pushParticipante(name);
    renderNewParticipante(name);
    let audio2 = new Audio("audio/add.mp3");
    audio2.play();
  }
}

function deleteParticipante() {
  if (participantes.length > 1) {
    let aliveParticipantes = [];
    participantes.forEach((participante) => {
      if (participante.participacion == true) {
        aliveParticipantes.push(participante);
      }
    });
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

let btnAddParticipante = document.getElementById("addParticipante");
btnAddParticipante.addEventListener("click", addParticipante);

let btnDeleteParticipante = document.getElementById("deleteParticipante");
btnDeleteParticipante.addEventListener("click", deleteParticipante);

const classmates = [
  {
    id: 1,
    name: "Moha",
    participacion: true,
  },
  {
    id: 2,
    name: "Adrià",
    participacion: true,
  },
  {
    id: 3,
    name: "David",
    participacion: true,
  },
  {
    id: 4,
    name: "Albert",
    participacion: true,
  },
  {
    id: 5,
    name: "Alex",
    participacion: true,
  },
  {
    id: 6,
    name: "Sergi",
    participacion: true,
  },
  {
    id: 7,
    name: "Sergio",
    participacion: true,
  },
  {
    id: 8,
    name: "Thirza",
    participacion: true,
  },
  {
    id: 9,
    name: "Eric",
    participacion: true,
  },
  {
    id: 10,
    name: "Sheherezade",
    participacion: true,
  },
  {
    id: 11,
    name: "Sara",
    participacion: true,
  },
  {
    id: 12,
    name: "Aitor",
    participacion: true,
  },
];

classmates.map((classmate) => {
  pushParticipante(classmate.id, classmate.name);
  idParticipante = classmate.id;
  renderNewParticipante(classmate.name);
});
