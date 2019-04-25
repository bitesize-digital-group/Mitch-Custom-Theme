(function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
/* custom configuration goes here (www.olark.com/documentation) */
olark.identify('5489-448-10-3475');

$(function(){
    olark('api.box.onShrink', function() {
        $('#hbl-live-chat-wrapper').removeClass('d-block');
    });

    $('#need-help').click(function(){
        $('#hbl-live-chat-wrapper').addClass('d-block');
        olark('api.box.expand');    
    });

    $('.sidenav').sidenav({
        menuWidth: 300,
        closeOnClick: true,
        edge: 'right'
    });

    $('#scrollUp').click(function(){
		$("html, body").animate({scrollTop:0},"slow");
    });

    if($(window).scrollTop()  == 0) {
        $('#need-help').addClass('chat-button-animate');
    }

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