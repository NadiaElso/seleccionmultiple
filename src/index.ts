let sueldoActual: number = Number(prompt("Ingrese su sueldo actual"));
let sueldoConAumento: number;
let aumento: number;

switch (true) {
  case sueldoActual > 0 && sueldoActual <= 15000:
    aumento = sueldoActual * 0.2;
    sueldoActual = sueldoActual + aumento;
    console.log("Sueldo con aumento" + sueldoActual);
    break;

  case sueldoActual >= 15001 && sueldoActual <= 20000:
    aumento = sueldoActual * 0.1;
    sueldoActual = sueldoActual + aumento;
    console.log("Sueldo con aumento" + sueldoActual);
    break;

  case sueldoActual >= 20001 && sueldoActual <= 25000:
    aumento = sueldoActual * 0.5;
    sueldoActual = sueldoActual + aumento;
    console.log("Sueldo con aumento" + sueldoActual);
    break;

  case sueldoActual >= 25001:
    console.log("No hay aumento");

    break;

  default:
    break;
}
