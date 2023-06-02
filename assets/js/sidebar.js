var sidebarNav = document.getElementById('sidebar-nav')
var links = sidebarNav.getElementsByTagName('li')
links = [...links]
links.forEach((link) => {
    link.addEventListener('click', () => {
        var elemento = document.querySelector('.active')
        if (elemento) {
            elemento.classList.remove('active')
        }
        link.classList.add('active')
    })
});

