$(document).ready(function(){
    $('#gallery').slick({
        dots: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    
    $('#open').click(function () {
        $('#gallery, #overlay, #hide').fadeIn();
        $('#gallery').slick('slickGoTo', 0, true);
    });
    
    $('#hide, #overlay').click(function () {
        $('#gallery, #overlay, #hide').fadeOut();
        $('#hide').fadeOut();
    });
    
    $('#overlay').height($(window).height());
    
    $('#gallery, #overlay').hide().removeClass('hidden');
});