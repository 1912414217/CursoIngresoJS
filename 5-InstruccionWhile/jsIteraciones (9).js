function mostrar()
{

	var contador=0;
	var respuesta='si';
	var numero;
	var max;
	var min;

	while (respuesta == 'si')
	{
		contador++;
		numero = prompt ("Ingrese numero: ");

		numero = parseInt (numero);

		while ( isNaN (numero))
		{
			numero = prompt ("Ingrese un numero: ");
		}


		if (contador == 1)
		{
			max = numero;
			min = numero;
		}else
			{
				if (numero >= max)
				{
					max = numero;
				} if (numero <= min)
					{
						min = numero;
					}
			}

		

		respuesta = prompt ("Desea ingresar otro numero? ").toLowerCase();
	}

	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN