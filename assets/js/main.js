// Banner swiper
var bannerEl = document.getElementById('bannerSwiper');
if (bannerEl) {
    const bannerSwiper = new Swiper('#bannerSwiper', {
        loop: true,
        pagination: {
            el: '#bannerSwiper .swiper-pagination',
        },
        navigation: {
            nextEl: '#bannerSwiper .swiper-button-next',
            prevEl: '#bannerSwiper .swiper-button-prev',
        },
    });
}

// Stats swiper
var statsEl = document.getElementById('statsSwiper');
if (statsEl) {
    const statsSwiper = new Swiper('#statsSwiper', {
        loop: false,
        slidesPerView: "auto",
        freeMode: true,
        pagination: {
            el: '#statsSwiper .swiper-pagination',
        },
        navigation: {
            nextEl: '#statsSwiper .swiper-button-next',
            prevEl: '#statsSwiper .swiper-button-prev',
        },
        breakpoints: {
            767: {
                freeMode: false,
            },
        },
    });
}

// Stats swiper
let integrityEl = document.getElementById('integritySwiper');
if (integrityEl) {
    const integritySwiper = new Swiper('#integritySwiper', {
        loop: false,
        slidesPerView: 1,
        pagination: {
            el: '#integritySwiper .swiper-pagination',
        },
        navigation: {
            nextEl: '#integritySwiper .swiper-button-next',
            prevEl: '#integritySwiper .swiper-button-prev',
        },
    });
}


// Round swiper
let roundLinkEl = document.getElementById('roundLinkSwiper');
if (roundLinkEl) {
    var roundLinkSwiper = new Swiper("#roundLinkSwiper", {
        spaceBetween: 0,
        slidesPerView: 5,
        freeMode: false,
        watchSlidesProgress: true,
    });
    var roundContentSwiper = new Swiper("#roundContentSwiper", {
        spaceBetween: 0,
        loop: true,
        speed: 500,
        autoplay: true,
        navigation: {
            nextEl: "#roundContentSwiper .swiper-button-next",
            prevEl: "#roundContentSwiper .swiper-button-prev",
        },
        pagination: {
            el: '#roundContentSwiper .swiper-pagination',
        },

        thumbs: {
            swiper: roundLinkSwiper,
        },
    });
}

// Round swiper play and pause
var pauseSwiper = document.getElementById('pauseSwiper');
var playSwiper = document.getElementById('playSwiper');
if (pauseSwiper && playSwiper) {
    pauseSwiper.onclick = () => {
        roundContentSwiper.autoplay.stop();
        return false
    }

    playSwiper.onclick = () => {
        roundContentSwiper.autoplay.start();
        return false
    }
}


// Lightbox gallery Init
let gallery = document.querySelectorAll('.video-gallery');
if (gallery.length) {
    for (let i = 0; i < gallery.length; i++) {
        lightGallery(gallery[i], {
            plugins: [lgVideo],
            autoplayVideoOnSlide: true,
            zoom: true
        });
    }
}

// Play video on button click
var playBtn = document.getElementById('playButton');
var playVideo = document.getElementById('video');
if (playBtn && playBtn) {
    playBtn.onclick = () => {
        playVideo.click();

    }
}

// Open menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');



// Close menu
const closeMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
closeMenu('nav-close', 'nav-menu');


// close menu on all a tags
const navLink = document.querySelectorAll('.navbar a')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// gsap animations
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "play none none none",
    start: "top 85%",
});


ScrollTrigger.batch(".reveal-up", {
    onEnter: elements => {
        gsap.to(elements, {
            autoAlpha: 1,
            scaleY: 1,
            transformOrigin: "center bottom",
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.2
        });
    },
    once: true
});



// tabs

var tabLinks = document.querySelectorAll(".tab-link");
var tabContent = document.querySelectorAll(".tab-content");

tabLinks.forEach(function(el) {
    el.addEventListener("click", openTabs);
});

function openTabs(el) {
    var btnTarget = el.currentTarget;
    var tab = btnTarget.dataset.tab;

    tabContent.forEach(function(el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function(el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + tab).classList.add("active");

    btnTarget.classList.add("active");
}

// Marquee speed for mobile 

let marqueeEl = document.querySelectorAll(".marquee");
if (marqueeEl && window.innerWidth < 768) {
    marqueeEl.forEach(function(el) {
        el.setAttribute('scrollamount', 8, 0);
    });
}