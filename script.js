const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    let elemC = document.querySelector(".elem-container");
let fixed = document.querySelector(".fixed-img");

elemC.addEventListener("mouseenter", function() {
    fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", function() {
    fixed.style.display = "none";
});

let elems = document.querySelectorAll(".elem");
elems.forEach(function(e) {
    e.addEventListener("mouseenter", function() {
        let img = e.getAttribute("data-image");
        console.log(img);
        fixed.style.backgroundImage = `url(${img})`
    })
});
}



function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });    
}

swiperAnimation();
page4Animation();

let full = document.querySelector("#full-scr");
let menu = document.querySelector("nav h3");
let navimg = document.querySelector("nav img");
let flag = 0;
menu.addEventListener("click", function() {
    if(flag == 0) {
        full.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    }else {
        full.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
    }
})

let loader = document.querySelector("#loader");
setTimeout(function() {
    loader.style.top = "-100%";
}, 3700);

