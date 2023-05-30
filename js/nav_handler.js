const openNav = document.querySelector('.menu-toggle')
const closeNav = document.querySelector('.header-special .nav-close')
const headerNav = document.querySelector('.header-nav')


openNav.addEventListener('click', function () {
    if (!headerNav.classList.contains('active')) {
        headerNav.classList.remove('header-nav-hide')
        headerNav.classList.add('active')
        openNav.classList.add('menu-toggle-hide')
        headerNav.offsetWidth = headerNav.offsetWidth
    }
})


closeNav.addEventListener('click', () => {
    if (headerNav.classList.contains('active')) {
        headerNav.classList.add('header-nav-hide')
        setTimeout(() => {
            headerNav.classList.remove('active')
            openNav.classList.remove('menu-toggle-hide')
            }, 300);
    }
})
