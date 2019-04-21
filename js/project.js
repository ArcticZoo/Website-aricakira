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



//加载页面 dom加载 

	$(document).ready(function(){
		$('#loadding').css({'opacity':"0"});
			//延时执行
		let loadding=setTimeout('$("#loadding").css({"display":"none"})',200);
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