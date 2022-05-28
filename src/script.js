const nav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.nav-toggle');
const dropdownBtns = document.querySelectorAll('.dropdown-link');

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    if (visibility === "false") {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        navToggle.src = "/icon-close-menu.36610790.svg";
        overlay = document.createElement('span');
        document.body.appendChild(overlay);
        overlay.classList.add('dim');
    } else if (visibility === "true") {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        navToggle.src = "/icon-menu.a07cb7a4.svg";
        document.body.prepend(overlay);
        document.body.removeChild(document.querySelector('.dim'));
    }
})

for (let i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener('click', function () {
        const paragraph = this.nextElementSibling;
        if (paragraph.hasAttribute('hidden')) {
            paragraph.removeAttribute('hidden');
            dropdownBtns[i].setAttribute('aria-expanded', true);
        } else {
            paragraph.setAttribute('hidden', true);
            dropdownBtns[i].setAttribute('aria-expanded', false);
        }
    })
}