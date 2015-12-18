$(document).ready(function {
    var background = $('#background'),
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        image = new Image();
    
    image.onload = (function () {
        background.attr('style', 'background-image: url("' + this.src + '"); width: ' + windowWidth + 'px; height: ' + windowHeight + 'px;');
        show(background);
    });
    
    // choose an image at random
    image.src = 'images/' + Math.ceil(Math.random() * 6) + '.jpg';
    
    function show(element) {
        element.fadeIn(6000);
    }
});