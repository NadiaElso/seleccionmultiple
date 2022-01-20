let sueldoActual:number=Number(prompt("Ingrese su sueldo actual"));
let sueldoConAumento:number;
let descuento:number;



switch (true) {
  case  sueldoActual>0&&sueldoActual<=15000:
    descuento=sueldoActual*0.20;
    sueldoActual=sueldoActual-descuento;
    console.log(sueldoActual);
    break;

    case 1 sueldoActual>15001&&sueldoActual<=20000:
        descuento=sueldoActual*0.10;
        sueldoActual=sueldoActual-descuento;
        console.log(sueldoActual);
    break;

        case 2 sueldoActual>20001&&sueldoActual<=25000:
            descuento=sueldoActual*0.5;
            sueldoActual=sueldoActual-descuento;
            console.log(sueldoActual);
    break;

            case 3 sueldoActual>25000:
                descuento=sueldoActual*0.20;
                sueldoActual=sueldoActual-descuento;
                console.log(sueldoActual);
                            
    break;
console.log("No hay aumento");
  default:
    break;
}