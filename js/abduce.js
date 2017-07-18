window.onload = function(){
	var index = 0;
	var index1 = 0;
	$(".button1").css("background","#0D0D0D");
	$(".uls1").css("display","block").siblings().css("display","none");
	$(".button1").on("click",function(){
		index = 0;
		var index1 = 0;
		change(index);
		backg(index1);
	})
	$(".button2").on("click",function(){
		index = 1;
		var index1 = 1;
		change(index);
		backg(index1);
	})
	$(".button3").on("click",function(){
		index ++;
		var index1 = 2;
		if(index>=4){
			index = 4
		}
		change(index);
		backg(index1);
	})
	$(".button4").on("click",function(){
		index = 4;
		var index1 = 3;
		change(index);
		backg(index1);
	})
	
	function change(ind){
		$(".uls"+(ind+1)).css("display","block").siblings().css("display","none");
	}
	function backg(inde){
		$(".button"+(inde+1)).css("background","#0D0D0D").siblings().css("background","linear-gradient(#CCCCCC, #9B9B9B)");
	}
	$.ajax({
		type:"get",
		url:"json/index.json",
		async:true,
		success:function(data){
//			console.log(data);
		}
	});
	$(".butts").on("click",function(){
		$(document).scrollTop(400);
	})
}
