window.addEventListener("scroll", function () {
  let x = window.scrollY;
  // document.querySelector(
  //   ".wrappper__backgroup"
  // ).style.backgroundPosition = `50% ${x}px`;
  if (x > 0) {
    document.querySelector("header").classList.add("header--scroll");
  } else {
    document.querySelector("header").classList.remove("header--scroll");
  }
  if (x > 600) {
    document.querySelector("#back-top").style.opacity = "1";
    document.querySelector("#back-top").style.visibility = "visible";
  } else {
    document.querySelector("#back-top").style.opacity = "0";
    document.querySelector("#back-top").style.visibility = "hidden";
  }
});

$(".slidesCase").slick({
  dots: true,
  fade: false,
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        /* slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true, */
        adaptiveHeight: true,
        dots: false,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        fade: false,
      },
    },
  ],
});

$(".ourClients__images").slick({
  dots: false,
  slidesToShow: 5,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToScroll: 1,
  infinite: true,
  Swipe: true,
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        dots: false,
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        infinite: true,
        Swipe: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        dots: false,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        Swipe: true,
        infinite: true,
      },
    },
    {
      breakpoint: 580,
      settings: {
        dots: false,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        infinite: true,
        Swipe: true,
      },
    },
  ],
});
$(".slider-for").slick({
  slidesToShow: 1,
  /* slidesToScroll: 1, */
  arrows: false,
  fade: false,
  asNavFor: ".slider-nav",
  dots: false,
  /* autoplay: true,
  autoplaySpeed: 2000, */
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        dots: true,
      },
    },
  ],
});
$(".slider-nav").slick({
  slidesToShow: 6,
  arrows: false,
  asNavFor: ".slider-for",
  dots: false,
  infinite: false,
  focusOnSelect: true,
});

$(".slidesInsights").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

$(".tabsWithLeftMenu-content").slick({
  slidesToShow: 1,
  arrows: false,
  dots: false,
  slidesToScroll: 1,
  /* rtl: true, */
  fade: false,
  adaptiveHeight: true,
  asNavFor: ".tabsWithLeftMenu-tabs",
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        dots: true,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});
$(".tabsWithLeftMenu-tabs").slick({
  slidesToShow: 5,
  /* slidesToScroll: 1, */
  asNavFor: ".tabsWithLeftMenu-content",
  dots: false,
  /* centerMode: true, */
  focusOnSelect: true,
});

$(".tabsWithNumber__tabs").slick({
  slidesToShow: 1,
  arrows: false,
  dots: false,
  adaptiveHeight: true,
  slidesToScroll: 1,
  /* rtl: true, */
  fade: false,
  asNavFor: ".tabsWithNumber__numbers",
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        adaptiveHeight: true,
        dots: true,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});
$(".tabsWithNumber__numbers").slick({
  slidesToShow: 5,
  /* slidesToScroll: 1, */
  asNavFor: ".tabsWithNumber__tabs",
  dots: false,
  /* centerMode: true, */
  focusOnSelect: true,
});

if (document.querySelector(".slide-cards")) {
  $(".slide-cards").slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
  });
}

const item = document.querySelector(".menu-services");
item.querySelectorAll(".navbar-megamenu__tabs__link").forEach((i) => {
  i.addEventListener("mouseover", function () {
    item.querySelectorAll(".navbar-megamenu__tabs__link").forEach((a) => {
      a.classList.remove("tab-1-1");
    });
    i.classList.add("tab-1-1");
  });
});

const item1 = document.querySelector(".menu-technologies");
item1.querySelectorAll(".navbar-megamenu__tabs__link").forEach((i) => {
  i.addEventListener("mouseover", function () {
    item1.querySelectorAll(".navbar-megamenu__tabs__link").forEach((a) => {
      a.classList.remove("tab-2-1");
    });
    i.classList.add("tab-2-1");
  });
});

document.querySelector("#back-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
