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

// 리스트 스와이퍼
var swiperSub = new Swiper('.swiper', {
  slidesPerView: 7,  // 한 번에 7개의 슬라이드 표시
  spaceBetween: 20,  // 슬라이드 간 간격 설정
  loop: false,  // 끝까지 넘기고 처음으로 돌아가지 않음
  pagination: {
    el: '.swiper-pagination',  // 페이지네이션을 표시할 요소
    clickable: true,  // 페이지네이션 클릭 가능하도록 설정
    type: 'bullets',  // 점(dot) 형태로 페이지네이션 설정
  },
});