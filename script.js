const tabela = document.getElementById('tabela');
const form = document.getElementById('form');

function addElement(infos, classes) {
  const row = document.createElement('tr');

  for (let info of infos) {
    const data = document.createElement('td');
    data.className = classes;
    data.textContent = info;
    row.appendChild(data);
  }

  tabela.appendChild(row);
}

function getJsonFromUrl(url) {
  return fetch(url).then(res => res.json());
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dadosForm = new FormData(form);
  dadosForm.append("add", 1);
  
})