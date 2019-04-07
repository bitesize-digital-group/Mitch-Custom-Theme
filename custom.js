$(function(){
    $('#need-help').click(function(){
        $('.chat-box-container').toggleClass('active');
        $('.chat-button-first-content').toggleClass('active');
        $('.chat-button-second-content').toggleClass('active');
    });

    $('.chat-box-icon-minimize').click(function(){
        $('.chat-box-container').removeClass('active');
        $('.chat-button-first-content').removeClass('active');
        $('.chat-button-second-content').removeClass('active');
    });

    $('.sidenav').sidenav({
        menuWidth: 300,
        closeOnClick: true,
        edge: 'right'
    });

    $('#scrollUp').click(function(){
		$("html, body").animate({scrollTop:0},"slow");
    });

    if($(window).scrollTop()  != 0) {
        $('#scrollUp').removeClass('d-none');
    }
    
    $(window).scroll(function(){
        if($(this).scrollTop() == 0) {
            $('#scrollUp').addClass('d-none');
        } else {
            $('#scrollUp').removeClass('d-none');
        }
    });
});