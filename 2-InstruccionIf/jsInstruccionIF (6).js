function mostrar()
{
//tomo la edad  

/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */
 var edad;

 edad = document.getElementById('edad').value;

    // "> = mayor" ; "<" = menor
    if (edad < 18)  {
        if (edad > 12) {
        alert("es adolescente");
        } 

    }


    if (edad < 13){
        alert ("niño");
    }

    if (edad > 17){
        alert ("mayor de edad");
    }

}//FIN DE LA FUNCIÓN