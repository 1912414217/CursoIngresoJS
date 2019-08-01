/* al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.*/ 
function mostrar()
{
    var numero = parseInt(prompt("Ingrese numero: "));
    var divisores = 0;
    
    for (i = 1; i <= numero; i++)
    {
        if(numero % i == 0 && i != 0) // % = divide el 1er numero por el 2do y te muestra el resto de una division
        {
            console.log(i);
            divisores++;
        } 
    }

}//FIN DE LA FUNCIÓN
