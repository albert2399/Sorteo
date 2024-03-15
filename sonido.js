function sonar (){
    var audio = new Audio('audio/disparo.mp3');
    audio.play();
}

let btnDeleteParticipante = document.getElementById("deleteParticipante")
btnDeleteParticipante.addEventListener("click", sonar)
