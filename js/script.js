import { Modal } from './modal.js'
import { AlertError } from './error.js'
import { notNumber, calculaIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
document.addEventListener('input', () => {
    AlertError.close()
})
form.onsubmit = (event) => {
    event.preventDefault()
    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return
    }
    AlertError.close()
    const result = calculaIMC(weight, height)
    displayResultMessage(result)
}
function displayResultMessage(result) {
    const message = `Seu IMC é ${result}`
    Modal.message.innerText = message
    Modal.open()
}



