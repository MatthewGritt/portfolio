const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-container')

let menu = false

burger.addEventListener('click', () => {
    burger.classList.toggle('close')
    if (!menu) {
        nav.classList.add('slide')
        menu = true
    } else {
        nav.classList.remove('slide')
        menu = false
    }
    
})