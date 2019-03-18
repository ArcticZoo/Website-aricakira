function IsPC() {
         var userAgentInfo = navigator.userAgent;
         var Agents = ["Android", "iPhone",
                     "SymbianOS", "Windows Phone",
                     "iPad", "iPod"];
         var flag = true;
         for (var v = 0; v < Agents.length; v++) {
             if (userAgentInfo.indexOf(Agents[v]) > 0) {
                 flag = false;
                 break;
             }
         }
         return flag;
     }
//判断打开的平台

	    (function ($){


	      imagesLoaded(container, function () {
	          wookmark = new Wookmark(container, {
	          autoResize: true, // This will auto-update the layout when the browser window is resized.
	          offset: 0, // Optional, the distance between grid items
	          outerOffset: 0, // Optional, the distance to the containers border
	          itemWidth: function(){
	          	let docWidth = $(document).width();
	          	if(docWidth>1280){
	          		return 395;
	          		$('#container').trigger('refreshWookmark');
	          	}else if(docWidth<1280 && docWidth>625){
	          		return 320;
	          		$('#container').trigger('refreshWookmark');
	          	}else{
	          		return 355;
	          	}}
	           // 在这儿设置了响应式的相册大小
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





//加载页面 dom加载 

	$(document).ready(function(){
		$('#loadding').css({'opacity':"0"});
		$('#loadding').delay("slow").css({'display':"none"});
		$('#filters .ph').addClass('active');
	});

//当手机打开的时候显示手机版本图片
if(!IsPC()){
	$('.titleText').css({'display':'none'});
	$('.titleTextPhone').css({'display':'block'});
}else{
}

//对滚动进行监听 适当时候销毁提示
 $(window).scroll(function(event){
		if($(document).scrollTop()>550 && !IsPC()){
			$('#mobileTip').css({'top':"-100px"});
			$('#wrap').css({'top':"60px"});
			//增加wrap的背景
		}
    });


//手机端menu监听

function mobileMenu(){
	$('#wrapMobilebg').css({"display":'block'});
}
function closeMobileMenu(){
	$('#wrapMobilebg').css({"display":'none'});
}

$("#wrapMobilebg").click(function(e){
  if (e.target == e.currentTarget) {
		$('#wrapMobilebg').css({"display":'none'});
	}
});