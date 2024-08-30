/* Ejercicio 1: Función Callback Básica 
Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una 
función de callback. La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la 
función de callback. */
function mostrarMensaje(mensaje, callback) {
    console.log(mensaje)
    callback(mensaje)
}
mostrarMensaje('chupa culo', () => console.log('chupando culo en callback'))//esto no se rompe porque no tiene tipado, capaz recibe undifnied o null pero como no lo usa no lo podemos saber 
mostrarMensaje('chupa chichi', function (msj) { console.log(msj) })
////////////////////////////////////////////////////////////////////////////////////////////////
/* Ejercicio 2: Callback con Retorno de Datos 
Crea una función llamada `sumarAsync` que acepte dos números y una función de callback. 
Esta función debe sumar los números y luego llamar a la función de callback con el resultado. */
function sumarAsync(num1, num2, num3, callback) {
    callback(num1 + num2, num3)
}
sumarAsync(5, 10, 2, (num1, num2) => console.log(num1 + num2))//los parametros que vaya a recibir el callback se pueden mandar en los parametro de la funcion, o pueden provenir de funciones dentro de la function
///////////////////////////////////////////////////////////////////////////////////////////////
/* Ejercicio 3: Uso de setTimeout 
Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un 
número de milisegundos. La función debe llamar al callback después de la cantidad 
especificada de tiempo utilizando `setTimeout`. */
function retrasarEjecucionMasComplejo(millsec, callback, msj) {
    setTimeout(() => callback(msj), millsec)//setTimeout al igual que los metodos de arrays recibe una funcion, por lo que tendriamos que "encapsular" la callback en una funcion
}
retrasarEjecucionMasComplejo(3000, msj => console.log('esperando el setTimeout', msj), ' dale wacho')
//
function retrasarEjecucion(millsec, callback) {
    setTimeout(callback, millsec)//si la callback no recibe parametro puede no llevar parentesis, y en el setTimeout tampoco necesita ser invocada desde una function
}
retrasarEjecucion(3000, () => console.log('esperando el setTimeout'))
///////////////////////////////////////////////////////////////////////////////////////////////
/* Ejercicio 4: Callback Anidado 
Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener 
datos de usuario. Esta función debe aceptar un ID de usuario y una función de callback. Luego, 
dentro de la función, debes simular una solicitud a una API y, cuando se complete, llamar a la 
función de callback con los datos del usuario. */
const getData = id => {
    return {
        nombre: 'ivi',
        ocuapacion: 'developer',
        id: id
    }
}
function obtenerDatosUsuario(id, callback) {
    data = getData(id)
    callback(data)
}
obtenerDatosUsuario(1, data => console.log(data))
////////////////////////////////////////////////////////////////////////////////////////////
/* Ejercicio 5: Promesas y Callbacks 
Modifica el ejercicio 4 para que en lugar de utilizar callbacks, utilice promesas para manejar la 
solicitud de datos de usuario.  */