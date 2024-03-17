function load() {
    document.getElementById('option11').addEventListener('click', function () {
        updateSelectedOption('Opção11');
    });
    document.getElementById('option12').addEventListener('click', function () {
        updateSelectedOption('Opção12');
    });
    document.getElementById('option13').addEventListener('click', function () {
        updateSelectedOption('Opção13');
    });

    document.getElementById('option21').addEventListener('click', function () {
        updateSelectedOption('Opção21');
    });
    document.getElementById('option22').addEventListener('click', function () {
        updateSelectedOption('Opção22');
    });
    document.getElementById('option23').addEventListener('click', function () {
        updateSelectedOption('Opção23');
    });

    document.getElementById('option31').addEventListener('click', function () {
        updateSelectedOption('Opção31');
    });
    document.getElementById('option32').addEventListener('click', function () {
        updateSelectedOption('Opção32');
    });
    document.getElementById('option33').addEventListener('click', function () {
        updateSelectedOption('Opção33');
    });

    document.getElementById('addRow').addEventListener('click', processAquisicao);
    addButtonProcess();
}

function updateSelectedOption(optionText) {
    document.getElementById('selectedOption').innerText = optionText;
}

function processAquisicao() {
    let productName = document.getElementById('productName').value;
    let productCost = document.getElementById('productCost').value;
    let origin = document.querySelector('input[name="origin"]:checked');

    if (productName && productCost && origin) {
        let table = document.querySelector('table tbody');
        let newRow = table.insertRow(table.rows.length);

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = productName;
        cell2.innerHTML = origin.nextElementSibling.innerHTML;
        cell3.innerHTML = productCost;

        document.getElementById('productName').value = '';
        document.getElementById('productCost').value = '';
        document.getElementById('o1').checked = false;
        document.getElementById('o2').checked = false;
    } else {
        alert('Por favor, preencha todos os campos do formulário.');
    }
}

// Acrescentar um novo botão que calcula o total
// dos custos dos produtos na tabela e acrescenta uma linha(row) com uma só
// coluna no fim da tabela com o texto "Total dos custos"
function addButtonProcess() {

    //Criar botão com o texto "Calcular custos"
    let btn = document.createElement("button");
    let t = document.createTextNode("Calcular total dos custos");
    btn.appendChild(t);
    document.body.appendChild(btn);

    //Ao clicar no botão a função para adicionar a row é chamada
    btn.addEventListener('click', () => addRowTotal());
}

function addRowTotal() {
    let rows = document.getElementsByTagName('tr');
    let table = document.getElementsByTagName("tbody")[0];

    let total = 0;

    for (let i = 1; i < rows.length; i++) {
        let costCell = rows[i].cells[rows[i].cells.length - 1];
        total += parseFloat(costCell.textContent);
    }

    let teste = table.insertRow()
    let newRow1 = teste.insertCell()
    newRow1.colSpan = 3;
    let totall = document.createTextNode("Custo Total: " + total);
    newRow1.appendChild(totall);
}