$(document).ready(function () {
    var windowHeight = window.innerHeight,
        windowWidth = window.innerWidth,
        title = $('h1'),
        gallery = $('#gallery'),
        maxWidth = 750;
    
<<<<<<< HEAD
    repositionTitle();
=======
    resize(title);
    reposition(title);
    
    resize(gallery);
    reposition(gallery);
>>>>>>> origin/gh-pages
    
    $(window).resize(function () {
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth;
        
<<<<<<< HEAD
        repositionTitle();
    });
    
    function repositionTitle () {
        var titleHeight = title.height(),
        margin = (windowHeight / 2) - (titleHeight / 2);
        
        title.attr('style', 'margin-top:' + margin);
=======
        resize(title);
        reposition(title);
    
        resize(gallery);
        reposition(gallery);
        
        setBackgroundSize();
    });
    
    function resize(element) {
        var elementWidth = element.width(),
            elementHeight = element.height();
        
        while (elementWidth < Math.min(windowWidth, maxWidth)) {
            elementHeight++;
            element.attr('style', 'font-size: ' + elementHeight + 'px; line-height: ' + elementHeight + 'px;');
            elementWidth = title.width();
        }
    }
    
    function reposition (element) {
        var height = element.height(),
        margin = (windowHeight / 2) - (height / 2);
        
        element.attr('style', 'margin-top:' + margin + 'px; font-size: ' + height + 'px; line-height: ' + height + 'px;');
    }
    
    function setBackgroundSize() {
        var background = $('#background'),
            image = background.style('backgroundImage');
        
        background.attr('style', 'background-image: ' + image + '; width: ' + windowWidth + 'px; height: ' + windowHeight + 'px;')
>>>>>>> origin/gh-pages
    }
});