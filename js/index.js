
	    (function ($){


	      imagesLoaded(container, function () {
	          wookmark = new Wookmark(container, {
	          autoResize: true, // This will auto-update the layout when the browser window is resized.
	          offset: 0, // Optional, the distance between grid items
	          outerOffset: 0, // Optional, the distance to the containers border
	          itemWidth: 395 // Optional, the width of a grid item
	        });
	      });



	      //灯箱相册
		  
			// Image popups
			$('#container').magnificPopup({
			  delegate: 'a',
			  type: 'image',
			  removalDelay: 0, //delay removal by X to allow out-animation
			  closeOnContentClick: true,
			  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
			});
			// Image popups
			$('.video').magnificPopup({
			  type: 'iframe',
			  removalDelay: 0, //delay removal by X to allow out-animation
			  closeOnContentClick: true,
			  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
			});


	      function onScroll() {
	        // Check if we're within 100 pixels of the bottom edge of the broser window.
	        var winHeight = window.innerHeight ? window.innerHeight : $('window').height(), // iphone fix
	            closeToBottom = ($window.scrollTop() + winHeight > $document.height() - 100);

	        if (closeToBottom) {
	          // Get the first then items from the grid, clone them, and add them to the bottom of the grid
	          var $items = $('li', $container),
	              $firstTen = $items.slice(0, 10).clone().css('opacity', 0);
	          $container.append($firstTen);

	          wookmark.initItems();
	          wookmark.layout(true, function () {
	            // Fade in items after layout
	            setTimeout(function() {
	              $firstTen.css('opacity', 1);
	            }, 300);
	          });
	        }
	      };

	      // Capture scroll event.
	      $('window').bind('scroll.wookmark', onScroll);




          //图片标签过滤功能
		  // Setup filter buttons when jQuery is available
	      var $filters = $('#filters li');

	      /**
	       * When a filter is clicked, toggle it's active state and refresh.
	       */
	      function onClickFilter(e) {
	        var $item = $(e.currentTarget),
	            activeFilters = [],
	            filterType = $item.data('filter');

	        if (filterType === 'all') {
	          $filters.removeClass('active');
	        } else {
	          $item.toggleClass('active');

	          // Collect active filter strings
	          $filters.filter('.active').each(function() {
	            activeFilters.push($(this).data('filter'));
	          });
	        }

	        wookmark.filter(activeFilters, 'or');
	      }

	      // Capture filter click events.
	      $('#filters').on('click.wookmark-filter', 'li', onClickFilter);


	    })(jQuery);
//首页下滑一整屏
var i=0;//翻屏变量，初始第一屏
var s = 0; //该变量作用是鼠标滑轮一直向下或者向上滑动时出现抖动现象
if($(document).scrollTop()<10){
  				$('body').css({'overflow':'hidden'});
  			}
if($(document).scrollTop()>400){
  				i=1;
  				s=1;
  				$('body').css({'overflow':'auto'});
  			}
$(function(){
 
    var starttime = 0,
        endtime = 0;
    $("body").mousewheel(function(event, delta) {

 		

        starttime = new Date().getTime(); //记录翻屏的初始时间
        if (delta < 0&& i==0 ) { 
 
            if (s>=0&&(starttime == 0 || (endtime - starttime) <= -300)) { //在500ms内执行一次翻屏 向下翻
                s=1;
                i++;
                $('body, html').animate({scrollTop:1100 }, 'slow');
                $('body').css({'overflow':'auto'});
                endtime = new Date().getTime(); //记录翻屏的结束时间
            }
        } else if (delta > 0&& i>=1&&s==1&& (starttime == 0 || (endtime - starttime) <= -300) && $(document).scrollTop()<1100) {    
            i--;
            //console.log(i);
            $('body, html').animate({scrollTop:0 }, 'slow');
            $('body').css({'overflow':'hidden'});
            endtime = new Date().getTime();                     
        } 
    });
 
 
})



/*
(function ($) {
  var loadedImages = 0, // Counter for loaded images
    handler = $('#tiles li'); // Get a reference to your grid items.


  $('#tiles').imagesLoaded(function(){
    // Call the layout function.
    handler.wookmark(options);

  }).progress(function(instance, image) {
    // Update progress bar after each image load
    loadedImages++;
    if (loadedImages == handler.length)
      $('.progress-bar').hide();
    else
      $('.progress-bar').width((loadedImages / handler.length * 100) + '%');
  });
})(jQuery);
*/