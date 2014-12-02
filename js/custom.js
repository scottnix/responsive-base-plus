jQuery(document).ready(function($) {
  $('.menu-toggle').click(function(e) {
    $('.menu-toggle').toggleClass('toggled');
    $('.menu').toggleClass('active');
  });
});