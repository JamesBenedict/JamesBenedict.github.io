$('#viewMore').click(function() {
   
    $('#extra-work').slideDown();
    $('html,body').animate({
            scrollTop: $(this).offset().top-50
        }, 1000);
    $('#viewMore').toggle();
    $('#viewLess').toggle();           
});

$('#viewLess').click(function() {
   
    $('#extra-work').slideUp(200);
    $('html,body').animate({
            scrollTop: $(this).offset().top-2000
        }, 1000);
    $('#viewMore').toggle();
    $('#viewLess').toggle() ;           
});

