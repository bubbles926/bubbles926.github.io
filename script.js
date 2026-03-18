// ── Page fade in on load ──
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.6s ease';
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 50);
});

// ── Flower petal animation on form submit ──
function createPetals() {
    const emojis = ['🌸', '🌺', '✿', '💮', '🌼'];
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.fontSize = (Math.random() * 20 + 16) + 'px';
        petal.style.animationDuration = (Math.random() * 2 + 2) + 's';
        petal.style.animationDelay = (Math.random() * 1.5) + 's';
        document.body.appendChild(petal);
        petal.addEventListener('animationend', () => petal.remove());
    }
}

// ── Thank you message on form submit ──
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            createPetals();

            const thanks = document.createElement('div');
            thanks.classList.add('thank-you-msg');
            thanks.innerHTML = '🌸 Thank you! We\'ll be in touch soon 💕';
            form.parentNode.insertBefore(thanks, form.nextSibling);

            form.reset();
            setTimeout(() => thanks.remove(), 4000);
        });
    });
});

// ── Fade in cards on scroll ──
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.classList.add('card-hidden');
        observer.observe(card);
    });
});