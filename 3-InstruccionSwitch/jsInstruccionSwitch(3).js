function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch (mesDelAño) {
        case "Febrero":
            alert ("Este mes no tiene más de 29 dias");
        break;

        case "Enero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert ("Este mes tiene 30 o más dias");
        break;
    }

}//FIN DE LA FUNCIÓN


// otra forma de hacerlo (switch + if)
	
	/*
	switch (mesDelAño)
	    {
		case "Febrero":
		    alert ("Este mes no tiene más de 29 días.");
		break;
	    }

	    if (mesDelAño != 'Febrero')
	    {
		alert("Este mes tiene 30 o más días");
	    }
	
	*/ 

