// aos 추가

$(function () {
    // 서브메뉴 호버
    $('.nav>li').mouseover(function () {
        // $('.sub').stop().slideDown(500);
        $(this).addClass('on');
        $('.sub_bg').stop().slideDown();
    });

    $('.nav>li').mouseout(function () {
        // $('.sub').stop().slideUp();
        $(this).removeClass('on');
        $('.sub_bg').stop().slideUp();
    });

    $('.sub1').mouseover(function () {
        $('.nav>li:nth-child(1)').addClass('on').siblings().removeClass('on');
    });

    $('.sub2').mouseover(function () {
        $('.nav>li:nth-child(2)').addClass('on').siblings().removeClass('on');
    });

    $('.sub3').mouseover(function () {
        $('.nav>li:nth-child(3)').addClass('on').siblings().removeClass('on');
    });

    $('.sub4').mouseover(function () {
        $('.nav>li:nth-child(4)').addClass('on').siblings().removeClass('on');
    });

    $('.sub5').mouseover(function () {
        $('.nav>li:nth-child(5)').addClass('on').siblings().removeClass('on');
    });

    $('.sub').mouseout(function () {
        $('.nav>li').removeClass('on');
    });

    // 프로그램 탭메뉴
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn(1000);
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();

    // 푸터 위 로고
    $("#scroller").simplyScroll({
        speed: 1,
        pauseOnHover : false
    });
});

// 메인배너 슬라이드
var swiper4 = new Swiper(".bn-swiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    // allowTouchMove: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
  });

// 포스터 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1490: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1860: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
    },
});

// 영화비평 슬라이드
var swiper2 = new Swiper(".imgSwiper", {
    watchSlidesProgress: true,
    effect: "fade",
  });

var swiper3 = new Swiper(".textSwiper", {
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper2,
    },
});