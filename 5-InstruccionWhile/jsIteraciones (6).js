// Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;
	
	while (contador < 5)
	{ // se ejecuta 5 veces
		contador++; 
		numero = prompt("Ingrese numero: ");
		numero = parseInt(numero);

		while (isNaN(numero)) 
		{
			acumulador + numero;

			numero = prompt("Ingrese numero: ");
			numero = parseInt(numero)
		}
		
		acumulador = contador;
	}

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN

/* 

ejercicio 7

hasta que el usuario quiera..

al final de todo:

respuesta = prompt ("quiere seguir ");


 */