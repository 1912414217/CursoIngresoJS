/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre; //define nombre de las variables//
        nombre = prompt ("Ingrese su nombre", "Hola! Natalia Natalia"); //le da significado a las variables//
        /*ventana emergente (entrada) = "prompt"
        Ventana emergente (salda) = "alert"*/
        
        alert ("Su nombre es: "+nombre); 
        /* todo lo que este entre comillas,
        es valor literal, con las comillas muestra el contenido,
        sin las comillas, el valor de la variable */
    }