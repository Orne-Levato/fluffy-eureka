console.log ("probando 123")

const usuario = "Mi nombre"
const contrasenia = "1234"

const PreguntarUsuario = prompt("ingrese su usuario")
const PreguntarContraseña = prompt("ingrese su contraseña")

console.log( usuario === PreguntarUsuario && contrasenia === PreguntarContraseña )

if ( usuario === PreguntarUsuario && contrasenia === PreguntarContraseña ){
    alert ("Bienvenido!")
}
else {
    alert ("contraseña o usuario incorrectos")
}

