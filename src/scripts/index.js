//import '../styles/index.scss';

console.log('corriendo npm run dev');

//Notas
/* diferencia entre var y let
var se usa para declarar variables globales.
let se usa pra declarar variable locales con scope de donde se declara */
let local = "variable de programa";
var varGlobal = "variable Global";
if (true) {
  //solo tiene alcance dentro del bloque del if
  let local = "solo vive acá";
  //alcance global cambia la salida
  var varGlobal = "vive en todo el programa";

}
console.log(local, varGlobal); // local no cambia

//-------------------------------------------------------//
// Destructuring Arrays
//-------------------------------------------------------//

let numeros = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8
];

let [primero, segundo, ...resto] = numeros;
console.log(primero, segundo, resto);

//Tambien se puede ignorar los primeros datos dejando una coma//

let ignorePrim,
  ignoreSeg,
  sobrantes;
[
  ,, ...sobrantes
] = numeros;
console.log(ignorePrim, ignoreSeg, sobrantes);

//Tambien se puede usar en funciones multiples valores
funcPruebaArray(segundo, sobrantes);
function funcPruebaArray(entrada, ...arreglo) {
  console.log("esta es la entrada: ", entrada);
  console.log("este es el arreglo: ", arreglo);
}

//-------------------------------------------------------//
// Variables dentro de objetos, decoradores
//-------------------------------------------------------//
//Se tiene q poner la variable punto su objeto
let automovil = {
  id: 1,
  tipo: "campero"
};
console.log(automovil.id, automovil.tipo);

// se asignan las variables
let {id, tipo} = automovil;
console.log(id, tipo);

// son variables indefinidas por el nombre del decorador
let idAuto,
  tipoAuto;
({idAuto, tipoAuto} = automovil);
console.log(idAuto, tipoAuto);

// Se pone entre parentesis el valor de los decoradores
//let id, tipo; ya se declaron
({id, tipo} = automovil);
console.log(id, tipo);

//-------------------------------------------------------//
// Spread Syntax
//-------------------------------------------------------//

function spreadSyntax(ent1, ent2, ent3, ...elResto) {
  console.log("entrada 1: ", ent1, "entrada 2: ", ent2, "entrada 3: ", ent3, "El resto: ", elResto);
}
//lo de la derecha se asigna a la variable(s) de la izquierda
let arrEnt = [
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis"
];
spreadSyntax(...arrEnt);

//-------------------------------------------------------//
// Convirtiendo tipos de datos
//-------------------------------------------------------//

//debe empezar por numero, pero puede contener otros caracteres
console.log(Number.parseFloat('44.34asf*/dfs'));
console.log(Number.parseInt("23/%#$"));

//-------------------------------------------------------//
// comparaciones con === y ==
//-------------------------------------------------------//

//el negado es != y !==
console.log(1 == true, true); //true => compara convirtiendo la variable
console.log(1 === true); //false => compara si son identicos
let comparar = 123;
console.log(comparar === "123"); // false => son de diferente tipo
console.log(comparar == "123", true); // true => son iguales al convertirlas

//-------------------------------------------------------//
// Unary Operators  ++ --
//-------------------------------------------------------//

//reglas de post incremento y preincremento iguales a java
let [numString, numString2] = ["352", "845"]; //declaracion en array
// let numString ="435", numString2 = "845"; declaracion uno a uno
console.log(typeof(numString), numString); //Es un String
console.log(typeof(+ numString), + numString); //convierte a num positivo
console.log(typeof(-numString2), -numString2); //Number negativo

//-------------------------------------------------------//
// IIFE'S  Immediately Invoked Function Expresion
//-------------------------------------------------------//

//van entre parentesis y llevan un par al final (funcion(){})();
let app = (function() {
  let carid = 852;
  console.log('ImmeInvoFuncExpresion');
  return {};
})();
console.log(app);

//-------------------------------------------------------//
// Closures and this keyword
//-------------------------------------------------------//
//Se retorna una referencia a otra funcion
let closure = (function() {
  let valor = 345;
  let llamar = function() {
    return valor;
  };
  return {llamar: llamar};
})();
console.log(closure.llamar());
console.log(closure);

//---> this keyword
//nota: se separan las etiquetas con coma y el ultimo no lleva
let thisKeyWord = {
  varContexto: "vive aca",
  otraVarThis: function() {
    console.log(this);
    return this.varContexto;
  }
};
console.log(thisKeyWord.otraVarThis());

//-------------------------------------------------------//
// call(),  apply(),   and bind()
//-------------------------------------------------------//

//---> call() cambia el valor de this methodName.call(context, arguments)

let ejCall = {
  etiqueta: 'a cambiar',
  etiqFunct: function() {
    return "Este es el valor a: " + this.etiqueta;
  } //como el la ultima no lleva coma
};
console.log(ejCall.etiqFunct());
//creo un nuevo objeto para remplazar el del Contexto
let cambioCall = {
  etiqueta: "Cambiado"
};
console.log(ejCall.etiqFunct.call(cambioCall));

//--> Apply methodName.apply(context, [arguments])

