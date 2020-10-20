
$(document).ready(function(){
    $(window).scroll(function(){
        $(".container-footer").css("opacity", 3 - $(window).scrollTop() / $('.container-footer').height());
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        $(".header-container").css("opacity", 1 - $(window).scrollTop() / $('.header-container').height());
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        $(".social-container").css("opacity", 1 - $(window).scrollTop() / $('.social-container').height());
    });
});

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/





/*$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $('.top').css("opacity", 1 - scrollVar/300);
})*/



