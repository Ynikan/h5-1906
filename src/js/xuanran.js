var obj1=[
{"img":"img/m1.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m2.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m3.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m4.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m5.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m6.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m7.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m8.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m9.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m10.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m11.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
{"img":"img/m12.jpg","car":"现代ix35 2012款 2.0L 自动四驱尊贵版GLS","year":"2012年 | 6.9万公里","yprice":"8.00","xprice":"23.40万"},
];
var str1="";
var list1=document.querySelector(".list");
for(var i=0;i<obj1.length;i++){
	str1+='<li><a href="list.html"><img src="'+obj1[i].img+'"></a><h2>'+obj1[i].car+'</h2><p class="like">'
	+obj1[i].year+'</p><div><p><span>'+obj1[i].yprice+'</span>万</p> <del>'+obj1[i].xprice+'</del></div></li>'
}
list1.innerHTML=str1;






