var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   
      },   
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
     500: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
     999: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1359: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


  var itemSwiper = new Swiper(".item-image", {

    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },   
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    
    },
  });


var itemSwiper = new Swiper(".right-el", {

  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },  
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
},
});
  
//   swiper.on("slideChange", function () {
//     console.log(swiper.realIndex);
    
       
//   });
  
//   function updateTextColor() {
//     // 현재 활성화된 슬라이드의 인덱스 가져오기
//     var activeIndex = swiper.realIndex;
  
//     // 각 슬라이드에 대한 텍스트 엘리먼트 선택
//     var textElements = $(".mySwiper .swiper-slide .slide-textbox .swiper-title"); // 여기서 .mySwiper 추가
  
//     // 모든 텍스트 엘리먼트에 대해 색상 초기화
//     textElements.css("color", "");
  
//     // 활성화된 슬라이드의 텍스트 색상 변경
//     textElements.eq(activeIndex).css("color", "#F28585");
//   }