import { Producto, calculaISV } from "./06-desectruturacion-func";

/*
    ===== Código de TypeScript =====
*/

const carritoCompra: Producto[] = [
    {
        desc: 'tele1',
        precio: 100
    },
    {
        desc: 'tel2',
        precio: 200
    }
];

const [total, isv] = calculaISV(carritoCompra)
console.log('Total', total)
console.log('ISV', isv)