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


$(function(){
        
    $('#pop_icon1').click(function(){
        $(".pop_sub1").slideToggle()
    })
    $('#pop_icon2').click(function(){
        $(".pop_sub2").slideToggle()
    })

})


// 햄버거

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

  $(function(){
    $(".hamburger").click(function(){
        $("#pop_box").slideToggle()
        $("#main_nav").css("background-color","#f7f7f7")
       
    })
   
  })
