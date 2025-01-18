let amigos = [];

function adicionarAmigo() {
  let entradaDoUsuario = document.getElementById('amigo');
  if (entradaDoUsuario.value === '') {
    alert('Por favor, insira um nome');
    return;
  }
  let amigo = entradaDoUsuario.value;
  amigos.push(amigo);
  entradaDoUsuario.value = '';
  console.log(amigos);
}

function atualizarLista() {
    let lista = document.getElementById('listaDeAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Nenhum amigo disponível para sortear');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}