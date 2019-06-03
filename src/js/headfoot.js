//尾部动态渲染
var head=`<div id="fh1">
                <div class="fh4"><a href="#"><img src="img/2.jpg" title="瓜子二手车"></a></div>
                <p id="fbei">北京 <i class="iconfont">&#xe627;</i></p>
                <ul>
                    <li><a href="index.html">首页</a></li>
                    <li><a href="list.html">我要买车</a></li>
                    <li><a href="html/trolley.html">我的购物车</a></li>
                    <li><a href="">瓜子服务</a></li>
                    <li><a href="">瓜子金融</a></li>
                    <li><a href="">毛豆新车</a></li>
                </ul>
                <div id="fh2">
                    <span>热线电话 400-069-6530 </span>
                    <span ><a href="#" class="md"><i class="iconfont">&#xe62b;</i> 登录</a></span>
                </div>	
        </div>`;
var headf=document.querySelector('#f');
headf.innerHTML=head;




//尾部动态渲染
// var str=`<footer><img src="img/foot.png"></footer>`;
// document.body.innerHTML+=str

// $('.bottom').load('./html/foot.html')