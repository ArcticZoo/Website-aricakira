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
	if($(document).scrollTop()<550){
		$('.indexNav2').addClass('active');
		$('.aboutNav2').removeClass('active');
		$('.techNav2').removeClass('active');
	}else if($(document).scrollTop()>=600 && $(document).scrollTop()<1400){
		$('.indexNav2').removeClass('active');
		$('.aboutNav2').addClass('active');
		$('.techNav2').removeClass('active');
	}else if($(document).scrollTop()>1500){
		$('.indexNav2').removeClass('active');
		$('.aboutNav2').removeClass('active');
		$('.techNav2').addClass('active');
	}
}
//滚动监听
 $(window).scroll(function(){
 	navActiveSet();
 });

 function navJump(n){
 	switch(n){
 		case 1:$('html,body').animate({scrollTop:0}, 500);break;
 		case 2:$('html,body').animate({scrollTop:1100}, 500);break;
 		case 3:$('html,body').animate({scrollTop:1800}, 500);break;
 	}
 	navActiveSet();
 }