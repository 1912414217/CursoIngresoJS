function mostrar()
{
//tomo la edad  

/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA, 
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */	

    var edad = parseInt (document.getElementById('edad').value);
    var estadoCivil;


    if (estadoCivil == "Soltero" || edad > 17)
    {
        alert("Es soltero y no es menor");
    }

}//FIN DE LA FUNCIÓN
