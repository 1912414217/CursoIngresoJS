// Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert. 


function mostrar()
{
    var ancho = parseInt(prompt("Ingrese ancho: ", "Ingrese ancho aqui."));
    var largo = parseInt(prompt("Ingrese largo: ", "Ingrese largo aqui."));
    var perimetro = (2 * ancho) + (2 * largo);

    alert ("Perimetro: "+perimetro);

}
