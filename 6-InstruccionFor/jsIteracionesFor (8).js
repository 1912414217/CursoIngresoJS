//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
function mostrar()
{
    var numero = parseInt(prompt("Ingrese numero:"));
    var numeroPrimo;

    for (i = 1; i <= numero; i++)
    {
        if (numero / 1 == numero && numero / numero == 1) 
        {
            alert("El numero "+numero+" es primo.");
            break; 

        } else if (numero / 1 != numero && numero / numero != 1)
            {
                alert("El numero "+numero+" no es primo.");
                break; 
            }
    }
}//FIN DE LA FUNCIÓN
