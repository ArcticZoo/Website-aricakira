//加载页面 

		$(document).ready(function(){
			$('#loadding').css({'opacity':"0"});
			//延时执行
			let loadding=setTimeout('$("#loadding").css({"display":"none"})',200);
			navActiveSet();
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
//设置nav的active
function navActiveSet(){
	if($(document).scrollTop()<550){}
}
//滚动监听
 $(window).scroll(function(){
 	navActiveSet();
 });

