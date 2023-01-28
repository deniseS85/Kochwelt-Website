async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


let Amount_array = [];

function portions() {
    let input = document.getElementById('input'); 
    let table = document.getElementById('table');

    for (let i = 0; i < table.rows.length; i++) { 

        let first_cell = table.rows[i].cells[0];

        Amount_array.push(first_cell.innerHTML);

            if (first_cell.innerHTML > 0 && input.value > 0) { 
                first_cell.innerHTML = Amount_array[i] * input.value;
            }
    }
}

function showOverlay() {
    document.getElementById('menuResponsiv').classList.add('showOverlay');
}

function closeOverlay() {
    document.getElementById('menuResponsiv').classList.remove('showOverlay');
}

function addPortionResponsiv() {
   document.getElementById('input').value = +document.getElementById('input').value + 1;
   portions();
}

function minusPortionResponsiv() {
    if (document.getElementById('input').value > 1) { 
        document.getElementById('input').value = +document.getElementById('input').value - 1;
    }
    portions();
}
