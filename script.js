let prato = false;
let bebida = false;
let sobremesa = false;
let pratonome = null;
let bebidanome = null;
let sobremesanome = null;
let pratopreco = null;
let bebidapreco = null;
let sobremesapreco = null;

function selecionandoprato(escolhido) {
    const  pratoantigo = document.querySelector(".pratoselecionado");
    if (pratoantigo == null){
        escolhido.classList.add("pratoselecionado");
    } else {
        pratoantigo.classList.remove("pratoselecionado");
        escolhido.classList.add("pratoselecionado");
    }

    prato = true;

    const nome = document.querySelector(".nome");
    pratonome = nome.innerHTML;
    const preco = document.querySelector(".preco");
    pratopreco = preco.innerHTML;

    return prato, pratonome, pratopreco;
}

function selecionandobebidas(escolhido) {
    const  bebidaantigo = document.querySelector(".bebidaselecionada");
    if (bebidaantigo == null){
        escolhido.classList.add("bebidaselecionada");
    } else {
        bebidaantigo.classList.remove("bebidaselecionada");
        escolhido.classList.add("bebidaselecionada");
    }

    bebida = true;
    
    const nome = document.querySelector(".nome");
    bebidanome = nome.innerHTML;
    const preco = document.querySelector(".preco");
    bebidapreco = preco.innerHTML;

    return  bebida, bebidanome,    bebidapreco;
}

function selecionandosobremesas(escolhido) {
    const  sobremesaantigo = document.querySelector(".sobremesaselecionada");
    if (sobremesaantigo == null){
        escolhido.classList.add("sobremesaselecionada");
    } else {
        sobremesaantigo.classList.remove("sobremesaselecionada");
        escolhido.classList.add("sobremesaselecionada");
    }

    sobremesa = true;
    
    const nome = document.querySelector(".nome");
    sobremesanome = nome.innerHTML;
    const preco = document.querySelector(".preco");
    sobremesapreco = preco.innerHTML;

    return  sobremesa, sobremesanome,    sobremesapreco;
}

function escolheu(){
    if ((prato != false) & (bebida != false) & (sobremesa != false)){
        const barra = document.querySelector(".barra");
        barra.classList.add("fecharpedido")
    }
}

function confirmar(){
    const confirmar = document.querySelector(".confirmacao");
    confirmar.classList.remove("confirmacao");
    confirmar.classList.add("confirmar");

    const nomedoprato = document.querySelector(".nomeprato");
    nomedoprato.innerHTML = pratonome; 
    const precodoprato = document.querySelector(".precoprato");
    precodoprato.innerHTML = pratopreco; 

    const nomedabebida = document.querySelector(".nomebebida");
    nomedabebida.innerHTML = bebidanome; 
    const precodabebida = document.querySelector(".precobebida");
    precodabebida.innerHTML = bebidapreco; 

    const nomedasobremesa = document.querySelector(".nomesobremesa");
    nomedasobremesa.innerHTML = sobremesanome; 
    const precodasobremesa = document.querySelector(".precosobremesa");
    precodasobremesa.innerHTML = sobremesapreco; 

    const total = document.querySelector(".total");
    total.innerHTML = "R$ " + parseFloat(String(precodoprato.innerHTML).replace("R$", "").replace(",", ".")) + parseFloat(String(precodabebida.innerHTML).replace("R$", "").replace(",", ".")) + parseFloat(String(precodasobremesa.innerHTML).replace("R$", "").replace(",", "."));
}
