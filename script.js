let darkModeIcon = document.querySelector('#icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.principal-conteudo, .heading, .projects-fotos', { origin: 'top' });
ScrollReveal().reveal('.principal-img img, .projetos-container, .projetos-conteudo .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.principal-conteudo h1, .sobre-img img', { origin: 'left' });
ScrollReveal().reveal('.principal-conteudo h3, .principal-conteudo p, .sobre-conteudo', { origin: 'right' });