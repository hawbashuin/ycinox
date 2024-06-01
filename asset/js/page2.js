// aos.js
AOS.init();


$(document).ready(function() {
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
  $('.center-menu .row .col:not(:first-child)').hover(
    function() {
      $(this).children('[class^="center-menu-"]').css('display', 'block');
      $('.center-menu-mask').css('display', 'block');
    },
    function() {
      $(this).children('[class^="center-menu-"]').css('display', 'none');
      $('.center-menu-mask').css('display', 'none');
    }
  );
  $('.center-menu .row .col').click(function(index){
    var targetId = $(this).data('go');
    var target = $('#' + targetId);

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 100); // 800 毫秒的動畫時長
    }
console.log( $(this).data('go'))
  })

});