// 메뉴바
let lastScroll = 0;
const nav = document.querySelector(".menu-wrap");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 600) {
    // 아래로 스크롤
    nav.classList.add("hide");
    nav.classList.remove("show");
  } else {
    // 위로 스크롤
    nav.classList.add("show");
    nav.classList.remove("hide");
  }

  lastScroll = currentScroll;
});


// 메인 슬라이드
const swiperMain = new Swiper('.main-swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  on: {
    init: function () {
      moveProgressBar(this.realIndex); // 초기 슬라이드 인덱스에 맞춰 프로그래스 바 이동
    },
    slideChangeTransitionStart: function () {
      moveProgressBar(this.realIndex); // 슬라이드 변경 시 프로그래스 바 이동
    }
  }
});

// 프로그래스 바 이동 함수
function moveProgressBar(index) {
  const redBar = document.querySelector('.red-progress');
  redBar.style.left = `${index * 190}px`;
}

// 리스트 스와이퍼 (카테고리 전용)
var swiperSub = new Swiper('.list-swiper', {
  slidesPerView: 7,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: false,
  pagination: {
    el: '.list-swiper .swiper-pagination',
    clickable: true,
    type: 'bullets',
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    }
  }
});

// 기획전 스와이퍼
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'progressbar',
  },
});

// MD'S PICK
new Swiper(".md-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  slidesOffsetAfter: 130,
});

// BEST PRODUCTS
new Swiper(".best-swiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: false,

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   type: 'progressbar',
  // },
});