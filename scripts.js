// let navbar = document.querySelector('.navbar');
// menubar.onclick = () =>{
//   navbar.classList.toggle('active');
// }

// window.onscroll = () =>{
//   navbar.classList.remove('active');
// }

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
  
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  loop:true, 
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  loop:true, 
  // breakpoints:{
  //   0:{
  //     slidePerView:1,
  //   },
  //   640:{
  //     slidePerView:2,
  //   },
  //   768:{
  //     slidePerView:3,
  //   },
  //   1024:{
  //     slidePerView:4,
  //   },
  // },
});

//loading

function fadeOutLoader() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.classList.add('fade-out');

  // Remove the loader from the DOM after the fade-out animation completes
  loaderContainer.addEventListener('animationend', function() {
    loaderContainer.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(fadeOutLoader, 3000);// Apply fade-out after 3 seconds (3000 milliseconds)
});


