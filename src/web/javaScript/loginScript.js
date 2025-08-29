const loginB = document.getElementById("loginButton");
loginB.addEventListener("click", function(e){
    let user = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    if(user== "joao" && senha == "123"){
        window.location.href="user.html";
    }
    
});