let ejApply = {
  varConApply: 'valor asignado',
  functApply: function(prefijo, sufijo) {
    return prefijo + this.varConApply + sufijo;
  }
};
let varNuevaApply = {
  varConApply: "valor nuevo"
};
console.log(ejApply.functApply.apply(varNuevaApply, ["se dio un", "a esta variable"]));

//--> Bind
//sirve para crear una nueva funcion con el nuevo contexto

let funContex1 = {
  varFunContex1: "contex primer funct",
  functFunContex1: function() {
    return this.varFunContex1;
  }
};
let contexFunt2 = {
  varFunContex1: "context2Function"
};
let funtContex2 = funContex1.functFunContex1.bind(contexFunt2);
console.log(funtContex2());

//-------------------------------------------------------//
// Arrow Functions
//-------------------------------------------------------//

//Es un decorador para resumir funciones
let functWithoutArrow = function(param1) {
  return "param1:" + param1;
};
console.log(functWithoutArrow("parametro entrada Uno sin flecha"));

let functWithArrow = paramUno => "paramUno" + paramUno;
console.log(functWithArrow("parametro entrada Uno con flecha"));

//Si no hay parametros de entrada se puede usar _ en vez de ()
let functArrowWitoutParam = _ => "Función sin parametros";
console.log(functArrowWitoutParam());

//Funcion Arrow compleja, si lleva {} debe tener "return"
// let functArrawReturn = function (param1, param2) {
let functArrawReturn = (param1, param2) => {
  //con mas contenido
  param1++;
  param2 = param1 + param2;
  return param2;
};
console.log(functArrawReturn(1, 1));

//-------------------------------------------------------//
// Default Parameters
//-------------------------------------------------------//

function paramDefault(ciudad = "Bogotá", pais = "Colombia") {
  console.log(`ciudad: ${ciudad} ubicada en : ${pais}`);
}
paramDefault("Cúcuta");

//-------------------------------------------------------//
// Constructor Function
//-------------------------------------------------------//

//--> se empieza con mayuscula por convencion

function ConstructorFunt(nomb) {
  this.nombre = nomb;
}
// Se crea un objeto con el contructor cargando las variables this
let constructorFunt = new ConstructorFunt("Eduard");
console.log("imprime el nombre: ", constructorFunt.nombre);

//--> Ejemplo 2

function Persona(nomb, apellido, tel = 0) {
  this.nombre = nomb;
  this.apellido = apellido;
  this.nombreCompleto = nomb + " " + apellido;
  this.tel = tel;
}
let persona = new Persona("Eduard", "Duarte");
console.log(persona.nombreCompleto);

//-------------------------------------------------------//
//  Methods
//-------------------------------------------------------//

//--> Son funciones asignadas con this

function Carro(marca) {
  this.marca = marca;
  this.numPuertas;
  //method set num puertas
  this.setPuertas = function(numPuert) {
    this.numPuertas = numPuert;
  };
  this.getDescrip = function() {
    return "Este es un carro: " + this.marca + " que tiene " + this.numPuertas + " Puertas!";
  };
};
//Creo el objeto carro con New
let carro = new Carro("Toyota");
//Utilizo el method setPuertas
carro.setPuertas(5);
console.log(carro.getDescrip());

//-------------------------------------------------------//
//  Prototype Class.prototype.method = function (arguments)
//-------------------------------------------------------//

//--> Separa los metodos (funciones) del constructorFunt

function Usuario(nomb, apell, edad = 1) {
  this.nombre = nomb;
  this.apellido = apell;
  this.edad = edad;
}
//Aca se crea el nuevo method del contructor
Usuario.prototype.nombreComplet = function() {
  return this.nombre + " " + this.apellido;
};
//Se invoca con el nombre del objeto punto nombre del method
let usuario = new Usuario("Laudice", "Sepulveda");
console.log(usuario.nombreComplet());

//-------------------------------------------------------//
//  Expanding Objects Using Prototypes
//-------------------------------------------------------//

//--> Dar nuevas funcionalidades a los objetos

String.prototype.saludar = function() {
  return this.toString() + " Como Estas?";
};

console.log("Eduard".saludar());

//-------------------------------------------------------//
//  JSON -> JavaScript Object Notation
//-------------------------------------------------------//

//--> Es para transmitir objetos por API's HTTP
let objetoJS = {
  propiedad1: "valor 1ra propiedad",
  valNum: 23,
  propiedad2: 'valor 2da propiedad',
  propiedad3: "valor 3ra propiedad"
}; //Esto es un objeto JS no es un JSON
//--> Se realiza la conversion con JSON.stringify
console.log(JSON.stringify(objetoJS));
//{"propiedad1":"valor 1ra propiedad","valNum":23,"propiedad2":"valor 2da propiedad","propiedad3":"valor 3ra propiedad"}

//--> Para convertir usar JSON.parseInt

let JSONin = `
  [
    {"valor": 1},
    {"valor": 5},
    {"valor": 8}
  ]
`;
let valoresIn = JSON.parse(JSONin);
console.log(valoresIn[1].valor, valoresIn);

  
