$('#viewMore').click(function() {
   
    $('#extra-work-container').slideDown();
    $('html,body').animate({
            scrollTop: $(this).offset().top-100
        }, 1000);
    $('#viewMore').toggle();
    $('#viewLess').toggle();           
});

$('#viewLess').click(function() {
    $('#extra-work-container').slideUp(300);
    // $('html,body').animate({
    //         scrollTop: $(this).offset().top-1200
    //     }, 1000);
    $('#viewMore').toggle();
    $('#viewLess').toggle() ;           
});

