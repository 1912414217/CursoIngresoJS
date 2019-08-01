//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
function mostrar()
{
    var numero = parseInt(prompt("Ingrese numero:"));
    var numeroPrimo = 0;

    for (i = 1; i <= numero; i++)
    {
        if (numero % i == 0) // % = divide el 1er numero por el 2do y te muestra el resto de una division
        {
            console.log(i);
            numeroPrimo++;
        }
    }
}//FIN DE LA FUNCIÓN
