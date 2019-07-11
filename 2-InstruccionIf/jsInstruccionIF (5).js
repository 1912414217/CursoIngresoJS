function mostrar()
{
//tomo la edad  
// Al ingresar una edad solo debemos informar si la persona NO es adolescente.

    var precio;

    precio = document.getElementById('edad').value;

    if (precio < 25)
    {
        alert ("Barato");
    }else 
    {
        if (precio > 75)
        {
        alert ("Caro");
        }
    }

    


    /* var edad;


    edad = document.getElementById('edad').value;

    // "> = mayor" ; "<" = menor
    
    if (edad < 13){
        alert ("no es adolescente");
    }

    if (edad > 17){
        alert ("no es adolescente");
    }
    */
    
}
