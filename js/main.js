// 모바일 - Menu (슬라이드, 아코디언)
const menuStarterEl = document.querySelector('header .menu-starter');
const cloneMenuEl = document.querySelector('header .clone-menu');
const menuBarEl = cloneMenuEl.querySelector('.menu-bar');
const closeBtnEl = cloneMenuEl.querySelector('.btn--close');

menuStarterEl.addEventListener('click', function () {
    if (cloneMenuEl.classList.contains('on')) {
        hide()
    } else {
        show()
    }
});

closeBtnEl.addEventListener('click', function () {
    hide()
});
menuBarEl.addEventListener('click', function (event) {
    event.stopPropagation()
});

cloneMenuEl.addEventListener('click', function () {
    hide()
});

function show() {
    cloneMenuEl.classList.add('on');
}

function hide() {
    cloneMenuEl.classList.remove('on');

}



// ScrollMagic
const spyEls = document.querySelectorAll('.scroll-spy');

spyEls.forEach(function (spyEl) {

    let scene = new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .on('enter', function () {
            spyEl.classList.add('show');
            fadeIn();
        })
        .on('leave', function () {
            spyEl.classList.remove('show');
            fadeOut();


        })
        .addTo(new ScrollMagic.Controller());
});



// Fade-in 효과 함수선언
const fadeEls = document.querySelectorAll('.about .problem .fade-in');

function fadeIn() {
    fadeEls.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, .5, {
            opacity: 1,
            delay: (index + 1) * .4
        });

    });
}

function fadeOut() {
    fadeEls.forEach(function (fadeEl, index) {
        gsap.killTweensOf(fadeEl); // 진행 중인 애니메이션 중지

    });
}





// About solution Swiper
new Swiper('.about .solution .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    autoHeight: true,
    loop: true,
    autoplay: true,
    breakpoints: {
        430: {
            slidesPerView: "auto",
            spaceBetween: 20,
        }
    }
});

// Design Swiper
new Swiper('.design .swiper', {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000
    },
    navigation: {
        nextEl: ".design .swiper-button-next",
        prevEl: ".design .swiper-button-prev",
    },
    pagination: {
        el: ".design .swiper-pagination",
        clickable: true

    }
});

// Start-guide Grap Swiper
new Swiper('.start-guide .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    autoHeight: true,
    pagination: {
        el: '.start-guide .swiper-pagination',
        clickable: true
    },

    breakpoints: {
        640: {
            slidesPerView: "auto",
            spaceBetween: 20,
        }
    }
});

const slideEls = document.querySelectorAll('section.start-guide .swiper-slide');

slideEls.forEach(function (slideEl) {
    slideEl.addEventListener('mouseenter', function () {
        slideEl.classList.add('hover');

        slideEls.forEach(function (sibling) {
            if (sibling !== slideEl) {
                sibling.classList.remove('hover');
            }
        });

    });

});


//  Alert 
function notice() {
    alert("현재 준비 중 입니다. 정식 버전을 기대해 주세요!")
}