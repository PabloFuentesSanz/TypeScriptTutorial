/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('HolaMundo')
let soyNumero = queTipoSoy(3)
let soyArray = queTipoSoy([1, 2, 3])

let soyExplicito = queTipoSoy<number>(100)