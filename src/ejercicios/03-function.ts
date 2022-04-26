/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFleacha = (a: number, b: number): number => {
    return a + b
}

function multiplicar(num: number, otroNum?: number, base: number = 2): number {
    return num * base
}

interface PersonajeLOR {
    nombre: string;
    hp: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.hp += curarX
}

const personajeLOR: PersonajeLOR = {
    nombre: 'Pablo',
    hp: 50,
    mostrarHp() {
        console.log('Puntos de vida de ', this.nombre + ':', this.hp)
    }
}

curar(personajeLOR, 30)
personajeLOR.mostrarHp()

/*const resultado = multiplicar(5, 0, 10)

console.log(resultado)*/