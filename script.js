let prato = false;
let bebida = false;
let sobremesa = false;
let pratonome;
let bebidanome;
let sobremesanome;
let pratopreco;
let bebidapreco;
let sobremesapreco;
let valortotal;

function selecionandoprato(escolhido) {
    const  pratoantigo = document.querySelector(".pratoselecionado");
    if (pratoantigo == null){
        escolhido.classList.add("pratoselecionado");
    } else {
        pratoantigo.classList.remove("pratoselecionado");
        escolhido.classList.add("pratoselecionado");
    }

    prato = true;

    const nome = document.querySelector(".pratoselecionado .nome");
    pratonome = nome.innerHTML;
    const preco = document.querySelector(".pratoselecionado .preco");
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
    
    const nome = document.querySelector(".bebidaselecionada .nome");
    bebidanome = nome.innerHTML;
    const preco = document.querySelector(".bebidaselecionada .preco");
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
    
    const nome = document.querySelector(".sobremesaselecionada .nome");
    sobremesanome = nome.innerHTML;
    const preco = document.querySelector(".sobremesaselecionada .preco");
    sobremesapreco = preco.innerHTML;

    return  sobremesa, sobremesanome,    sobremesapreco;
}

function escolheu() {
    if ((prato == true) && (bebida == true) && (sobremesa == true)){
        const barra = document.querySelector(".barra");
        barra.classList.add("fecharpedido")
    }
}

function confirmar() {
    if ((prato == false) || (bebida == false) || (sobremesa == false)){
    
    } else  {
        const confirmar = document.querySelector(".confirmacao");
        confirmar.classList.remove("confirmacao");
        confirmar.classList.add("confirmar");

        const nomedoprato = document.querySelector(".nomeprato");
        nomedoprato.innerHTML = pratonome; 
        const precodoprato = document.querySelector(".precoprato");
        precodoprato.innerHTML = "R$ " + pratopreco; 

        const nomedabebida = document.querySelector(".nomebebida");
        nomedabebida.innerHTML = bebidanome; 
        const precodabebida = document.querySelector(".precobebida");
        precodabebida.innerHTML = "R$ " + bebidapreco; 

        const nomedasobremesa = document.querySelector(".nomesobremesa");
        nomedasobremesa.innerHTML = sobremesanome; 
        const precodasobremesa = document.querySelector(".precosobremesa");
        precodasobremesa.innerHTML = "R$ " + sobremesapreco; 

        const total = document.querySelector(".total");
        valortotal = parseFloat(String(precodoprato.innerHTML).replace("R$ ","").replace(",", ".")) + parseFloat(String(precodabebida.innerHTML).replace("R$ ","").replace(",", ".")) + parseFloat(String(precodasobremesa.innerHTML).replace("R$ ","").replace(",", "."));
        valortotal = valortotal.toFixed(2);
        valortotal = "R$ " + valortotal;
        total.innerHTML = valortotal;
    }
}

function cancelou() {
    const confirmar = document.querySelector(".confirmar");
    confirmar.classList.remove("confirmar");
    confirmar.classList.add("confirmacao");
}

function confirmou() {
    let nome = prompt("Qual é seu nome:");
    let endereco = prompt("Qual é o seu endereço:");
    let text = "Olá, gostaria de fazer o pedido:\n - Prato: " + pratonome + "\n- Bebida: " + bebidanome +"\n- Sobremesa:" + sobremesanome + "\n Total: " + valortotal + "\n\nNome: " + nome + "\nEndereço: " + endereco;
    text = encodeURIComponent(text);
    text = "https://wa.me/?text=" + text;
    if ((nome != null) && (endereco != null)){
        window.location.href = text;
    }
}
