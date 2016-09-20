(function () {
    var windowHeight = window.innerHeight,
        windowWidth = window.innerWidth,
        title = $('h1'),
        maxWidth = 400;
    
    repositionTitle();
    
    $(window).resize(function () {
        windowHeight = window.innerHeight,
        windowWidth = window.innerWidth;
        
        repositionTitle();
    });
    
    function repositionTitle () {
        var titleHeight = title.height(),
        margin = (windowHeight / 2) - (titleHeight / 2);
        
        title.attr('style', 'margin-top:' + margin);
    }
}());