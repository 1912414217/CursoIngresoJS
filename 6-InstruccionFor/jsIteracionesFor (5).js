//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
function mostrar()
{
    var numero = parseInt(prompt("Ingrese numero"));

    for (i = 0 ; i < 5000000 ; i++)
    {
        numero = prompt("Ingrese numero");
        if (numero == 9)
        {
            break;
        }
    }
}//FIN DE LA FUNCIÓN
