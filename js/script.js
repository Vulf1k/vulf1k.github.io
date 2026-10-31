//theme-switcher
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const blueLogo = document.getElementById('blue-logo');
const greenLogo = document.getElementById('green-logo');
const redLogo = document.getElementById('red-logo');

let currLogo = greenLogo;
let leftLogo = blueLogo;
let rightLogo = redLogo;

function updateLogoClasses() {
    currLogo.classList.remove(currLogo.className);
    currLogo.classList.add('center-logo');
    leftLogo.classList.remove(leftLogo.className);
    leftLogo.classList.add('left-logo');
    rightLogo.classList.remove(rightLogo.className);
    rightLogo.classList.add('right-logo');
}

leftBtn.addEventListener('click', () => {
    blueLogo.style.zIndex = '';
    redLogo.style.zIndex = '';
    switch (currLogo) {
        case greenLogo:
            currLogo = redLogo;
            leftLogo = greenLogo;
            rightLogo = blueLogo;
            break;
        case blueLogo:
            blueLogo.style.zIndex = '99';
            currLogo = greenLogo;
            leftLogo = blueLogo;
            rightLogo = redLogo;
            break;
        case redLogo:
            redLogo.style.zIndex = '99';
            currLogo = blueLogo;
            leftLogo = redLogo;
            rightLogo = greenLogo;
            break;
    }
    updateLogoClasses();
});

rightBtn.addEventListener('click', () => {
    greenLogo.style.zIndex = '';
    blueLogo.style.zIndex = '';
    switch (currLogo) {
        case greenLogo:
            greenLogo.style.zIndex = '99';
            currLogo = blueLogo;
            leftLogo = redLogo;
            rightLogo = greenLogo;
            break;
        case blueLogo:
            blueLogo.style.zIndex = '99';
            currLogo = redLogo;
            leftLogo = greenLogo;
            rightLogo = blueLogo;
            break;
        case redLogo:
            currLogo = greenLogo;
            leftLogo = blueLogo;
            rightLogo = redLogo;
            break;
    }
    updateLogoClasses();
});


//sidebar functionality
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


//particles
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


//random text generating
const rtg = document.getElementById('rtg');
const rtg_btn = document.querySelector('.reroll-btn');
const wrap = document.querySelector('.text-wrap');
const PX_PER_SEC = 140;

fetch('./js/list_of_phrases.json')
    .then((response) => {
        return response.json();
    })
    .then((list_of_phrases) => {
        let currentIndex = -1;

        const showRandom = () => {
            let i;
            do {
                i = Math.floor(Math.random() * list_of_phrases.length);
            } while (i === currentIndex);
            currentIndex = i;
            rtg.textContent = list_of_phrases[i];

            rtg.style.animation = 'none';
            void rtg.offsetWidth;
            rtg.style.animation = '';
            setDuration();
        };

        showRandom();
        rtg_btn.addEventListener('click', showRandom);
    })
    .catch((err) => console.error('Не удалось загрузить фразы:', err));

function setDuration() {
    if (!rtg || !wrap) return;
    const distance = rtg.scrollWidth + wrap.clientWidth;
    const seconds = Math.max(6, distance / PX_PER_SEC);
    rtg.style.animationDuration = seconds + 's';
}

setDuration();
window.addEventListener('resize', setDuration);