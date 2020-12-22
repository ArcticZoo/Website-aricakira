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
	      //执行图片排版
	      $('#container').isotope({
	      	layoutMode: 'masonry',
	      	itemSelector:".element-item",
	      	percentPosition: true,
	      	masonry:{
	      		gutter:".column-sizer",
	      		columWidth:"li"
	      		
	      	}
	      })

	      $('#container').imagesLoaded().progress( function() {
  			$('#container').isotope('layout');
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





	    })(jQuery);





//加载页面 dom加载 

	$(document).ready(function(){
		$('#loadding').css({'opacity':"0"});
			//延时执行
		let loadding=setTimeout('$("#loadding").css({"display":"none"})',200);
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

$(".wechatBtn").hover(function(){
    $(".wechatImg").css("display","inline-block");
},function(){
    $(".wechatImg").css("display","none");
});