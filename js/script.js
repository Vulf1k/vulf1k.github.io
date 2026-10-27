const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.sidebar-overlay');

menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    sidebar.classList.toggle('open');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

const container = document.querySelector('.particles-container');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 12 + 5;
    const delay = Math.random() * 10;
    const opacity = 0.075 * size - 0.05;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.setProperty('--particle-max-opacity', opacity);

    if (Math.random() > 0.5) {
        particle.style.backgroundColor = '#F2C94C';
    }
    container.appendChild(particle);
}

const rtg = document.getElementById('rtg');
const rtg_btn = document.querySelector('.reroll-btn');
const wrap = document.querySelector('.text-wrap');

const list_of_phrases = [
    'Random text 0_0',
    'That is not my address: Main street 67',
    'More information about the stalker`s plot can be found in the book Roadside Picnic by the Strugatsky brothers.',
    'Happiness for everybody, free, and no one will go away unsatisfied! - Arthur.',
    'The website is being developed since 4th October 2026',
    'print("Hello World!")',
    '/tp @a Vulf1k',
    'I use CatchyOS, btw',
    'It`s a beautiful day outside',
    'Shaw!',
    '🧿'
];

let rng_index = Math.floor(Math.random() * list_of_phrases.length);
rtg.textContent = list_of_phrases[rng_index];
const PX_PER_SEC = 140;

rtg_btn.addEventListener('click', () => {
    rng_index = Math.floor(Math.random() * list_of_phrases.length);
    rtg.textContent = list_of_phrases[rng_index];
    setDuration();
});

function setDuration() {
    const distance = rtg.scrollWidth + wrap.clientWidth;
    const seconds = Math.max(6, distance / PX_PER_SEC);
    rtg.style.animationDuration = seconds + 's';
}

setDuration();
window.addEventListener('resize', setDuration);