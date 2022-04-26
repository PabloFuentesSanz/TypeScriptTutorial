/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia',
    precio: 200
}

const tablet: Producto = {
    desc: 'IPad',
    precio: 400
}

export function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({ precio }) => { //Desectructuración de argumentos
        total += precio
    })
    return [total, total * 0.15]
}

//const articulos = [telefono, tablet]
//const [total, isv] = calculaISV(articulos);

//console.log('Total', total)
//console.log('ISV', isv)