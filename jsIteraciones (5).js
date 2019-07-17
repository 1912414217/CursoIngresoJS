function mostrar()
{

var sexo = prompt("ingrese f ó m .");

    sexo = sexo.toLocaleLowerCase();

    while (sexo != 'f' && sexo != 'm'){
           prompt("Ingrese f o m: ");
        }


document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN