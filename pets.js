// Seleciona os elementos necessários
const searchButton = document.querySelector(".btn.search");
const removeButton = document.querySelector(".btn.remover");
const clearButton = document.querySelector(".btn.delete");
const tableBody = document.querySelector(".pets-table tbody");
const rows = Array.from(tableBody.querySelectorAll("tr")); // Todas as linhas originais
const noResultsRow = document.createElement("tr");
noResultsRow.innerHTML = '<td colspan="7">Nenhum resultado encontrado.</td>';
noResultsRow.style.display = "none";

// Função de pesquisa
function searchPets() {
  const idValue = document.getElementById("id").value.toLowerCase();
  const racaValue = document.getElementById("raca").value.toLowerCase();
  const nomeValue = document.getElementById("nome").value.toLowerCase();
  const tamanhoValue = document.getElementById("tamanho").value.toLowerCase();

  // Filtra as linhas com base nos valores dos campos de pesquisa
  const filteredRows = rows.filter((row) => {
    const [_, id, nome, tipo, raca, tamanho] = row.querySelectorAll("td");
    return (
      (!idValue || id.textContent.toLowerCase().includes(idValue)) &&
      (!racaValue || raca.textContent.toLowerCase().includes(racaValue)) &&
      (!nomeValue || nome.textContent.toLowerCase().includes(nomeValue)) &&
      (!tamanhoValue ||
        tamanho.textContent.toLowerCase().includes(tamanhoValue))
    );
  });

  // Limpa o conteúdo da tabela e insere as linhas filtradas ou mensagem de "nenhum resultado"
  tableBody.innerHTML = "";
  if (filteredRows.length > 0) {
    filteredRows.forEach((row) => tableBody.appendChild(row));
  } else {
    tableBody.appendChild(noResultsRow);
    noResultsRow.style.display = "";
  }
}

// Função de limpar a pesquisa
function clearSearch() {
  document.getElementById("id").value = "";
  document.getElementById("raca").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("tamanho").value = "";
  tableBody.innerHTML = "";
  rows.forEach((row) => tableBody.appendChild(row)); // Retorna as linhas originais
}

function removeUsers() {
  // Seleciona todas as linhas da tabela atualmente visíveis
  const currentRows = Array.from(tableBody.querySelectorAll("tr"));
  const selectedRows = currentRows.filter(
    (row) => row.querySelector('input[type="checkbox"]').checked
  );

  // Remove as linhas selecionadas
  selectedRows.forEach((row) => row.remove());

  // Atualiza o array `rows` (se necessário para outras funções)
  rows.length = 0; // Limpa o array
  Array.from(tableBody.querySelectorAll("tr")).forEach((row) => rows.push(row)); // Repopula o array
}

// Eventos dos botões
searchButton.addEventListener("click", searchPets);
clearButton.addEventListener("click", clearSearch);
removeButton.addEventListener("click", removeUsers);
