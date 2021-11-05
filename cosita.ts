//boleano
let estado:boolean = true;
//estado = "isabel" // no se puede cambiar un booleano
estado = false;
// console.log(estado);

//string
let cadena:string = "Hola";

//Hay dos formas de definir un array en typescript
//opcion 1
const arrNum: number[] = [1,2,3,4,5];  // los arrays de preferencia declararlo como constante.
//opcion 2
const arrString : Array<string> = ['Juan', 'Pepe'] // no se puede agregar nros solo string


//tupla es un array
let tupla: [string, number] = ['hola', 5];
tupla = ['adios', 7];

//tipo enum
enum Size {
sm,
m,
l,
xl,
xll
}

console.log(Size);


//funciones
function sumar(pNumA: number, pnumB : number) : void{ // colocar p para saber que es parametro solo  para entender mejor - void por que no devuleve nada. Se le dice pinta
  console.log(pNumA + pnumB); //4
  sumar(1,3);
}


//Funciones que devuelva
const resta = (pNumberA :number, pNumberB:number):number =>pNumberA-pNumberB;
//Voy a recibir, retornar un number

resta(4,2); //2


//Hago una peticion con fetch. any: Cuando no sabes que vas a recibir. 
//Cajon de sastres 

let valor: any = "hola";
valor = 5;
valor = true;
valor = ['ss', 'ss']