if(!IsPC()){
	//在移动端动态调节不同dpi适配
	let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;  //浏览器兼容
	console.log("屏幕宽度："+htmlwidth) //iphone5:320 iphone6:375

	//获得html DOM元素
	let htmlDom = document.getElementsByTagName('html')[0];

	//给DOM元素设置样式
	//htmlDom.style.fontSize = htmlwidth/120 + 'px';  
	//以iphone5为基础 iphone5默认字体大小为16px 320/16=20 即1rem字体大小是屏幕宽度的1/20
}




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
	    	//因为在没有完全加载图片之前排列会乱掉 所以需要使用imagesloaded，逐一让图片加载后排列执行
	      $('#container').wookmark().imagesLoaded().progress( function() {
		 			  wookmark = new Wookmark(container, {
			          autoResize: true, // This will auto-update the layout when the browser window is resized.
			          offset: 3, // Optional, the distance between grid items
			          outerOffset: 0, // Optional, the distance to the containers border
			          resizeDelay:50,
			          verticalOffset:-2,
			          itemWidth: function(){
			          	let docWidth = $(document).width();
			          	if(docWidth>1480){
			          		return 382;
			          		$('#container').trigger('refreshWookmark');
			          	}else if(docWidth<1480 && docWidth>1250){
			          		return 320;
			          		$('#container').trigger('refreshWookmark');
			          	}else{
			          		return 320;
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
			  fixedContentPos:false,
			  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
			});
			// Image popups
			$('.video').magnificPopup({
			  type: 'iframe',
			  removalDelay: 0, //delay removal by X to allow out-animation
			  closeOnContentClick: true,
			  fixedContentPos:false,
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





//加载完成后关闭加载页
if(IsPC()){
		    $(document).ready(function(){
		    	$("#container").css({"display":"auto"});
			    $('#loadding').css({'opacity':"0"});
			//延时执行
		    	let loadding=setTimeout('$("#loadding").css({"display":"none"})',200);
		});
}else{
	$(document).ready(function(){
		$("#container").css({"display":"auto"});
		$('#loadding').css({'opacity':"0"});
		$('#loadding').delay("slow").css({'display':"none"});
		//加载手机提示
		$('#mobileTip').css({'display':"block"});
		$('#wrap').css({'top':"100px"});
	});
}
//当手机打开的时候显示手机版本图片
if(!IsPC()){
	$('.titleText').css({'display':'none'});
	$('.titleTextPhone').css({'display':'block'});
}else{
}

//对滚动进行监听 适当时候销毁提示
 $(window).scroll(function(event){
		if($(document).scrollTop()>3 && !IsPC()){
			$('#mobileTip').css({'top':"-100px"});
			$('#wrapMobile').css({'margin-top':'0'});
		}else if($(document).scrollTop()<3 && !IsPC()){
			$('#mobileTip').css({'top':"0px"});
			$('#wrapMobile').css({'margin-top':'55px'});
		}

		//顶部底色变白
		if($(document).scrollTop()>600){
			$('#wrapTitle').css({'opacity':'0.95'});
		}else{
			$('#wrapTitle').css({'opacity':'1'});
		}

		//底部footer
		if($(document).scrollTop() >= $(document).height() - $(window).height()-50){
			$('.footer').css({'opacity':'1'});
		}else{
			$('.footer').css({'opacity':'0'});
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

function resizeGrid(){
	//视频加载后触发重新布局
	document.getElementById('container').dispatchEvent(new Event('refreshWookmark'));
	$(window).trigger('resize');
}



$(".wechatBtn").hover(function(){
    $(".wechatImg").css("display","inline-block");
},function(){
    $(".wechatImg").css("display","none");
});