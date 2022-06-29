// any
const pais: any = 'Mexico';

// void
function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

// never
function retornaError(mensaje: string): never {
    throw new Error(mensaje);
}