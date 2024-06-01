// aos.js
// AOS.init();


$(function() {
  $('.center-item-1').addClass('center-item-active');
  $(".product-item").hide()
  $(".product-item-1").show()

  $('.center-menu .center-item').on({
    click: function() {
      console.log("mama")
      $('.center-item').removeClass('center-item-active');
      $(this).addClass('center-item-active');
      $("#menu-active").val($(this).data('id'));
      $(".product-item").hide();
      let target =  $(this).data('item');
      $('.'+target).show();
      
    }, mouseenter: function() {
      $('.center-item').removeClass('center-item-active');
      $(this).addClass('center-item-active');
    }, mouseleave: function() {
      // $('.center-item-1').addClass('center-item-active');
    }
  });
  
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
});