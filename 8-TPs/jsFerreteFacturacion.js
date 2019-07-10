/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var suma;
    var precioUno;
    var precioDos;
    var precioTres;

    precioUno = document.getElementById('PrecioUno').value;

    precioDos = document.getElementById('PrecioDos').value;

    precioTres = document.getElementById('PrecioTres').value;

    suma = parseInt (precioUno) + parseInt (precioDos) + parseInt (precioTres);

    alert ("La suma es: "+suma);
	
}
function Promedio () 
{
    var promedio;
    var suma;
    var precioUno;
    var precioDos;
    var precioTres;

    precioUno = document.getElementById('PrecioUno').value;

    precioDos = document.getElementById('PrecioDos').value;

    precioTres = document.getElementById('PrecioTres').value;

    suma = parseInt (precioUno) + parseInt (precioDos) + parseInt (precioTres);

    promedio = (suma) / 3 ;

    alert ("El promedio es: " +promedio);
	
}
function PrecioFinal () 
{
    var suma;
    var precioUno;
    var precioDos;
    var precioTres;
    var precioFinal;

    precioUno = document.getElementById('PrecioUno').value;

    precioDos = document.getElementById('PrecioDos').value;

    precioTres = document.getElementById('PrecioTres').value;

    suma = parseInt (precioUno) + parseInt (precioDos) + parseInt (precioTres);

    precioFinal = (suma * 21/100) + parseInt (suma);

    alert ("Precio final: "+precioFinal);
	
}