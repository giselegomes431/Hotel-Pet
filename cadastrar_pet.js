// Seleciona os elementos do formulário
const salvarButton = document.querySelector('.btn.search');
const limparButton = document.querySelector('.btn.edit');

// Função para salvar o cadastro e adicionar o pet na tabela de pets
function salvarPet(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Captura os valores dos campos
  const proprietario = document.getElementById('proprietario').value;
  const nome = document.getElementById('nome').value;
  const tipo = document.getElementById('tipo').value;
  const raca = document.getElementById('raca').value;
  const tamanho = document.getElementById('tamanho').value;

  // Gera um id único para o pet
  let id = localStorage.getItem('petIdCounter');
  if (!id) {
    id = 1; // Se não houver contador, começa do 1
  } else {
    id = parseInt(id) + 1; // Incrementa o contador
  }
  localStorage.setItem('petIdCounter', id); // Atualiza o contador no localStorage

  // Cria um objeto para o pet
  const novoPet = {
    proprietario,
    nome,
    tipo,
    raca,
    tamanho,
    id
  };

  // Recupera a lista de pets do localStorage ou cria uma nova lista
  const pets = JSON.parse(localStorage.getItem('pets')) || [];
  pets.push(novoPet); // Adiciona o novo pet à lista
  localStorage.setItem('pets', JSON.stringify(pets)); // Salva a lista atualizada no localStorage

  alert('Pet salvo com sucesso!');
  limparFormulario(); // Limpa o formulário após salvar
}

// Função para limpar os campos do formulário
function limparFormulario() {
  document.getElementById('proprietario').value = '';
  document.getElementById('nome').value = '';
  document.getElementById('tipo').value = 'cachorro';
  document.getElementById('raca').value = '';
  document.getElementById('tamanho').value = 'pequeno';
}

// Eventos de clique
salvarButton.addEventListener('click', salvarPet);
limparButton.addEventListener('click', limparFormulario);
