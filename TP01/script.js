
function load() {

    document.getElementById("option11").addEventListener('click', () => { clica("option11") });
    document.getElementById("option12").addEventListener('click', () => { clica("option12") });
    document.getElementById("option13").addEventListener('click', () => { clica("option13") });
    document.getElementById("option21").addEventListener('click', () => { clica("option21") });
    document.getElementById("option22").addEventListener('click', () => { clica("option22") });
    document.getElementById("option23").addEventListener('click', () => { clica("option23") });
    document.getElementById("option31").addEventListener('click', () => { clica("option31") });
    document.getElementById("option32").addEventListener('click', () => { clica("option32") });
    document.getElementById("option33").addEventListener('click', () => { clica("option33") });

    document.getElementById("addRow").addEventListener('click', () => addRow());

    function clica(s) {
        document.getElementById("selectedOption").innerHTML = s;
    }

    function addRow() {

        let table = document.querySelector('tbody');
        let nac = document.getElementById("o1");
        let int = document.getElementById("o2");

        let row = document.createElement("tr");
        let pName = document.createElement("td")
        let pCost = document.createElement("td")
        let booli = document.createElement("td")


        pName.innerText = document.getElementById("productName").value;
        pCost.innerText = document.getElementById("productCost").value;

        if(nac.checked){
            booli.innerText = "nacional";
        } else if(int.checked){
            booli.innerText = "internacional";
        } else {
            booli.innerText = "undefined";
        }
        document.getElementById("origin").value;

        row.appendChild(pName);
        row.appendChild(pCost);
        row.appendChild(booli);
        table.appendChild(row);
    }
}



