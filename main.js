let searchForm = document.querySelector('.search-form');
let cartBtn = document.querySelector('.shopping-cart');
let loginBtn = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');


document.querySelector('#search-btn').onclick = () =>{
     searchForm.classList.toggle('active');
     cartBtn.classList.remove('active');
     loginBtn.classList.remove('active');
     navbar.classList.remove('active');
};


document.querySelector('#cart-btn').onclick = () =>{
    cartBtn.classList.toggle('active'); 
    searchForm.classList.remove('active');
    loginBtn.classList.remove('active');
    navbar.classList.remove('active');
};


document.querySelector('#login-btn').onclick = () =>{
    loginBtn.classList.toggle('active');
    searchForm.classList.remove('active');
    cartBtn.classList.remove('active');
    navbar.classList.remove('active');
};


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active'); 
    searchForm.classList.remove('active');
    cartBtn.classList.remove('active');
    loginBtn.classList.remove('active');
};

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cartBtn.classList.remove('active');
    loginBtn.classList.remove('active');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });