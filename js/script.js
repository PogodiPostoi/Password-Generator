//TODO: https://html5css.ru/howto/howto_js_copy_clipboard.php -- Копирование в буфер обмена пароля из поля

const menu = document.getElementById('menu__toggle')
const button = document.getElementById('generate')


// * Бургер-меню. Запрет на скролл при активном меню

menu.addEventListener('click', () =>  document.body.classList.toggle('noScroll'))

// * Генератор пароля
//TODO: Разобраться с багом по min, max
const generator = () => Math.floor(Math.random() * (max + 1 - min) + min)
const generateRandomLowerCase = () => String.fromCharCode(97, 122)
const generateRandomUpperCase = () => String.fromCharCode(65, 90)
const generateRandomSymbols = () => {
    const symbols = "~*$%@#^&!?'-=/,.{}()[]<>"
    return symbols[generator(0, symbols.length - 1)]
}

const generate = () => {
    let password = ''

    let length = +document.getElementById('length').value

    let lowerCase = document.getElementById('lowerCase').checked
    let upperCase = document.getElementById('upperCase').checked
    let symbols = document.getElementById('symbols').checked
    let numbers = document.getElementById('numbers').checked

    if (lowerCase + upperCase + symbols + numbers <= 0) {
        return
    }

    for (let i = 0; i < length; i++) {
        const k = generator(0, 3)
        if (lowerCase && k === 0) {
            password += generateRandomLowerCase()
        } else if (upperCase && k === 1) {
            password += generateRandomUpperCase()
        } else if (symbols && k === 2) {
            password += generateRandomSymbols()
        } else if (numbers && k === 3) {
            password += generator(0, 9)
        } else {
            i --
        }
    }
    document.getElementById('result').textContent = password
}

button.addEventListener('click', () => generate())