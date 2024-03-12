// 네이비게이션 메뉴바
$(function () {
    $(".top_nav, #sub_nav_box").mouseover(function () {
        $("#sub_nav_box, .sub_nav").stop().slideDown(); $(".sub_nav").eq(0).stop().slideDown('slow');
    })

    $("#sub_nav_box").mouseout(function () {
        $("#sub_nav_box, .sub_nav").stop().slideUp()
        
    })



})


$(function(){


    function prev(){
        $(".banner_main_slider li:last").prependTo(".banner_main_slider");
        $(".banner_main_slider").css({marginLeft:"-33.3%"});
        $(".banner_main_slider").stop().animate({marginLeft:0},1000)
    }
    
    function next(){
        $(".banner_main_slider").stop().animate({marginLeft:"-33.3%"},1000,function(){
            $(".banner_main_slider li:first").appendTo(".banner_main_slider");
            $(".banner_main_slider").css({marginLeft:0});
        })

  
  
    }

    setInterval(next,5000);


    $(".prev").click(function(){
        prev();
    })
    $(".next").click(function(){
        next();
        
    })

})


// 전체 소개 페이지

$(function(){


    $(".story_menu li").click(function(){
        let idx = $(this).index()/2
       $(".story_full_box").eq(idx).fadeIn().siblings('.story_full_box').fadeOut();      
    })

 
    $("#region_menu_box li").click(function(){
        let idx = $(this).index();
        $(".story_img_box2").eq(idx).fadeIn().css("display","flex").siblings('.story_img_box2').fadeOut();        
    })
    

})


// 호텔 세일 이벤트 페이지

$(function(){
    let idx = 0;

    function hotel_list(){
        idx++;

        if(idx>$("#hotel_list li:last").index()){
            idx=0;
        }
        $("#hotel_list li").eq(idx).fadeIn();
        $("#hotel_list li").eq(idx-1).fadeOut(0.2);
    }
    setInterval(hotel_list, 5000)
})


// 리뷰 페이지

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//   푸터

$(function(){

        function fot_top_slide(){
           $("#fot_top_slide").animate({marginTop:-150},function(){
            $('#fot_top_slide li:first').appendTo("#fot_top_slide");
            $("#fot_top_slide").css({marginTop:0});
           }) 
        }
        setInterval(fot_top_slide,6000)


        let hover = ["img/ico_sns1_1.png","img/ico_sns2_1.png","img/ico_sns3_1.png","img/ico_sns4_1.png","img/ico_sns5_1.png","img/ico_sns7_1.png","img/ico_sns9_1.png"]

        let hoverout = ["img/ico_sns1.png","img/ico_sns2.png","img/ico_sns3.png","img/ico_sns4.png","img/ico_sns5.png","img/ico_sns7.png","img/ico_sns9.png"]

        let idx = 0;

        $("#footer_img li").mouseover(function(){
            idx= $(this).index();
            $(this).find("img").attr("src",hover[idx])
            
        })
        $("#footer_img li").mouseout(function(){
            idx= $(this).index();
            $(this).find("img").attr("src",hoverout[idx])
            
        })

        function footer_img(){

        
            
        }

    })

     // 팝업창

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



    
    

   


        
 

