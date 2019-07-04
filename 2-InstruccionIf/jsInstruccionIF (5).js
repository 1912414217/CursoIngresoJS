function mostrar()
{
//tomo la edad  
// Al ingresar una edad solo debemos informar si la persona NO es adolescente.

    var edad;


    edad = document.getElementById('edad').value;

    // "> = mayor" ; "<" = menor
    
    if (edad < 13){
        alert ("no es adolescente");
    }

    if (edad > 17){
        alert ("no es adolescente");
    }

    
}
