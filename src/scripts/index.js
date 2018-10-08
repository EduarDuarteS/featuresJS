//import '../styles/index.scss';

console.log('corriendo npm run dev');

//Notas
/*
diferencia entre var y let
var se usa para declarar variables globales.
let se usa pra declarar variable locales con scope de donde se declara
*/
let local ="variable de programa";
var varGlobal ="variable Global";
if(true){
  //solo tiene alcance dentro del bloque del if
  let local ="solo vive acá";
  //alcance global cambia la salida
  var varGlobal = "vive en todo el programa";

}
console.log(local, varGlobal); // local no cambia

//-------------------------------------------------------//
// Destructuring Arrays                                  //
//-------------------------------------------------------//

let numeros = [1,2,3,4,5,6,7,8];

let [primero,segundo, ...resto]=numeros;
console.log(primero,segundo,resto);

//Tambien se puede ignorar los primeros datos dejando una coma//

let ignorePrim,ignoreSeg,sobrantes;
[,,...sobrantes]=numeros;
console.log(ignorePrim, ignoreSeg,sobrantes);

//Tambien se puede usar en funciones multiples valores
funcPruebaArray(segundo,sobrantes);
function funcPruebaArray(entrada,...arreglo) {
  console.log("esta es la entrada: ", entrada);
  console.log("este es el arreglo: ", arreglo);
}

//-------------------------------------------------------//
// Variables dentro de objetos, decoradores              //
//-------------------------------------------------------//
//Se tiene q poner la variable punto su objeto
let automovil ={id:1,tipo:"campero"};
console.log(automovil.id,automovil.tipo);

// se asignan las variables
let {id, tipo}=automovil;
console.log(id,tipo);

// son variables indefinidas por el nombre del decorador
let idAuto, tipoAuto;
({idAuto,tipoAuto}=automovil);
console.log(idAuto,tipoAuto);

// Se pone entre parentesis el valor de los decoradores
//let id, tipo; //ya se declaron
({id,tipo}=automovil);
console.log(id,tipo);

//-------------------------------------------------------//
// Spread Syntax                                         //
//-------------------------------------------------------//

function spreadSyntax(ent1,ent2,ent3,...elResto) {
  console.log("entrada 1: ",ent1,"entrada 2: ",ent2
  ,"entrada 3: ",ent3,"El resto: ",elResto);
}
//lo de la derecha se asigna a la variable(s) de la izquierda
let arrEnt = [ "uno","dos","tres","cuatro","cinco","seis"];
spreadSyntax(...arrEnt);


//-------------------------------------------------------//
// Convirtiendo tipos de datos                           //
//-------------------------------------------------------//

//debe empezar por numero, pero puede contener otros caracteres
console.log(Number.parseFloat('44.34asf*/dfs'));
console.log(Number.parseInt("23/%#$"));

//-------------------------------------------------------//
// comparaciones con === y ==                            //
//-------------------------------------------------------//

//el negado es != y !==
console.log(1==true, true); //true => compara convirtiendo la variable
console.log(1===true); //false => compara si son identicos
let comparar = 123;
console.log(comparar==="123"); // false => son de diferente tipo
console.log(comparar == "123", true); // true => son iguales al convertirlas

//-------------------------------------------------------//
// Unary Operators  ++ --                                //
//-------------------------------------------------------//

//reglas de post incremento y preincremento iguales a java
let [numString, numString2] = ["352", "845"]; //declaracion en array
// let numString ="435", numString2 = "845"; //declaracion uno a uno
console.log(typeof(numString),numString);//Es un String
console.log(typeof(+numString),+numString);//convierte a num positivo
console.log(typeof(-numString2), -numString2);//Number negativo

//-------------------------------------------------------//
// IIFE'S  Immediately Invoked Function Expresion        //
//-------------------------------------------------------//

(function() {
  'use strict';

}());

//-------------------------------------------------------//
// Closures and this keyword                             //
//-------------------------------------------------------//

//-------------------------------------------------------//
// call(),  apply(),   and bind()                        //
//-------------------------------------------------------//

//-------------------------------------------------------//
// Arrow Functions                                       //
//-------------------------------------------------------//
