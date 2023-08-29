$(document).ready(function (params) {
    $('#menu').click(function(params) {
     $(this).toggleClass('fa-times');
     $('header').toggleClass('toggle');   
    });
    $(window).on('scroll load', function (params) {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        
    });
    
});