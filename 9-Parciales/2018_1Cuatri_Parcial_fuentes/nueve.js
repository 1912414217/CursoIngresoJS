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
   var respuesta = 'si'.toLowerCase();
   var temperaturaPar = 0;
   var contador = 0; //epa todavia no esta usado
   var cantidadMenosCeroGrados = 0;
   var acumulador = 0;
   var promedio;
   var max;
   var min;
   
   while(respuesta == 'si')
   {    
       contador++;
        //ingreso y validacion de marca, peso y temperatura
       marca = prompt("Ingrese marca del producto");
       peso = parseInt(prompt("Ingrese peso", "el peso debe ser entre 1 y 100"));
       acumulador += peso;

       while(peso < 1 || peso > 100)
       {
           peso = parseInt(prompt("Error!! Ingrese peso valido"));
       }

       temperatura = parseInt(prompt("Ingrese temperatura de almacenamiento", "la temperatura debe ser entre -30 y 30"));
       while (temperatura < -30 || temperatura > 30)
       {
           temperatura = parseInt(prompt("Error!! Ingrese temperatura entre -30 y 30"));
       }
       //fin de ingreso y validacion de marca, peso y temperatura

       //calcula temperatura par
       if (temperatura % 2 == 0)
       {
           temperaturaPar++;
       }
       //termina de calcular temperatura par

       //temperatura menor a 0 grados
       if (temperatura < 0)
        {
            cantidadMenosCeroGrados++;
        }
        //fin de temperatura menor a 0 grados

        //peso maximo y minimo
        if (contador == 1)
		{
			max = peso;
			min = peso;
		}else
			{
				if (peso >= max)
				{
					max = peso;
				} if (peso <= min)
					{
						min = peso;
					}
            }
        //fin peso maximo y minimo

        promedio = contador / acumulador;
        
        respuesta = prompt("Desea agregar otro producto??");
    }
       

    document.write("La cantidad de temperaturas pares es: "+temperaturaPar+"<br>");//temperauras pares
    document.write("La marca del producto mas pesado es: "+marcaductoMasPesado+"<br>");
    document.write("Cantidad de productos que se conservan a menos de 0 grados es: "+cantidadMenosCeroGrados+"<br>");//productos que se conservan a menos de 0 grados
    document.write("El promedio de todos los productos es: "+promedio+"<br>");//promedio de todos los productos
    document.write("El peso maximo es: "+max+"<br>");//peso maximo
    document.write("El peso minimo es: "+min+"<br>");//peso minimo
}

// falta el punto 'B'
