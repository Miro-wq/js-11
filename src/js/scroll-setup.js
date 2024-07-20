export { onScroll };

window.addEventListener('scroll', onScroll);

function onScroll() {
    const scrolled = window.scrollY;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        console.log('Scrolled past viewport height');
    } else {
        console.log('Within viewport height');
    }
}
