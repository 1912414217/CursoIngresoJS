function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero = parseInt( (Math.random() * 10) + 1); 

	alert (+numero);

}//FIN DE LA FUNCIÓN


	/* otra forma de hacerlo:

		Math.floor (Math.random()*10) +1;

		(formula para sacar un maximo y un minimo): 

		math.floor (math.random()* (numeroMax / numeroMin)) + numeroMin; (el maximo no esta inlcuido)

	 */
