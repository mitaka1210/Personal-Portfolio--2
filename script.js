$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });

  //$('.navbar .menu li a').click(function () {
  //  // applying again smooth scroll on menu items click
  //  $('html').css('scrollBehavior', 'smooth');
  //});

  //// toggle menu/navbar script
  //$('.menu-btn').click(function () {
  //  $('.navbar .menu').toggleClass('active');
  //  $('.menu-btn i').toggleClass('active');
  //});

  // typing text animation script
  typed = new Typed('.typing', {
    strings: ['Jr.Developer', 'Jr.Designer', 'Aquarist', 'Freelancer', 'Aviation engineer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  typed = new Typed('.typing-2', {
    strings: ['Jr.Developer', 'Aquarist', 'Jr.Designer', 'Freelancer', 'Aviation engineer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,

    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      200: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

//! SKILL

let ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 1;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay,
  })
  .add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay,
  })
  .add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay,
  })
  .add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay,
  })
  .add({
    targets: '.ml4 .letters-5',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: '.ml4 .letters-5',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay,
  })
  .add({
    targets: '.ml4 .letters-6',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: '.ml4 .letters-6',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay,
  })

  .add({
    targets: '.ml4 .letters-7',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: '.ml4 .letters-7',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay,
  })
  .add({
    targets: '.ml4 .letters-8',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: '.ml4 .letters-8',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay,
  })
  .add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500,
  });


  //! Add class to menu bar

  let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");
let menuBgr = document.querySelector('.navbar');

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
 
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});


window.onscroll = () => {
  if (window.scrollY > 300) {
    menuBgr.classList.add('sticky')
  }
  else {
    menuBgr.classList.remove('sticky')
  }
}
