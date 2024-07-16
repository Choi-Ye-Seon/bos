// 모바일 - Menu (슬라이드, 아코디언)
const menuStarterEl = document.querySelector('header .menu-starter');
const cloneMenuEl = document.querySelector('header .clone-menu');
const menuBarEl = cloneMenuEl.querySelector('.menu-bar');
const closeBtnEl = cloneMenuEl.querySelector('.btn--close');

menuStarterEl.addEventListener('click', function() {
    if (cloneMenuEl.classList.contains('on')) {
        hide()
    } else {
        show()
    }
});

closeBtnEl.addEventListener('click', function() {
    hide()
});
menuBarEl.addEventListener('click', function(event) {
    event.stopPropagation()
});

cloneMenuEl.addEventListener('click', function() {
    hide()
});

function show() {
    cloneMenuEl.classList.add('on');
}

function hide() {
    cloneMenuEl.classList.remove('on');

}

// Intersection show/hide 효과
const io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.add('show');
    });
});

const showEls = document.querySelectorAll('.els');
showEls.forEach(function(el) {
    io.observe(el);
});

// Design Swiper
new Swiper('.design .swiper', {
    slidesPerView: "auto",
    // spaceBetween: 80,
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
    slidesPerView: "auto",
    // centeredSlides: true,
    // spaceBetween: 30,
    grabCursor: true
});