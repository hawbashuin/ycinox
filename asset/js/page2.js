// aos.js
AOS.init();


$(document).ready(function() {
  // $('.center-menu .row .col:nth-child(1)').hover(
  //   function() {
  //     $('.center-menu-mask').css('display', 'none');
  //   },
  //   function() {
  //     $('.center-menu-mask').css('display', 'block');
  //   }
  // );
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

});