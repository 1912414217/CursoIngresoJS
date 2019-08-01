/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) 
de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6*/

function mostrar()
{
    var nota;
    var sexo;
    var contador = 0;
    var acumulador = 0;
    var promedio;
    var max;
    var min;

   while (contador < 5)//repite 5 veces
   {    
       contador++;
       nota = parseInt(prompt("Ingrese notas: "));
       acumulador += nota;
       
       while (isNaN(nota) || nota < 0 || nota > 10)//valida nota
       {
           nota = prompt("Ingrese nota valida: ");
       }
       

       sexo = prompt("Ingrese F o M: ").toLowerCase();
       
       while (sexo != 'f' && sexo != 'm') // valida sexo
       {
           sexo = prompt("Ingrese sexo valido");
       }

       if (contador == 1)
       {
			max = nota;
			min = nota;
		}
				if (nota >= max)
				{
					max = nota;
				} if (nota <= min)
					{
						min = nota;
					}
			

            alert(max);
            alert(min);
   }

    promedio = acumulador / contador;

    alert(promedio); 


}
