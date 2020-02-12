const nav = document.getElementById('nav');
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const closeModal = document.getElementById('close');
const openModal = document.getElementById('open');
const modal = document.getElementById('modal');

// Open nav
openNav.addEventListener('click', () => {
    nav.classList.add('show-nav');
});

// Hide nav 
closeNav.addEventListener('click', () => {
    nav.classList.remove('show-nav');
});

// Remove toggle nav if window resize 
window.addEventListener('resize', () => {
    document.body.classList.remove('show-nav');
});

// Show modal 
openModal.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal 
closeModal.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);