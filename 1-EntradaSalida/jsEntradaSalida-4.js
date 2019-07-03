/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{	var dato;

	dato = prompt(""); //prompt = devuelve datos, recibe cual es el mensaje y el valor por defecto.

	document.getElementById('elNombre').value= dato

	alert (dato);
 

	/*la entrada de datos se puede tomar por "id"
	prompt = no pro / document.get.elementById = pro.*/
}

