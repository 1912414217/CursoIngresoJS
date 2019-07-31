/*Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".
*/
function mostrar()
{
    var primerNumero = parseInt(prompt("Ingrese numero: "));
    var segundoNumero = parseInt(prompt("Ingrese otro numero: "));
    var resultado;

    if (primerNumero == segundoNumero)
    {
        alert(primerNumero+" y "+segundoNumero+" son iguales");
    } 

    if (primerNumero > segundoNumero)
    {
        resultado = primerNumero - segundoNumero;
        
    } else if (primerNumero < segundoNumero)
        {
            resultado = primerNumero + segundoNumero;
        }

        alert ("El resultado es: "+resultado);


    if (resultado > 10)
    {
        alert("La suma es: "+resultado+" y supero el 10");
    }

}
