//Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.

function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;

	while (respuesta == 'si')
	{
		contador++;
		numero = prompt ("Ingrese un numero: ");

		numero = parseInt (numero);

		while (isNaN (numero))
		{
			numero = prompt ("Ingrese un numero valido: ");
		}

		if (numero > 0)
		{
			positivo = positivo + numero;
		} else if (numero < 0)
			{
				negativo = negativo * numero;
			}

		respuesta = prompt ("Desea ingresar otro numero? ").toLowerCase();
	}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN