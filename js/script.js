$("document").ready(function (){

    // 자주하는 질문 아코디언
    var acc = $(".accordion-btn");
    var i;

    for(i=0; i<acc.length; i++) {
        acc.eq(i).click(function (){
            $(this).toggleClass("basic");
            $(this).next().toggle(100);
        })
    }

    // 스크롤 시 네비게이션 active 상태로 변경 
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.mobile-navi').addClass('active-bgColor');
            $('.mobile-navi__logo').addClass('active-bi');
            $('.mobile-navi__menu').addClass('active-menu');
        } else {
            $('.mobile-navi').removeClass('active-bgColor');
            $('.mobile-navi__logo').removeClass('active-bi');
            $('.mobile-navi__menu').removeClass('active-menu');
        }
    });

    // 결과 : 결과-카테고리 이미지 선택 시 해당 카테고리 결과 화면으로 이미지로 변경
    $('.slide-item a').click(function(){
        $('.result-screen').attr('src', $(this).attr('href'))
        return false;
    })
});