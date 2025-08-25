const login = document.getElementById("sair");
const user = document.getElementById("userB");
const treino = document.getElementById("treinoB");

login.addEventListener("click", function(e){
    window.location.href="login.html";
});

treino.addEventListener("click", function(e){
    const userPanel = document.getElementById("person");
    const treinoPanel = document.getElementById("treino");
    //let faltaPanel = document.querySelector(".falta");

    userPanel.classList.remove('visible');
    userPanel.classList.add('hidden');
    
    treinoPanel.classList.remove('hidden');
    treinoPanel.classList.add('visible');
});

user.addEventListener("click", function(e){
    const userPanel = document.getElementById("person");
    const treinoPanel = document.getElementById("treino");
    //let faltaPanel = document.querySelector(".falta");

    treinoPanel.classList.remove('visible');
    treinoPanel.classList.add('hidden');

    userPanel.classList.remove('hidden');
    userPanel.classList.add('visible');
});