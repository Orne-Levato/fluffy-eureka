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
    alert("Bienvenide a nuestra pagina web,"+nombreIngresado)
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

const numeroCincoo = 5

console.log(numeroCincoo * 99 )

console.log(numeroCincoo - 100)

for ( let a = 0; a < 10; a = a + 1 ){
    console.log("¡¡Oh no, entré en un bucleeee!!")
}

//for ( let i = 20; i < 50; i = i + 1 ){

//}