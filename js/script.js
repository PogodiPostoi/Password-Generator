const menu = document.getElementById('menu__toggle')

// Бургер-меню. Запрет на скролл при активном меню
menu.addEventListener('click', () =>  document.body.classList.toggle('noScroll'))