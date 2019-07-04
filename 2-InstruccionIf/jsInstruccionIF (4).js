function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById('edad').value;

    // "> = mayor" ; "<" = menor
    if (edad < 18)  {
        if (edad > 12) {
        alert("es adolescente");
        } 

    }
}//FIN DE LA FUNCIÓN