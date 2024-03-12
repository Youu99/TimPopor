// var itemImages = document.getElementsByClassName('item-image');

// for (var i = 0; i < itemImages.length; i++) {
//   itemImages[i].addEventListener('click', showPopWrap);
// }

// function showPopWrap() {
//     console.log('click')
//     var popwraps =document.querySelectorAll('.popwrap');

//     popwraps.forEach(function(popwrap){
//         popwrap.style.display ='block';
//     })
// }

$('.item-title').click(function(){
    $('.popwrap').fadeIn();
})

$('.item-image img').click(function(){
    $('.popwrap').fadeIn();
})

$('.top-closebutton').click(function(){
    $('.popwrap').fadeOut();
})

$(".contentslist li").click(function(){
    let i=$(this).index();
    
    $(".popupbody").eq(i).show().siblings(".popupbody").hide();

});

