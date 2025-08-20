const lampada = document.querySelector('#lampada');
const btligar = document.querySelector('#btLigar');
const btdesligar = document.querySelector('#btDesligar');

//Evento
btligar.addEventListener('click',ligar);
btdesligar.addEventListener('click',desligar);

//Funções

function ligar(){
    lampada.src = 'images/lampada-acesa.png'
    document.body.style.backgroundColor = 'white';  // muda o fundo para branco
}

function desligar(){
    lampada.src = 'images/lampada-apagada.png'
    document.body.style.backgroundColor = 'black';  // volta o fundo para preto
}