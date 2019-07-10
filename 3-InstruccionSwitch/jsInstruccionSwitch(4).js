function mostrar()
{  
    var mesDelAño = document.getElementById('mes').value;
	
	switch (mesDelAño){
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert ("Tiene 31 dias");
        break;

        case "Febrero":
            alert ("Tiene 28 dias");
        break;

        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert ("Tiene 30 dias");
        break;
    }
}


    //default = el "else" de "if", pero del switch.

    /* - switch utiliza la iguadas estricta (===) */



//FIN DE LA FUNCIÓN