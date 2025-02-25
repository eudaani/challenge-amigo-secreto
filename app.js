//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
alert("Bem Vindo ao Game!");

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.button-add').addEventListener('click', adicionarAmigo);
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Amigo Secreto';

let paragrafo = document.querySelector('h2');
paragrafo.innerHTML = 'Digite o nome dos seus amigos:';

let listaDeAmigos = ["maria", "pedro", "dani", "ana"];

function adicionarAmigo() {
    console.log('O botão foi clicado');
    let nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo === '') {
       alert('Informe o nome do amigo!');
} else {

    listaDeAmigos.push(nomeAmigo); // Adiciona o nome ao array
    console.log(listaDeAmigos); // Para verificar se o nome foi adicionado
    atualizarLista();
    document.getElementById('amigo').value = ''; // Limpa o campo de entrada
   }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizá-la

    listaDeAmigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[indiceAleatorio];
    document.querySelector('.result-list').textContent = `O amigo secreto é: ${nomeSorteado}`;
}

