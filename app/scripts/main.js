// @see https://github.com/cferdinandi/smooth-scroll#options-and-settings
smoothScroll.init({
    offset: 50 // TODO: Pick a value that looks good
});

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 20) {
        document.querySelector('body').classList.add('minified-header');
    }
    else {
        document.querySelector('body').classList.remove('minified-header');
    }
});
