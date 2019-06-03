//顶部悬浮
function topFloat(){
	this.Float=document.getElementById("f");
	this.init();
}
topFloat.prototype={
	init:function(){
	window.addEventListener("scroll",this.Fbc.bind(this))
	},
	Fbc:function(){
	if(document.documentElement.scrollTop>70){
	this.Float.style.display="block";
	this.Float.style.position="fixed";
	this.Float.style.top="0";
	}else{
	this.Float.style.display="none";
	}
	}
}
new topFloat();
//var Float=document.getElementById("f");
//window.onscroll=function(){
//	if(document.documentElement.scrollTop>70){
//	Float.style.display="block";
//	Float.style.position="fixed";
//	Float.style.top="0";
//	}else{
//	Float.style.display="none";
//	}
//}

var _top = document.getElementById("top");

window.onscroll=function(){
if(document.documentElement.scrollTop>400){
	_top.style.display="block";

}else{
 _top.style.display="none"
 }
}   
////点击返回顶部
_top.addEventListener("click",function(){
 document.documentElement.scrollTop=0;
})

var car1=document.getElementsByClassName("car1");
var obj1=[
{"img":"img/car1.png","car":"大众"},
{"img":"img/car2.png","car":"奔驰"},
{"img":"img/car3.png","car":"宝马"},
{"img":"img/car4.png","car":"奥迪"},
{"img":"img/car5.png","car":"别克"},
{"img":"img/car6.png","car":"丰田"},
{"img":"img/car7.png","car":"福特"},
]
var str="";
for(var i=0;i<obj1.length;i++){
	
	str+='<a href="#"><img src="'+obj1[i].img+'">'+obj1[i].car+'</a>';
}
car1[0].innerHTML=str;



var car2=document.getElementsByClassName("car2");
var obj2=[
{"img":"img/car8.png","car":"本田"},
{"img":"img/car9.png","car":"现代"},
{"img":"img/car10.png","car":"日产"},
{"img":"img/car11.png","car":"路虎"},
{"img":"img/car12.png","car":"雪佛莱"},
{"img":"img/car13.png","car":"长安"},
{"img":'',"car":"全部品牌"},
]
var str1="";
for(var i=0;i<obj2.length;i++){
	
	str1+='<a href="#"><img src="'+obj2[i].img+'">'+obj2[i].car+'</a>';
}
car2[0].innerHTML=str1;

var car3=document.getElementsByClassName("car3");
var obj3=[
{"car":"3万以下"},
{"car":"3-5万"},
{"car":"5-7万"},
{"car":"7-9万"},
{"car":"9-12万"},
{"car":"12-16万"},
{"car":"16-20万"},
]
var str2="";
for(var i=0;i<obj3.length;i++){
	
	str2+='<a href="#">'+obj3[i].car+'</a>';
}
car3[0].innerHTML=str2;

var car4=document.getElementsByClassName("car4");
var obj4=[
{"car":"超值"},
{"car":"急售"},
{"car":"练手车"},
{"car":"准新车"},
{"car":"严选车"},
{"car":"SUV"},
{"car":"查看更多"},
]
var str3="";
for(var i=0;i<obj4.length;i++){
	
	str3+='<a href="#">'+obj4[i].car+'</a>';
}
car4[0].innerHTML=str3;





var xiao1=document.querySelector(".xiao1");
var obj5=[
{"img":"img/b1.png","p1":"两厢轿车","p2":"0.18万起"},
{"img":"img/b2.png","p1":"三厢轿车","p2":"0.15万起"},
{"img":"img/b3.png","p1":"跑车","p2":"2.38万起"},
{"img":"img/b4.png","p1":"SUV","p2":"0.50万起"},
{"img":"img/b5.png","p1":"MPV","p2":"0.72万起"},
{"img":"img/b6.png","p1":"面包车","p2":"0.16万起"},
]
var str4="";
for(var i=0;i<obj5.length;i++){
	
	str4+=`<li><img src="${obj5[i].img}"><p class="p1">${obj5[i].p1}</p><p class="p2">${obj5[i].p2}</p></li>`
}
xiao1.innerHTML=str4;

var xiao2=document.querySelector(".xiao2");
var obj6=[
{"img":"img/c1.png","p1":"跑车","p2":"9.68万起"},
{"img":"img/c2.png","p1":"SUV","p2":"2.15万起"},
{"img":"img/c3.png","p1":"MPV","p2":"2.50万起"},
{"img":"img/c4.png","p1":"两厢轿车","p2":"2.44万起"},
{"img":"img/c5.png","p1":"三厢轿车","p2":"2.38万起"},
{"img":"img/c6.png","p1":"面包车","p2":"2.50万起"},
]
var str5="";
for(var i=0;i<obj6.length;i++){
	
	str5+=`<li><img src="${obj6[i].img}"><p class="p1">${obj6[i].p1}</p><p class="p2">${obj6[i].p2}</p></li>`
}
xiao2.innerHTML=str5;

