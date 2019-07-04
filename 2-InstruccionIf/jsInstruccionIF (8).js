function mostrar()
{
//tomo la edad  

/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA, 
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */	

    var edad;
    var estadoCivil;

    edad = document.getElementById('edad').value;
    estadoCivil = document.getElementById('estadoCivil').value;

    // "> = mayor" ; "<" = menor
    if (edad < 18) {
        if (estadoCivil != 'soltero')
    }

}//FIN DE LA FUNCIÓN