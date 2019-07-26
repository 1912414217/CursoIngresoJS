/* Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 

2-Suma de los positivos. 

3-Cantidad de positivos. 

4-Cantidad de negativos. 

5-Cantidad de ceros. 

6-Cantidad de números pares. 

7-Promedio de positivos. 

8-Promedios de negativos. 

9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{

	var acumulador=0;
	var respuesta='si';
	var numero;
	var contador = 0;
	var negativo = 0;
	var positivo = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;

	while (respuesta == 'si')
	{
		contador++;
		numero = prompt ("Ingrese numero: ");

		numero = parseInt (numero);

		while ( isNaN (numero))
		{
			numero = prompt ("Ingrese un numero valido: ");
		}

		if (numero <= 0)
		{
			negativo = negativo + numero;
			cantidadNegativos++;

		} else if (numero >= 0)
			{
				positivo = positivo + numero;
				cantidadPositivos++;
			} else if (numero == 0)
				{
					cantidadCeros++;
				}

		respuesta = prompt ("Desea ingresar otro numero? ");
	}

	document.write("La suma de los negativos es: "+negativo+"<br>"); 
	document.write("La suma de los positivos es: "+positivo+"<br>");
	document.write("La cantidad de los negativos es: "+cantidadNegativos+"<br>");
	document.write("La cantidad de los positivos es: "+cantidadPositivos+"<br>");
	document.write("La cantidad de los 0 es: "+cantidadCeros+"<br>");
}//FIN DE LA FUNCIÓN