/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
    var nota = 0;
    var sexo;
    var contador = 0;
    var acumulador = 0;
    var promedio;
    var min;
    var cantidadDeVarones = 0;

    while (contador < 5)//Repite 5 veces
    {
        contador++;
        nota = parseInt(prompt("Ingrese nota: "));
        acumulador += nota;

        //validacion de nota
        while(nota < 0 || nota > 10 || isNaN(nota))
        {
            nota = parseInt(prompt("Ingrese nota valida: "));
        }//fin de validacion de nota

        sexo = prompt("Ingrese sexo: ", "Ingrese 'f' o 'm'").toLowerCase();
        
        //cuantos varones con notas mayores a 6
        if (sexo == 'm' && nota >= 6)
        {
            cantidadDeVarones++;
        }//fin de cuantos varones con notas mayores a 6

        //Validacion de sexo
        while(sexo != 'f' && sexo != 'm')
        {
            sexo = prompt("Ingrese sexo valido:", "Ingrese 'f' o 'm' ");

        }//fin de validacion de sexo
        
        //nota minima
        if (contador == 1 && sexo == 'm' && sexo == 'm')
		{
			min = nota;
		}else
			{
				if (nota <= min)
				{
					min = nota;
				}
			}// fin nota minima
    }

        promedio = acumulador / contador;//saca promedio

        alert("El promedio es: "+promedio); // muestra promedio 
        alert("La nota mas baja es: "+min+ " y el sexo de la persona es: "+sexo); //muestra nota mas baja y sexo de la persona

        if (cantidadDeVarones > 1)
        {
            alert("Hay "+cantidadDeVarones+" varones con notas mayores o iguales a 6"); //cantidad de varones con notas mayores a 6
        } else if (cantidadDeVarones == 1)
            {
                alert("Hay "+cantidadDeVarones+ " varon con la nota mayor o igual a 6"); // lo mismo pero si hay solo una persona
            }
}

/* falta hacer que la nota incorrecta no se sume y ver que sexo va con cada nota.. 
- la nota incorrecta se suma como si fuese una nota valida
- y nose como guardar el sexo con la nota */
