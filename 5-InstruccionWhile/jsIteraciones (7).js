//Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.

function mostrar()
{
	var acumulador=0;
	var respuesta='si';
	var numero;
	var contador = 0;

	while (respuesta == 'si')
	{
		contador++;
		numero = prompt ("Ingrese numero: ");

		numero = parseInt (numero);

		while ( isNaN (numero))
		{
			numero = prompt ("Ingrese un numero: ");
		}

		acumulador += numero;

		respuesta = prompt ("Desea ingresar otro numero? ");
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN