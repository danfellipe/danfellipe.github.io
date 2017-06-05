var $target = $('.anima'),
    animationClass = 'anima-start',
    offset = $(window).height() * 3/4;

function animaScroll() {
    var documentTop = $(document).scrollTop();
    
    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset) {
            $(this).addClass(animationClass);
        }else{
            $(this).removeClass(animationClass);
        }
    })
}
animaScroll();

$(document).scroll(function(){
    animaScroll();
    
})