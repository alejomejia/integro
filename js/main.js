/* Video cover dissapear after click */

$('.video .cover a').click(function(){
  $('.video .cover').css('opacity', 0);
  setTimeout(
    function() {
      $('.video .cover').css('display', 'none');
    },
    400);
});
