$(function(){


//section1_2부터 scroll 이벤트 적용
    $(window).scroll(function(){

        var ws = $(this).scrollTop();

        /*section1_2의 변화값*/

        var s1_2 = $('#section1_2').offset().top;

        if ( ws > s1_2 - 700) {

            $('#s1_2_h1,#s1_2_p1,#s1_2_p2, .s1_2_3,.s1_2_4 ').css({"opacity": "1", "transform" : "translateY(0px)" });

        }else {
            $('#s1_2_h1,#s1_2_p1,#s1_2_p2, .s1_2_3,.s1_2_4 ').css({"opacity": "0", "transform" : "translateY(-30px)" });
        }

        /*section1_3의 변화값*/

        var s1_3 = $('#section1_3').offset().top;

        if ( ws > s1_3 - 700) {


            $('#s1_3_h1,#s1_3_p1,#s1_3_p2, .s1_3_5,.s1_3_6 ').css({"opacity": "1", "transform" : "translateY(0px)" });

        } else {
            $('#s1_3_h1,#s1_3_p1,#s1_3_p2, .s1_3_5,.s1_3_6 ').css({"opacity": "0", "transform" : "translateY(-30px)" });
        }



        /*section2의 변화값 */

        var s2 = $('#section2').offset().top;

        if (ws > s2-700) {

            $('.s2_1, #s2_h1, #box').css({"opacity": "1", "transform" : "translateX(0px)" });


        }else {
            $('.s2_1, #s2_h1, #box').css({ "opacity": "0", "transform" : "translateX(-30px)"});
        }



        /*section4의 변화값*/

    
        let s3 = $('#section3').offset().top;

        if (ws > s3-400) {
            $('#section3').css({ "background-color": "rgba(0, 0, 0, 1)", "color": "#fff" });
        }else {
            $('#section3').css({ "background-color": "transparent", "color": "transparent"});
        }
    });


    

});



/* 두 번째 section*/

function picture() {

    var basic_picture = Number(document.getElementById("total").defaultValue);

    let opts = document.querySelectorAll('.option');

    for ( let opt of opts) {
        if (opt.checked) basic_picture += Number(opt.value);
    }

    document.getElementById("total").value = basic_picture;
}

/*세 번째 section */

$(document).ready(function () {


    var pixelToMove = 50;

    $("#s3_img").mousemove(function (e) {

        var width = $(this).innerWidth();

        var height = $(this).innerHeight();

        var newValueX = (e.pageX / width) * pixelToMove;

        var newValueY = (e.pageY / height) * pixelToMove;

        $(this).css('background-position', newValueX + '%' + ' ' + newValueY + '%');

    });

});



  $(window).scroll(function(){

    let ws = $(this).scrollTop();
    let fixWrap = $('#section5').offset().top;
    let move = ws - fixWrap;
    let end = $('.content').width()-$(window).innerWidth();
    
          if(ws > fixWrap && ws < fixWrap+end){      
    
            $('.content').css('transform',`translateX(-${1.5*move}px)`);
    
          }else if(ws >= fixWrap+end) {
    
            $('.content').css('transform',`translateX(-${end}px)`);
    
          }
    
        });
    


   
        /* section6의 팝업창 */

        $(function(){
            $('#popup_Btn').click(function(){
              $('#boxWrap').fadeIn();
            });

            $("#cbtn").click(function(){
              $("#boxWrap").fadeOut();
            });
          });
    



        /*section6의 화살표 animate scrollTop: 0 */
        $(function(){
            $('#content_top').click(function(){
  
              $( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
  
              return false;
  
  
            });
          });


          