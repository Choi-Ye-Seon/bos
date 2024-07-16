$(document).ready(function() {
    // [PC] Header - GNB
    $("ul.menuWrap > li.main-menu").hover(function() {
        $("ul.sub-menu", this).stop().slideDown('fast');
    }, function() {
        $("ul.sub-menu", this).stop().slideUp('fast');
    });

    // [태블릿, 모바일] SUB MENU - Slide down/up
    $(".clone-menu li.main-menu").click(function(event) {
        event.stopPropagation();

        const submenu = $(this).find("ul.sub-menu");
        const isOpen = submenu.is(":visible");

        $(".clone-menu li.main-menu").removeClass('show').find("ul.sub-menu").slideUp('fast');

        if (!isOpen) {
            $(this).addClass('show');
            submenu.slideDown('fast');
        }
    });

    $(".clone-menu ul.sub-menu").click(function(event) {
        event.stopPropagation();
    });

    //[PC] BOS 시작가이드 - TAB
    $(".start-guide .tab-list").click(function() {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        let idx = $(this).index();

        $(this).parent().parent().siblings(".tab-con").removeClass("view");
        $(this).parent().parent().siblings(".tab-con").eq(idx).addClass("view");
    });





    // BOS 이용가이드
    $(".user-guide li.question").click(function(event) {
        event.stopPropagation();

        const answer = $(this).find("ul.answer");
        const isShow = answer.is(":visible");
        $(".user-guide li.question").removeClass('show').find("ul.answer").slideUp('fast');

        if (!isShow) {
            $(this).addClass('show');
            answer.slideDown('fast');
        }
    });

    // ul.sub-menu 클릭 시 이벤트 전파를 막아 상위 메뉴가 닫히지 않도록 함
    $(".user-guide ul.answer").click(function(event) {
        event.stopPropagation();
    });




});