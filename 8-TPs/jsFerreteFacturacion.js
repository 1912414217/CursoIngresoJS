/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno = parseInt(document.getElementById('PrecioUno').value);
    var precioDos = parseInt(document.getElementById('PrecioDos').value);
    var precioTres = parseInt(document.getElementById('PrecioTres').value);
    var resultado; 

    resultado = precioUno + precioDos +  precioTres;

    alert ("La suma es: "+resultado);

}
function Promedio () 
{
    var precioUno = parseInt(document.getElementById('PrecioUno').value);
    var precioDos = parseInt(document.getElementById('PrecioDos').value);
    var precioTres = parseInt(document.getElementById('PrecioTres').value);
    var resultado;

    resultado = (precioUno + precioDos + precioTres) / 3;

    alert ("El promedio es: "+resultado);
	
}
function PrecioFinal () 
{
    var precioUno = parseInt(document.getElementById('PrecioUno').value);
    var precioDos = parseInt(document.getElementById('PrecioDos').value);
    var precioTres = parseInt(document.getElementById('PrecioTres').value);
    var resultadoSuma;
    var resultado;

    resultadoSuma =  precioUno + precioDos  + precioTres;

    resultado = (resultadoSuma * 21 / 100) + parseInt(resultadoSuma); 

    alert ("El precio final es: "+resultado);
	
}
