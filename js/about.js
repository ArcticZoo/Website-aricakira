//加载页面 

		$(document).ready(function(){
			$('#loadding').css({'opacity':"0"});
			//延时执行
			let loadding=setTimeout('$("#loadding").css({"display":"none"})',200);
			navActiveSet();
		});




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

 		  	

       		//三维初始化
 		  	const app = new SpeRuntime.Application();
			app.start('./img/scene.json');

			$(".title").on('click',function(){
				return false;
			});

 })(jQuery);



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

