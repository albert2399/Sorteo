
const participantes = []

function createParticipante(name) {
    let divParticipante = document.createElement('div')
    let nameParticipante = document.createElement('p')
    let participation = document.createElement('div')
    divParticipante.classList.add('participante')
    let nameNode = document.createTextNode(name)
    nameParticipante.appendChild(nameNode)
    divParticipante.appendChild(nameParticipante)
    divParticipante.appendChild(participation)
    return divParticipante
}

function renderNewParticipante(name) {
    let table = document.getElementById('table')
    table.appendChild(createParticipante(name))
}

function addParticipante() {
    let name = document.getElementById('name').value
    renderNewParticipante(name)
}

function startGame() {

}