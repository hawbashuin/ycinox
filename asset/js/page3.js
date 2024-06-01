// aos.js
// AOS.init();


$(document).ready(function() {
  function animateNumber() {
    let currentValue = 0;
    const targetValue = 1973;
    const duration = 5000; // 動畫持續時間 5 秒
  
    const startTime = performance.now();
    const interval = setInterval(() => {
      const elapsedTime = performance.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      currentValue = Math.floor(progress * targetValue);
      $(".since-number").html(currentValue);
  
      if (progress === 1) {
        clearInterval(interval);
      }
    }, 10); // 每 10 毫秒更新一次數值
  }
  animateNumber()

  // 取得 back to top 按鈕
  let backToTopBtn = document.getElementById("btn-back-to-top");

  // 捲軸下滑160之後出現 back to top 按鈕
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 160 ||
      document.documentElement.scrollTop > 160
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }
  // 點選按鈕後回到頁面頂端
  backToTopBtn.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // console.log($('.owl-carousel').html())
  // var owl = $('.owl-carousel');
  // owl.owlCarousel({
  //   items: 3,
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000, // 每3秒自動播放下一張
  //   animateIn: 'zoomIn', // 進場動畫為 zoomIn
  //   animateOut: 'zoomOut' // 出場動畫為 zoomOut
  // });
  // function startZoomAnimation() {
  //   console.log("123123")
  //   $('.image-zoom').addClass('active');
  // }

  // function stopZoomAnimation() {
  //   $('.image-zoom').removeClass('active');
  // }

  // // 每 5 秒自動開始放大動畫
  // setInterval(startZoomAnimation, 1000);

  // 動畫進行期間，停止自動播放
  // $('.image-zoom').on('transitionend', function() {
  //   stopZoomAnimation();
  //   setTimeout(startZoomAnimation, 1000);
  // });
});