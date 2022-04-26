/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}

class Heroe extends PersonaNormal {
    constructor(
        public alterEgo: string,
        public nombreReal: string,
        public direccion: string,
        public edad?: number
    ) {
        super(nombreReal, direccion)
    }
}

const ironMan = new Heroe('IronMan', 'Tony Stark', 'Calle pepe', 33);

console.log(ironMan)

