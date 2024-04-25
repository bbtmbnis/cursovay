const mySlider = new Splide('#mySlider', {
    perPage: 3,
    rewind: true,
    gap: '30px',
    arrows: false,
    perMove: 1,
    pagination: false,
    type: 'loop',
    focus: 'center',
    autoScroll: {
        speed: 0.7,
    },
})

mySlider.mount(window.splide.Extensions)


document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
    });
});


let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}



$(document).ready(function () {

    $('a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

});



SmoothScroll({
    animationTime: 800,
    stepSize: 75,

    accelerationDelta: 30,

    accelerationMax: 2,

    keyboardSupport: true,

    arrowScroll: 50,

    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    touchpadSupport: true,
})