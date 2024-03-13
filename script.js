function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

 
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    slidesPerGroup:1,
    loop:true,
    spaceBetween: 5,

     autoplay: {
   delay: 3500,
 },

    LoopFillGroupWithBlank:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    virtual: {
      enabled: true,
      
    },
  });
  
//   var swiper = new Swiper('.swiper-container', {
//     loop: true, // Enable infinite loop
//     // Add other options as needed
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
  
