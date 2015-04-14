// @see http://stackoverflow.com/a/8876069
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// Note: these will have to correspond to the values in $VIEWPORTS_CONFIG
function getHeaderCompensation() {
    if (w > 1024) return 50; // "static"
    if (w > 550) return 70; // "fluid"
    return 0; // "stacked"
}

// @see https://github.com/cferdinandi/smooth-scroll#options-and-settings
smoothScroll.init({
    offset: getHeaderCompensation()
});

window.addEventListener('scroll', function() {
    var scrollTop = Math.max(document.documentElement && document.documentElement.scrollTop || 0, document.body.scrollTop || 0);
    if (scrollTop > 20) {
        document.body.className = 'minified-header';
    }
    else {
        document.body.className = '';
    }
});
