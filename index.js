const validacion01 = document.querySelector("#validacion1")

console.log(validacion01)

const validacion02 = document.querySelector("#validacion2")

console.log(validacion02)

const validacion03 = document.querySelector("#validacion3")

console.log(validacion03)

validacion03.onchange = (e) => {
    console.log(e.target.value)
}

// vamos a hacer una lista de clientes con lo que se ingrese al formulario
let clientes = []

//para que no se actualice la pag al enviar formulario
document.querySelector("form").onsubmit = ( event ) => {
    event.preventDefault()

    console.log("formulario enviado")

    clientes.push({
        nombre: validacion01.value,
        apellido: validacion02.value
    })

    console.log(clientes)
}



console.log(clientes)

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

     location.href = ".denegado/html"

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

for (let i = 0; i < MeGustasTu.length; i++) {
    console.log("Me gusta " + MeGustasTu[i] + ", me gustas tú.");
  }


 

validacion03.addEventListener("click", (event) => {
    console.log("me hacen click")
})

