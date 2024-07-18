export { onScroll };

window.addEventListener('scroll', onScroll);

function onScroll() {
    const scrolled = window.scrollY;
    const coords = document.documentElement.clientHeight;
}