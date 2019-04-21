
//news autoscroll section
$(document).ready(function(){
	const page = {
		goingDown : false,
		stopScrolling: false,
		startScrollingTimer: null,
		prevScroll:null,
		newScroll:null,
		scrollSpeed:1,
		scrollInterval:30

	}
	page.autoscroll = scrollfunction(){
		if(!page.stopScrolling){
			if(page.goingDown)
			{
				window.scrollBy(0,-page.scrollSpeed);
			}else{
				window.scrollBy(0,page.scrollSpeed);
			}
		}
	}
	page.watchScroll = function() {
    var scrollTop = $(window).scrollTop();
    page.autoScroll();
		if (page.prevScroll + 2 < scrollTop || page.prevScroll - 2 > scrollTop) {
      page.stopScrolling = true;
      clearTimeout(page.startScrollTimer);
      page.startScrollTimer = setTimeout(function() {
        page.stopScrolling = false;
      }, 50);
      if (page.prevScroll + 30 < scrollTop) {
        page.goingDown = false;
      }
      if (page.prevScroll - 30 > scrollTop) {
        page.goingDown = true;
      }
    }
    page.prevScroll = scrollTop;
  }

  $(window).on("load", function() {
    // Set scrollTop after 1ms to prevent browser from remembering previous scroll position
    setTimeout(function() {
      setInterval(page.watchScroll, page.scrollInterval);
    }, 1);
  });
});
