var numero = '';
let numeroInverso = '';

numero = prompt('Digite um número:');

const verifiqueSeEinverso = () => {
    for (var i = numero.length - 1; i >= 0; i--) {
        numeroInverso += numero[i]
    }
    return `O número digitado: ${numero}  E esse é o inverso ${numeroInverso}`;

}
console.log(verifiqueSeEinverso());