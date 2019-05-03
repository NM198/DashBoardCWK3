
//Make news container to scroll to view all articles

$('#newsbox').stop().animate({
  scrollTop: $('#newsbox')[0].scrollHeight
}, 40000);

$('#newsbox').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e) {
  if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
    $('#newsbox').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
  }
});
