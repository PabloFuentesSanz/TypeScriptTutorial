/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number
}

const reproductor: Reproductor = {
    volumen: 30,
    segundo:36,
    cancion: 'Mess',
    detalles: {
        autor: 'Pepe',
        anio: 2000
    }
}

const {volumen, segundo, cancion: song, detalles} = reproductor
const {autor} = detalles

//const {detalles:{autor}} = reproductor Desectructuración inline
const {detalles:{autor: autorDetalle}} = reproductor //Desectructuración inline con cambio de nombre

console.log('El volumen actual es de: ', volumen)
console.log('El segundo actual es de: ', segundo)
console.log('La canción actual es de: ', song)
//const {detalles:{autor}} = reproductor Desectructuración inline

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

const [p1, p2, p3] = dbz;
const [, , personaje3] = dbz;

console.log('Personaje 1 ', p1)
console.log('Personaje 2 ', p2)
console.log('Personaje 3 ', personaje3)
