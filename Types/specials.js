"use strict";
// any
const pais = 'Mexico';
// void
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}
// never
function retornaError(mensaje) {
    throw new Error(mensaje);
}
