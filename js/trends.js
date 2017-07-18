window.onload = function(){
	$.ajax({
		type:"get",
		url:"json/index.json",
		async:true,
		success:function(data){
			$.each(data.news, function(i) {
				var li = $('<li class="trends_2"></li>');
				var a = $('<a href="#"></a>')
				var p1 = $('<p>'+data.news[i].news_font+'</p>');
				var p2 = $('<p>'+data.news[i].news_data+'</p>');
				a.append(p1);
				a.append(p2);
				li.append(a);
				$(".trends_1").append(li);
			});
			var index = 0;
			var index1 = 0;
			$(".button1").css("background","#0D0D0D");
			$(".news_js1").css("display","block").siblings().css("display","none");
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
				$(".news_js"+(ind+1)).css("display","block").siblings().css("display","none");
			}
			function backg(inde){
				$(".button"+(inde+1)).css("background","#0D0D0D").siblings().css("background","linear-gradient(#CCCCCC, #9B9B9B)");
			}
			$(".butts").on("click",function(){
				$(document).scrollTop(400);
			})
		}
	});
}
