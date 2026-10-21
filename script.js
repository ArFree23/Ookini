function calcularprecio(preciounitatrio, cantidad) {
    const total = preciounitatrio * cantidad;
    return total;
}

//function puedereservar(cantidad) {
//    return cantidad <= 2;
//}

function puedereservar (tazasDisponibles) {
    return tazasDisponibles > 0;
}

//const botonreservar = document.querySelector("#boton-reservar");

//botonreservar.addEventListener("click", function() {
//    console.log("El usuario hizo click");
//});

const botonreservar = document.querySelector ("#boton-reservar");
const contadortazas = document.querySelector ("#contador-tazas");

botonreservar.addEventListener ("click", function() {
    const tazasactuales = Number (contadortazas.textContent);

    if (puedereservar(tazasactuales)) {
        contadortazas.textContent = tazasactuales - 1;
        console.log("Reserva registrada");
    } else {
        botonreservar.textContent = "Sin cupos";
        botonreservar.disabled = true;
        console.log("No hay cupos disponibles");
    }
});
