/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 
(validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7) */

function mostrar()
{
    var letra;
    var numero;
    var respuesta = 'si';
    var cantidadPar = 0;
    var cantidadImpar = 0;
    var cantidadCeros = 0;
    var acumulador = 0;
    var cantidad = 0; 
    var cantNumerosNegativos = 0;
    var min;
    var max;
    var menorletra;
    var mayorletra;

    while (respuesta == 'si')
	{
        cantidad++;
        //ingreso de letra
        letra = prompt("Ingrese una letra de la A a la Z").toLowerCase();
        //valida que la letra, sea letra 
        while (isNaN(letra) == false)
        {
            letra = prompt("Incorrecto! ingrese letra de la A a la Z").toLowerCase();
        }//fin de validacion de letra

        numero = parseInt(prompt ("Ingrese numero entre -100 y 100 "));//Ingreso numero entre 1 y 100

        if (numero > 0)
        {
            acumulador += numero;
        } else if (numero < 0)
            {
                cantNumerosNegativos += numero;
            }
        
		while (isNaN (numero) || numero < -100 || numero > 100)
		{
			numero = prompt ("Ingrese un numero valido: ");
		}

        if (numero % 2 == 0)
		{
			cantidadPar++;

        } 
        
        if (numero % 2 != 0)
		{
			cantidadImpar++;
        } 
                        
        if (numero == 0)
		{
			cantidadCeros++;
        }
        //nota minima y maxima
        if (cantidad == 1)
		{
            max = numero;
            min = numero;
            menorletra = letra;
		}else
			{
                if (numero >= max)
				{   
                    mayorletra = letra;
					max = numero;
                }
                
				if (numero <= min)
				{
                    menorletra = letra;
					min = numero;
				}
			}// fin nota minima y maxima
        
        promedio = acumulador / cantidad;

        respuesta = prompt ("Desea ingresar otro numero? ");
	}
 
    document.write("Cantidad de numeros pares: "+cantidadPar+"<br>");
    document.write("Cantidad de 0's: "+cantidadCeros+"<br>");
    document.write("Cantidad de numeros impares: "+cantidadImpar+"<br>");
    document.write("El promedio de los numeros positivos es: "+promedio+"<br>");
    document.write("La suma de los negativos es: "+cantNumerosNegativos+"<br>");
    document.write("El numero y la letra del minimo es "+min+" "+menorletra+"<br>");
    document.write("El numero y la letra mayor es "+max+" "+mayorletra+"<br>")
    
}
