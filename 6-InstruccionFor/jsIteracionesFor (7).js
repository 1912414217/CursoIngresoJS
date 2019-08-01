/* al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.*/ 
function mostrar()
{
    var numero = parseInt(prompt("Ingrese numero: "));
    var divisores = 0;
    
    for (i = 1; i <= numero; i++)
    {
        if(numero % i == 0 && i != 0)
        {
            console.log(i);
            divisores++;
        } 
    }

}//FIN DE LA FUNCIÓN
