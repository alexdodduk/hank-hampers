$(document).ready(function () {
    var windowHeight = window.innerHeight,
        windowWidth = window.innerWidth,
        title = $('h1'),
        maxWidth = 750;
    
    resizeTitle();
    repositionTitle();
    
    $(window).resize(function () {
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth;
        
        resizeTitle();
        repositionTitle();
        setBackgroundSize();
    });
    
    function resizeTitle() {
        var elementWidth = title.width(),
            elementHeight = title.height();
        
        while (elementWidth < Math.min(windowWidth, maxWidth)) {
            elementHeight++;
            title.attr('style', 'font-size: ' + elementHeight + 'px; line-height: ' + elementHeight + 'px;');
            elementWidth = title.width();
        }
    }
    
    function repositionTitle () {
        var titleHeight = title.height(),
        margin = (windowHeight / 2) - (titleHeight / 2);
        
        title.attr('style', 'margin-top:' + margin + 'px; font-size: ' + titleHeight + 'px; line-height: ' + titleHeight + 'px;');
    }
    
    function setBackgroundSize() {
        var background = $('#background'),
            image = background.style('backgroundImage');
        
        background.attr('style', 'background-image: ' + image + '; width: ' + windowWidth + 'px; height: ' + windowHeight + 'px;')
    }
});