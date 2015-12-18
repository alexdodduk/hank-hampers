(function () {
    var title = $('#title'),
        email = $('#email'),
        button = $('#open');
    
    show(title, 0, 4000);
    show(email, 1000, 2000);
    show(button, 2000, 2000);

    function show(element, delay, speed) {
        setTimeout(function () {
            element.hide();
            element.removeClass('invisible');
            element.fadeIn(speed);    
        }, delay);
    }
})();