var xiao3=document.querySelector(".xiao3");
var obj7=[
{"img":"img/d1.png","p1":"宝马5系","p2":"成交价21.3万"},
{"img":"img/d2.png","p1":"本田雅阁","p2":"成交价13.5万"},
{"img":"img/d3.png","p1":"大众高尔夫","p2":"成交价6.8万"},
{"img":"img/d4.png","p1":"奔驰GLK级","p2":"成交价22.9万"},
{"img":"img/d5.png","p1":"雪佛莱迈锐宝","p2":"成交价7.3万"},
{"img":"img/d6.png","p1":"马自达昂克赛拉","p2":"成交价8.66万"},
]
var str6="";
for(var i=0;i<obj7.length;i++){
	
	str6+=`<li><img src="${obj7[i].img}"><p class="p1">${obj7[i].p1}</p><p class="p2">${obj7[i].p2}</p></li>`
}
xiao3.innerHTML=str6;

var xiao4=document.querySelector(".xiao4");
var obj8=[
{"img":"img/e1.png","p1":"5万内练手车","p2":"每天只需几十元"},
{"img":"img/e2.png","p1":"工薪族最爱","p2":"月供只要1500"},
{"img":"img/e3.png","p1":"SUV家庭代步首选","p2":"同首付,买辆宽敞的"},
{"img":"img/e4.png","p1":"准新车","p2":"低首付高品质"},
{"img":"img/e5.png","p1":"奔驰宝马开回家","p2":"首付不到5万"},
{"img":"img/e6.png","p1":"车主急售实惠","p2":"买的早不如刚刚好"},
]
var str7="";
for(var i=0;i<obj8.length;i++){
	
	str7+=`<li><img src="${obj8[i].img}"><p class="p1">${obj8[i].p1}</p><p class="p2">${obj8[i].p2}</p></li>`
}
xiao4.innerHTML=str7;


// 鼠标移入图片跟随改变
function Xuan(){
   
  	this.init();
}
Xuan.prototype={
	init:function(){
	this.Change();
	},
Change:function(){
	  
		var li1= $(".da li");
		var aul = $(".xiao ul");
		li1.eq(0).children().last().css('display','block');
		li1.eq(0).children().first().attr('src','img/big1.jpg');
		aul.eq(0).css('display','block');
     li1.mouseover(function(){
			 		
			var i=$(this).index();
		
			var u=i+1;
			if(i!=0){
				li1.eq(0).children().last().css('display','none');
				li1.eq(0).children().first().attr('src','img/big1.png');
				aul.eq(0).css('display','none');
				$(this).children().last().css('display','block');
				$(this).children().first().attr('src','img/big'+u+'.jpg');
				aul.eq(i).css('display','block');
			}else{
				li1.eq(0).children().last().css('display','block');
				li1.eq(0).children().first().attr('src','img/big1.jpg');
				aul.eq(0).css('display','block');	
			}
		
		});
		li1.mouseout(function(){		
			var i=$(this).index();
			var u=i+1;
			$(this).children().last().css('display','none');
			$(this).children().first().attr('src','img/big'+u+'.png');
			aul.eq(i).css('display','none');
			if(i!=0||1||2||3){
				li1.eq(0).children().last().css('display','block');
				li1.eq(0).children().first().attr('src','img/big1.jpg');
				aul.eq(0).css('display','block');
			}
		});
	
	}

}
new Xuan();



//模带框出现.消失


function MengBan(){
	$('.md').click(function(){
		$('#d').css('display','block')
	});
	
	$('.x').click(function(){
		$('#d').css('display','none')
	})
}
new  MengBan();


//轮播图
 
function Swipe(){
	this.i=0;
	this.timer=null;
	this.init();
	
}
Swipe.prototype={
   init:function(){
	   this.Autoplay();
	   this.Stopplay();
	   this.Manualplay();
	 },
	 Autoplay:function(){
	 	 this.timer=setInterval(this.setInCb.bind(this),2000);
	
	 },
	 setInCb:function(){
		if(this.i!=3){
		   $('.step4 li').eq(this.i).addClass('show3').siblings().removeClass("show3"); 
		   $('.step3 li').eq(this.i).addClass('show2').siblings().removeClass("show2");
		   $('.step2 li').eq(this.i).addClass('show1').siblings().removeClass("show1");

		   this.i++;
		}else if(this.i=3){
			$('.step4 li').eq(this.i).addClass('show3').siblings().removeClass("show3"); 
			$('.step3 li').eq(this.i).addClass('show2').siblings().removeClass("show2"); 
			$('.step2 li').eq(this.i).addClass('show1').siblings().removeClass("show1");
			this.i=0;
		   }
	   },
     Stopplay:function(){
		 var _this=this;
		$('.lb').mouseover(function(){
			clearInterval(_this.timer);
		});
		$('.lb').mouseout(function(){
			_this.Autoplay();
		});
	  },
	 Manualplay:function(){
		$('.step3 li').click(function(){
			var s=$(this).index();
			$(this).addClass('show2').siblings().removeClass("show2");
			$('.step4 li').eq(s).addClass('show3').siblings().removeClass("show3"); 
			$('.step2 li').eq(s).addClass('show1').siblings().removeClass("show1");
		})
	  }	 
}
new Swipe();


