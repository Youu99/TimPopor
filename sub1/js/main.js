
// 메인 슬라이더

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init:function(){
        let pagebar2 = document.getElementsByClassName("pagebar2")[0];
        pagebar2.animate([
          {left:-200},
          {left:0}
        ],{
          duration: 4200,
          iterations: 1,
        }) 
      }
      ,
      slideChange: function () {
        let pagebar2 = document.getElementsByClassName("pagebar2")[0];
        pagebar2.animate([
          {left:-200},
          {left:0}
        ],{
          duration: 4200,
          iterations: 1,
        })
      },
    
    }
  });


  



  

  




 

