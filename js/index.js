
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
	    if(!IsPC()){
	      $('#container').wookmark().imagesLoaded().progress( function() {
		 			  wookmark = new Wookmark(container, {
			          autoResize: true, // This will auto-update the layout when the browser window is resized.
			          offset: 3, // Optional, the distance between grid items
			          outerOffset: 0, // Optional, the distance to the containers border
			          resizeDelay:50,
			          verticalOffset:-2,
			          itemWidth: function(){
			          	let docWidth = $(document).width();
			          	if(docWidth>1280){
			          		return 392;
			          		$('#container').trigger('refreshWookmark');
			          	}else if(docWidth<1280 && docWidth>625){
			          		return 316;
			          		$('#container').trigger('refreshWookmark');
			          	}else{
			          		return 355;
			          	}}
			           // 在这儿设置了响应式的相册大小
			        });
		 		  });

			}

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



if(IsPC()){
//如果是PC 首页下滑一整屏
var i=0;//翻屏变量，初始第一屏
var s = 0; //该变量作用是鼠标滑轮一直向下或者向上滑动时出现抖动现象
if($(document).scrollTop()<10 &&$(document).width()>900){
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
        if (delta < 0&& i==0 && $(document).width()>900) { 
 
            if (s>=0&&(starttime == 0 || (endtime - starttime) <= -300)) { //在500ms内执行一次翻屏 向下翻
                s=1;
                i++;
                $('body, html').animate({scrollTop:1100 }, 'slow');
                $('body').css({'overflow':'auto'});
                endtime = new Date().getTime(); //记录翻屏的结束时间
            }
        } else if (delta > 0&& i>=1&&s==1&& (starttime == 0 || (endtime - starttime) <= -300) && $(document).scrollTop()<1100 && $(document).width()>900) {    
            i--;
            //console.log(i);
            $('body, html').animate({scrollTop:0 }, 'slow');
            $('body').css({'overflow':'hidden'});
            endtime = new Date().getTime();                     
        } 
    });
 
})}


//加载页面 判断是不是PC 是的话等待视频加载 再dom加载 不是的话直接等待dom加载
//PC端时加载完视频后才控制图片显示 这样优先加载视频
//
if(IsPC()){
	document.getElementById('titleVideo').oncanplaythrough=function(){
		    $(document).ready(function(){
				    	$('#container').wookmark().imagesLoaded().progress( function() {
		 			  wookmark = new Wookmark(container, {
			          autoResize: true, // This will auto-update the layout when the browser window is resized.
			          offset: 55, // Optional, the distance between grid items
			          outerOffset: 0, // Optional, the distance to the containers border
			          resizeDelay:50,
			          verticalOffset:18,
			          itemWidth: function(){
			          	let docWidth = $(document).width();
			          	if(docWidth>1280){
			          		return 360;
			          		$('#container').trigger('refreshWookmark');
			          	}else if(docWidth<1280 && docWidth>625){
			          		return 316;
			          		$('#container').trigger('refreshWookmark');
			          	}else{
			          		return 355;
			          	}}
			           // 在这儿设置了响应式的相册大小
			        });
		 		  });
		    	$("#container").css({"display":"auto"});
			    $('#loadding').css({'opacity':"0"});
			//延时执行
		    	let loadding=setTimeout('$("#loadding").css({"display":"none"})',200);
		});
	}
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

		if($(document).scrollTop()>100){
			$('#down').css({'margin-top':'-200px'});
		}else{
			$('#down').css({'margin-top':'30px'});
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

function upside(){
	$('html,body').animate({scrollTop:0}, 500);
}
function downside(){
	$('body, html').animate({scrollTop:1110 }, 500);
                $('body').css({'overflow':'auto'});
}

$(".wechatBtn").hover(function(){
    $(".wechatImg").css("display","inline-block");
},function(){
    $(".wechatImg").css("display","none");
});