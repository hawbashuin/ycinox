// aos.js
AOS.init();

// 播放影片
const handelBannerVideo = () => {
  $("#bannerVideo").get(0).play()
}

// 取得 back to top 按鈕
let backToTopBtn = document.getElementById("btn-back-to-top");

// 捲軸下滑150之後出現 back to top 按鈕
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
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