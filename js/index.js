//监测页面加载进度函数
function siteloader(){
    var imgs = document.getElementsByTagName("img");
	var video = document.getElementsByTagName("video");
    var len = 0;
    var percent = document.getElementById("percent");
    for(let i=0; i<imgs.length; i++){
		imgs[i].onload = function(){
			len++;
			percent.innerText = Math.round(len*100/imgs.length);
			//console.log(len);
		}(len)
		if(len*100/imgs.length==100){
			console.log('done');
			readyloader();
		}
    }
 }


//都准备好后再执行
 function readyloader(){
	//利用queue来将动画按照序列播放
	$('.loadingLine').queue(function(){
		$(this).dequeue(); // 执行下一个函数
	  }).delay(200) // 延迟1秒后执行下一个函数
		.queue(function(){
		$(this).css({"width":"164px"}); // 播放第一个动画，进度条走满
		$(this).dequeue(); 
	  }).delay(800) // 延迟1秒后执行下一个函数
		.queue(function(){
			//将width的动画值和height统一
			$(this).css({"transition":"width 1s cubic-bezier(1.000, 0.015, 0.880, 0.580),height 1s cubic-bezier(1.000, 0.015, 0.880, 0.580)"}); 
			$('#introVideo').css({"height":"1100px"});
			$('#introVideo').css({"width":"2900px"});
			
			$(this).css({"height":"1100px"}); 
			$(this).css({"width":"2900px"}); 
			
			$(this).dequeue(); // 执行下一个函数
	  }).delay(2000)
	  .queue(function(){
		//视频窗口回缩
		$(this).css({"transition":"width .6s cubic-bezier(0.475, 0.005, 0.315, 0.995),height .6s cubic-bezier(0.475, 0.005, 0.315, 0.995)"}); 
		$('#introVideo').css({"transition":"width .6s cubic-bezier(0.475, 0.005, 0.315, 0.995),height .6s cubic-bezier(0.475, 0.005, 0.315, 0.995)"}); 
		$('#introVideo').css({"z-index":"10"});
		$('#introVideo').css({"height":"640px"});
		$('#introVideo').css({"width":"1700px"});
		$(this).css({"height":"640px"}); 
		$(this).css({"width":"1700px"}); 
		$(this).css({"border-radius":"50px"}); 

		$("#container").css({"display":"auto"});
		$('#loading').css({'opacity':"0"});
		$("#loading").css({"display":"none"});
		$(this).dequeue(); // 执行下一个函数
  }).delay(200);

	
	//$("#container").css({"display":"auto"});
	//$('#loading').css({'opacity':"0"});
	//延时执行
	//let loading=setTimeout('$("#loadding").css({"display":"none"})',200);

 }



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
	
 	//鼠标样式
 		  const cursor=curDot({
 		  	zIndex: 2999,
			diameter: 48,
			borderWidth:3,
			easing: 4,
			borderColor:"#ddd"

 		  });
 		  cursor.over("a",{
			scale:0.5,
			borderWidth:0,
			borderColor: "transparent",
			background:'#ddd'
			});

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

	          
	        }
	      };





          
	   })(jQuery);





//加载完成后关闭加载页
if(IsPC()){
		    $(document).ready(function(){
				siteloader();
		});
}else{
	$(document).ready(function(){
		$("#container").css({"display":"auto"});
		$('#loading').css({'opacity':"0"});
		$('#loading').delay("slow").css({'display':"none"});
		//加载手机提示
		$('#mobileTip').css({'display':"block"});
		$('#wrap').css({'top':"100px"});
	});
}
//当手机打开的时候显示手机版本图片
if(!IsPC()){
	$('.titleText').css({'display':'none'});
	$('.titleTextPhone').css({'display':'block'});
	$('#mobileMask').css({'display':'block'});//检修中提示
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

		/*底部footer
		if($(document).scrollTop() >= $(document).height() - $(window).height()-50){
			$('.footer').css({'opacity':'1'});
		}else{
			$('.footer').css({'opacity':'0'});
		}*/
    });


//手机端menu监听

function mobileMenu(){
	$('#wrapMobilebg').css({"display":'block'});
}
function closeMobileMenu(){
	$('#wrapMobilebg').css({"display":'none'});
}

//显示被加载完的视频
function showVideo(){
	$('.bgVideo').css('opacity',1);
}
$("#wrapMobilebg").click(function(e){
  if (e.target == e.currentTarget) {
		$('#wrapMobilebg').css({"display":'none'});
	}
});

function resizeGrid(){
	//视频加载后触发重新布局
	$('#container').isotope('layout');
	$(window).trigger('resize');
}



$(".wechatBtn").hover(function(){
    $(".wechatImg").css("display","inline-block");
},function(){
    $(".wechatImg").css("display","none");
});

