let user;
let senha;
document.getElementById("bottone1").onclick = function(){
    user = document.getElementById("user").value;
    senha = document.getElementById("senha").value;
    console.log(user, senha);
}