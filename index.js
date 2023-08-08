console.log ("probando 123")

//const usuario = "Mi nombre"
//const contrasenia = "1234"

//const PreguntarUsuario = prompt("ingrese su usuario")
//const PreguntarContraseña = prompt("ingrese su contraseña")

//console.log( usuario === PreguntarUsuario && contrasenia === PreguntarContraseña )

let nombreIngresado = prompt("Ingresar nombre")
let apellidoIngresado = prompt("Ingresar apellido")

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("nombre: "+nombreIngresado +"\napellido:"+apellidoIngresado);
    alert("Bienvenide a nuestra pagina web,"+" "+nombreIngresado)
} else{
    alert("error: ingresar nombre y apellido")
}

console.log(nombreIngresado +" "+ apellidoIngresado)

let edadIngresada = prompt("es usted mayor de edad? ingrese su edad por favor")


if(edadIngresada !=""){
    alert("Edad: "+edadIngresada);
} else{
    alert("que haces bobo? pone tu edad")
}
//identificador de edad
if(edadIngresada > 18) {
    alert("Usted es mayor de edad, puede pasar") 
     console.log("Tiene autorizacion de usar esta pagina web")
   
} else if ( edadIngresada < 18 ) {
    alert("Usted es menor de edad, no puede pasar.")
     console.log("No tiene auntorizacion de usar esta pagina web")
} else if (Boolean(edadIngresada) === false ) {
    alert("Ingrese una edad valida")
}



console.log(edadIngresada)


//if ( usuario === PreguntarUsuario && contrasenia === PreguntarContraseña ){
//    alert ("Bienvenido!")
//}
//else {
 //   alert ("contraseña o usuario incorrectos")
//}

const numeroPar = 12
  
const numeroImpar = 97

console.log("numeroImpar + numeroPar")

// ignorar lo de abajo
//let numeroCinco = 5;

//function multiplicarPorCinco(numero) {
    
   // if (numero % 2 !== 0) {
       
       // let resultado = numero * numeroCinco;
       // console.log(`El resultado de ${numero} x 5 es: ${resultado}`);
        //return resultado;
   // } else {
     //   console.log(`${numero} no es un número impar. No se realizará la multiplicación.`);
       // return null;
    //}
//}

// bucle
const numeroCincoo = 5

console.log(numeroCincoo * 99 )

console.log(numeroCincoo - 100)

for ( let a = 0; a < 10; a = a + 1 ){
    console.log("¡¡Oh no, entré en un bucleeee!!")
}

//for ( let i = 20; i < 50; i = i + 1 ){

//}

//probando array

const ListaRandom = [1, 2, 3, 4]

console.log(ListaRandom)

const listaRindim = new Array(1, 2, 3, 4) 

console.log(listaRindim)

// probando while
var contador = 1;

while (contador <= 5) {
  console.log("Número: " + contador);
  contador++;}

  // probando objeto

  const Persona = {
    nombre:"Messi" 
  }
  //tipo object
console.log(typeof Persona)
console.log(Persona.nombre)

// arrays

const MeGustasTu = ["los aviones", "viajar", "la mañana", "el viento", "soñar", "la mar"]

console.log(MeGustasTu)

//onsole.log(MeGustasTu.join("me gusta"))

//intente hacer el "me gustan los aviones, me gustas tu" pero no se que paso
console.log(MeGustasTu.join("me gusta "+MeGustasTu+", me gustas tu"))