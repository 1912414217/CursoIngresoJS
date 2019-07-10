function mostrar()
{	/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

	var nota;

	nota = parseInt( (Math.random() *10) +1);

	if (nota > 8) {
		alert (+ nota + " EXCELENTE");
	} 
	
	else { 
		if (nota > 4) {
				alert (+ nota +" APROBÓ");
			}
			else {
				if (nota < 4) {
				alert (+ nota +" Vamos, la proxima se puede");
					}
				}
		}	
}