//al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
function mostrar()
{

    var cantidad = prompt("ingrese el número de repeticiones");

    for (var i = cantidad ; i > 0 ; i--)
    {
        alert("Hola UTN FRA");
    }

}//FIN DE LA FUNCIÓN

/* otra forma vroh:

function mostrar()
{
    var mensaje = 'Hola UTN FRA';
    var numero = parseInt(prompt("Cuantas veces quiere repetir la frase?"));

    for (contador = 0 ; contador < numero ; contador++)
    {
        alert(mensaje);
    }
}//FIN DE LA FUNCIÓN
*/ 
