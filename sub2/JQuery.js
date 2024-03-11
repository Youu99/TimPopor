// 네이비게이션 메뉴바

$(function () {
    $(".top_nav, #sub_nav_box").mouseover(function () {
        $("#sub_nav_box, .sub_nav").stop().slideDown(); $(".sub_nav").eq(0).stop().slideDown('slow');
    })

    $("#sub_nav_box").mouseout(function () {
        $("#sub_nav_box, .sub_nav").stop().slideUp()
        // $("").stop().slideUp()
    })
})

