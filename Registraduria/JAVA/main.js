document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("mesa-form");
    const table = document.querySelector("table");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const numeroMesa = document.getElementById("numero-mesa").value;
        const inscritos = document.getElementById("inscritos").value;

        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = table.rows.length - 1;
        cell2.innerHTML = numeroMesa;
        cell3.innerHTML = inscritos;
        cell4.innerHTML = '<button class="edit-btn">Editar</button> <button class="delete-btn">Eliminar</button>';

        form.reset();
    });
});
