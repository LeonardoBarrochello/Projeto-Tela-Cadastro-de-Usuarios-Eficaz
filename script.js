var botao = document.getElementById("cadastro");
var lista = document.getElementById("lista-cadastrados")

botao.addEventListener("click",function(){
    var formCadastro = document.querySelector(".cadastro-usuario")
    var listaCadastro = document.querySelector(".lista-cadastrados")
    lista.style.backgroundColor="#56ccf2"
    listaCadastro.classList.remove('mostrar')
    
    if(formCadastro.classList.contains('mostrar')){
        formCadastro.classList.remove('mostrar')
        botao.style.backgroundColor="#56ccf2";
    }
    else {
        botao.style.backgroundColor="#08a2bd";
        formCadastro.classList.add('mostrar')
    }
    
})

lista.addEventListener("click",function(){
    
    var listaCadastro = document.querySelector(".lista-cadastrados")
    var formCadastro = document.querySelector(".cadastro-usuario")
    botao.style.backgroundColor="#56ccf2"
    formCadastro.classList.remove('mostrar')
    if(listaCadastro.classList.contains('mostrar')){
        listaCadastro.classList.remove('mostrar')
        lista.style.backgroundColor="#56ccf2";
    }
    else {
        listaCadastro.classList.add('mostrar')
        lista.style.backgroundColor="#08a2bd";
        
    }
})