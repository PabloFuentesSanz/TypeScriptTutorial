function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABCD';

    imprimir() {
        console.log('HolaMundo')
    }
}

console.log(MiSuperClase)
const miClase = new MiSuperClase()
console.log(miClase)