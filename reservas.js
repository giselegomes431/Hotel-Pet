// Seleciona os elementos necessários
const searchButton = document.querySelector(".btn.search");
const removeButton = document.querySelector(".btn.remover");
const clearButton = document.querySelector(".btn.delete");
const tableBody = document.querySelector(".pets-table tbody");
const noResultsRow = document.createElement("tr");
noResultsRow.innerHTML = '<td colspan="7">Nenhum resultado encontrado.</td>';
noResultsRow.style.display = "none";

// Função de pesquisa
function searchReservations() {
  const idValue = document.getElementById("id").value.toLowerCase();
  const ownerValue = document.getElementById("proprietario").value.toLowerCase();
  const statusValue = document.getElementById("status").value.toLowerCase();
  const startDateValue = document.getElementById("inicio").value;
  const endDateValue = document.getElementById("termino").value;
  const petValue = document.getElementById("pet").value.toLowerCase();

  // Seleciona todas as linhas da tabela para aplicar a filtragem
  const allRows = Array.from(tableBody.querySelectorAll("tr"));
  const filteredRows = allRows.filter((row) => {
    const [id, pet, startDate, endDate, status] = row.querySelectorAll("td");
    const totalValue = row.cells[5].textContent.toLowerCase();

    return (
      (!idValue || id.textContent.toLowerCase().includes(idValue)) &&
      (!ownerValue || row.cells[1].textContent.toLowerCase().includes(ownerValue)) &&
      (!statusValue || status.textContent.toLowerCase().includes(statusValue)) &&
      (!startDateValue || new Date(startDate.textContent) >= new Date(startDateValue)) &&
      (!endDateValue || new Date(endDate.textContent) <= new Date(endDateValue)) &&
      (!petValue || pet.textContent.toLowerCase().includes(petValue))
    );
  });

  tableBody.innerHTML = "";
  if (filteredRows.length > 0) {
    filteredRows.forEach((row) => tableBody.appendChild(row));
  } else {
    tableBody.appendChild(noResultsRow);
    noResultsRow.style.display = "";
  }
}

// Função de remoção de usuários
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

// Função para limpar os campos de pesquisa e restaurar a tabela
function clearSearch() {
  document.getElementById("id").value = "";
  document.getElementById("proprietario").value = "";
  document.getElementById("status").value = "";
  document.getElementById("inicio").value = "";
  document.getElementById("termino").value = "";
  document.getElementById("pet").value = "";

  tableBody.innerHTML = "";
  rows.forEach((row) => tableBody.appendChild(row));
  noResultsRow.style.display = "none";
}

// Eventos dos botões
searchButton.addEventListener("click", searchReservations);
clearButton.addEventListener("click", clearSearch);
removeButton.addEventListener("click", removeUsers);
