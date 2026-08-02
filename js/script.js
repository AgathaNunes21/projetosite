// ================================
// FORMULÁRIO DE CONTATO
// ================================

const formulario = document.querySelector("form");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nomeDigitado = nome.value.trim();
    let emailDigitado = email.value.trim();
    let mensagemDigitada = mensagem.value.trim();

    if(nomeDigitado == "" || emailDigitado == "" || mensagemDigitada == ""){

        alert("Preencha todos os campos.");

    }else{

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    }

});

// ================================
// GALERIA DE FOTOS
// ================================

const fotos = document.querySelectorAll("#galeria img");

fotos.forEach(function(foto){

    foto.addEventListener("click", function(){

        if(foto.style.transform == "scale(1.2)"){

            foto.style.transform = "scale(1)";

        }else{

            foto.style.transform = "scale(1.2)";

        }

    });

});

// ================================
// BOTÃO "SAIBA MAIS"
// ================================

const botao = document.querySelector(".btn-saiba-mais");

botao.addEventListener("click", function(){

    console.log("Botão Saiba Mais clicado.");

});

// ================================
// FOTO DE PERFIL
// ================================

const fotoPerfil = document.querySelector(".foto-wrapper img");

fotoPerfil.addEventListener("click", function(){

    fotoPerfil.style.border = "5px solid #5b4bff";

});

// ================================
// MENU ATIVO
// ================================

const links = document.querySelectorAll("nav a");

links.forEach(function(link){

    link.addEventListener("click", function(){

        links.forEach(function(item){

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});