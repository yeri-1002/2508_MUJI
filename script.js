// 메인 슬라이드
const swiper = new Swiper('.swiper', {
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
