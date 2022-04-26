/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

habilidades.push('New skill');

interface Personaje  {
    nombre:string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Pablo',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje)