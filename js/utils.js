export function notNumber(value){
    return isNaN(value) || value === '' || value === null
}

export function calculaIMC(weight, height) {
    const imc = (weight / (height / 100) ** 2).toFixed(2)
    return imc
}