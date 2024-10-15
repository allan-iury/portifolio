document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado com sucesso!');
    
    // Navbar responsiva
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });

    // Rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação de entrada dos projetos
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('project-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project').forEach(project => {
        projectObserver.observe(project);
    });

    // Efeito parallax simples
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('.background-blur');
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Botão de voltar ao topo
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = 'Topo';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});