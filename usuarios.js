// Seleciona os elementos necessários
const searchButton = document.querySelector('.btn.search');
const clearButton = document.querySelector('.btn.delete');
const removeButton = document.querySelector('.remover');
const statusButton = document.querySelector('.btnstatus');
const viewUsersButton = document.querySelector('.btnusuarios');
const viewRoleButton = document.querySelector('.visu .btnfuncao');
const tableBody = document.querySelector('.pets-table tbody');
const rows = Array.from(tableBody.querySelectorAll('tr'));
const noResultsRow = document.createElement('tr');
noResultsRow.innerHTML = '<td colspan="8">Nenhum resultado encontrado.</td>';
noResultsRow.style.display = 'none';

// Função de pesquisa
function searchUsers() {
  const idValue = document.getElementById('id').value.toLowerCase();
  const emailValue = document.getElementById('email').value.toLowerCase();
  const statusValue = document.getElementById('status').value.toLowerCase();
  const nameValue = document.getElementById('nome').value.toLowerCase();
  const roleValue = document.getElementById('funcao').value.toLowerCase();

  const filteredRows = rows.filter(row => {
    const [_, __, email, name, role, status] = row.querySelectorAll('td');
    return (
      (!idValue || row.cells[1].textContent.toLowerCase().includes(idValue)) &&
      (!emailValue || email.textContent.toLowerCase().includes(emailValue)) &&
      (!statusValue || status.textContent.toLowerCase().includes(statusValue)) &&
      (!nameValue || name.textContent.toLowerCase().includes(nameValue)) &&
      (!roleValue || role.textContent.toLowerCase().includes(roleValue))
    );
  });

  tableBody.innerHTML = '';
  if (filteredRows.length > 0) {
    filteredRows.forEach(row => tableBody.appendChild(row));
  } else {
    tableBody.appendChild(noResultsRow);
    noResultsRow.style.display = '';
  }
}

// Função de limpar
function clearSearch() {
  document.getElementById('id').value = '';
  document.getElementById('email').value = '';
  document.getElementById('status').value = '';
  document.getElementById('nome').value = '';
  document.getElementById('funcao').value = '';

  tableBody.innerHTML = '';
  rows.forEach(row => tableBody.appendChild(row));
  noResultsRow.style.display = 'none';
}

// Função para remover usuários selecionados
function removeUsers() {
  const selectedRows = rows.filter(row => row.querySelector('input[type="checkbox"]').checked);
  selectedRows.forEach(row => row.remove());
}

// Função para alternar status dos usuários selecionados
function toggleStatus() {
  const selectedRows = rows.filter(row => row.querySelector('input[type="checkbox"]').checked);
  selectedRows.forEach(row => {
    const statusCell = row.querySelector('.status');
    if (statusCell.textContent === 'Ativo') {
      statusCell.textContent = 'Inativo';
      statusCell.classList.replace('ativo', 'inativo');
    } else {
      statusCell.textContent = 'Ativo';
      statusCell.classList.replace('inativo', 'ativo');
    }
  });
}

// Função para visualizar apenas usuários
function viewUsers() {
  const userRows = rows.filter(row => row.cells[4].textContent.toLowerCase() !== 'cliente');
  tableBody.innerHTML = '';
  userRows.forEach(row => tableBody.appendChild(row));
}

// Função para visualizar usuários por função
function viewRole() {
  const role = prompt('Digite a função (Gerente, Funcionário, Cliente):').toLowerCase();
  const roleRows = rows.filter(row => row.cells[4].textContent.toLowerCase() === role);

  tableBody.innerHTML = '';
  if (roleRows.length > 0) {
    roleRows.forEach(row => tableBody.appendChild(row));
  } else {
    tableBody.appendChild(noResultsRow);
    noResultsRow.style.display = '';
  }
}

// Eventos dos botões
searchButton.addEventListener('click', searchUsers);
clearButton.addEventListener('click', clearSearch);
removeButton.addEventListener('click', removeUsers);
statusButton.addEventListener('click', toggleStatus);
viewUsersButton.addEventListener('click', viewUsers);
viewRoleButton.addEventListener('click', viewRole);
