/*Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )*/

function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta = 'si';
    var temperaturaPar = 0;

    while(respuesta == 'si')
    {
        marca = prompt("Ingrese marca del producto: ").toLowerCase();//pide marca

        /*peso = prompt("Ingrese peso del mismo: ");//pide peso

        while(peso < 1 || peso > 100 || isNaN(peso))//valida peso
        {
            peso = prompt("Ingrese peso entre 1 y 100");
        }*/

        temperatura = prompt("Ingrese temperatura de almacenamiento: ");//pide temperatura de almacenamiento

        while(temperatura < -30 || temperatura > 30 || isNaN(temperatura));//valida temperatura
        {
            temperatura = prompt("Ingrese temperatura de almacenamiento entre -30 y 30")
        }

        /*if (temperatura % 2 == 0)
        {
           parseInt(temperaturaPar++);
        }*/
        respuesta = prompt("Desea ingresar otro producto?").tolowerCase();
    }
}
