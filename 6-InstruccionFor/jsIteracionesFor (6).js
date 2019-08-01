/*al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

*/function mostrar()
{
    var pares = 0;
    var numero = parseInt(prompt("Ingrese un numero"));

    for (i = 1 ; i <= numero ; i++)
    {
        if(i % 2 == 0 && i != 0)
        {
            console.log(i)
            pares++
        }        
    }
}//FIN DE LA FUNCIÓN
