// aos.js
// AOS.init();


$(function() {
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

  $('#banner_owl').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450
  });
  
});