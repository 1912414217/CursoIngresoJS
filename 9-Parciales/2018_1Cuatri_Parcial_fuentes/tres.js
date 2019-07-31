// Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

function mostrar()
{
    var precio = parseInt(prompt("ingrese precio: "));
    var descuento = parseInt(prompt("Ingrese porcentaje de descuento: "));
    var precioFinal = (descuento /100) * precio;

    document.getElementById('elPrecioFinal').value = precioFinal;
}
