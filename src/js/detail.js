
//页面头部渲染
var head=`<div id="fh1">
                <div class="fh4"><a href="#"><img src="../img/2.jpg" title="瓜子二手车"></a></div>
                <p id="fbei">北京 <i class="iconfont">&#xe627;</i></p>
                <ul>
                    <li><a href="../index.html">首页</a></li>
                    <li><a href="../list.html">我要买车</a></li>
                    <li><a href="../html/trolley.html">我的购物车</a></li>
                    <li><a href="">瓜子服务</a></li>
                    <li><a href="">瓜子金融</a></li>
                    <li><a href="">毛豆新车</a></li>
                </ul>
                <div id="fh2">
                    <span>热线电话 400-069-6530 </span>
                    <span ><a href="#" class="md"><i class="iconfont">&#xe62b;</i> 登录</a></span>
                </div>	
        </div>`;
$('#f').html(head) ;  

//内容区渲染
// axios({
//     method:'get',
//     url:'../json/detail.json',
//     data:{}
// }).then(function(data){
//     function Newpage(){
//        this.jsx=document.querySelector('.js_x');
//        this.init();
//     }
//     Newpage.prototype={
//         init:function(){
//          this.Layout();
//         },
//         Layout:function(){
//             var loca=location.href;
//             //以?分割传递过来的地址，分成两部分；arr[1]是第二部分
//             var arr=loca.split("?"); 
//             //arr[1]中又以=分割两部分 newArr[1]就是截取的id值
//             var newArr=arr[1].split("=");
//             var Id=newArr[1];
//             var str="";
//             for(var i=0;i<data.length;i++){
//                 var index=i;
//                 if(Id==index){
//                     str=`<div class="block1">
//                     <div id="bimgbox">
//                             <div id="opreat"></div>
//                             <div id="bimg">
//                                <img src="${data[i].img1}">
//                             </div>
//                     </div>
//                     <ul class="simgbox">
//                         <li class="special"><img src="${data[i].img1}"></li>
//                         <li><img src="${data[i].img2}"></li>
//                         <li><img src="${data[i].img3}"></li>
//                         <li><img src="${data[i].img4}"></li>
//                         <li><img src="${data[i].img5}"></li>
//                     </ul>
                    
//                 </div>
//                 <div class="block2">
//                     <div class="magnify">
//                            <img src="${data[i].img1}">
//                     </div>
//                     <h2>${data[i].car}<span class="nTransfer">0过户</span></h2>
//                     <ul class="detail1">
//                         <li><span class="big">${data[i].year}</span><br><span class="small">上牌时间</span></li>
//                         <li><span class="big">${data[i].meil}</span><br><span class="small">表显里程</span></li>
//                         <li><span class="big">${data[i].pl}</span><br><span class="small">排量</span></li>
//                         <li><span class="big">自动</span><br><span class="small">变速箱</span></li>
//                     </ul>
//                     <p class="content1">
//                         车主报价： 
//                        <span class="p1"> <i>¥${data[i].yprice}</i>&nbsp; 万 &nbsp; </span>
//                        <del>新车指导价<i>${data[i].xprice}</i>万(含税)</del> 
//                        <spn class="p2">询底价</spn> 
//                     </p>
//                     <div class="content2">
//                         <p class="dp1">
//                             <span class="ds1"> <i>1.34</i> 万开回家 </span> 
//                             <span class="ds2">贷款详情&gt;</span>
//                        </p>
//                        <p class="dp2">
//                             <span class="ds1"> 在线贷款秒批，最高可贷 <i>50万</i>  </span> 
//                             <span class="ds2">测测贷款额度</span>
//                        </p>
//                        <div class='ddimg'></div>
//                     </div>
//                     <div class="content3">
//                         <p>
//                           <span class="dp1">服务保障</span>  
//                           <i>服务费4499元起，详情可咨询购车顾问</i>
//                           <span class="dp2">查看详情&gt;</span>
//                         </p>
//                         <ul class="detail2">
//                             <li>2年4万公里保障 </li>
//                             <li>30天无忧退 </li>
//                             <li>专业整备 </li>
//                             <li>代办过户 </li>
//                             <li>调表车赔付</li>
//                             <li>优质个人车 </li>
//                             <li>盗抢查封 </li>
//                             <li>259项检测  </li>
//                         </ul>
//                     </div>
//                     <p class="ptop">
//                         <span class="ps1">我要收藏</span> 
//                         <span class="ps2">加购物车</span>
//                         <a class="ps3" >我的购物车</a> 
//                     </p>
//                     <p class="ding">恭喜你已成功收藏！</p>
//                 </div>`
//                 this.jsx.innerHTML=str;
//                 }
                
//             }
           
//        }
//     }   

//  new  Newpage() 
// });

//内容区渲染
$.get('../json/detail.json',{},function(data){
    function Newpage(){
        var loca=location.href;
            //以?分割传递过来的地址，分成两部分；arr[1]是第二部分
        var arr=loca.split("?"); 
            //arr[1]中又以=分割两部分 newArr[1]就是截取的id值
        var newArr=arr[1].split("=");
        this.Id=newArr[1];
       this.jsx=$('.js_x');
       this.init();
    }
    Newpage.prototype={
        init:function(){
         this.Layout();
        
        },
        Layout:function(){
            
            var str="";
            for(var i=0;i<data.length;i++){
                var index=i;
              
                if(this.Id==index){
                    str=`<div class="block1">
                    <div id="bimgbox">
                            <div id="opreat"></div>
                            <div id="bimg">
                               <img src="${data[i].img1}">
                            </div>
                    </div>
                    <ul class="simgbox">
                        <li class="special"><img src="${data[i].img1}"></li>
                        <li><img src="${data[i].img2}"></li>
                        <li><img src="${data[i].img3}"></li>
                        <li><img src="${data[i].img4}"></li>
                        <li><img src="${data[i].img5}"></li>
                    </ul>
                    
                </div>
                <div class="block2" data-id='${index}'>
                    <div class="magnify">
                           <img src="${data[i].img1}">
                    </div>
                    <h2>${data[i].car}<span class="nTransfer">0过户</span></h2>
                    <ul class="detail1">
                        <li><span class="big">${data[i].year}</span><br><span class="small">上牌时间</span></li>
                        <li><span class="big">${data[i].meil}</span><br><span class="small">表显里程</span></li>
                        <li><span class="big">${data[i].pl}</span><br><span class="small">排量</span></li>
                        <li><span class="big">自动</span><br><span class="small">变速箱</span></li>
                    </ul>
                    <p class="content1">
                        车主报价： 
                       <span class="p1"> <i>¥${data[i].yprice}</i>&nbsp; 万 &nbsp; </span>
                       <del>新车指导价<i>${data[i].xprice}</i>万(含税)</del> 
                       <spn class="p2">询底价</spn> 
                    </p>
                    <div class="content2">
                        <p class="dp1">
                            <span class="ds1"> <i>1.34</i> 万开回家 </span> 
                            <span class="ds2">贷款详情&gt;</span>
                       </p>
                       <p class="dp2">
                            <span class="ds1"> 在线贷款秒批，最高可贷 <i>50万</i>  </span> 
                            <span class="ds2">测测贷款额度</span>
                       </p>
                       <div class='ddimg'></div>
                    </div>
                    <div class="content3">
                        <p>
                          <span class="dp1">服务保障</span>  
                          <i>服务费4499元起，详情可咨询购车顾问</i>
                          <span class="dp2">查看详情&gt;</span>
                        </p>
                        <ul class="detail2">
                            <li>2年4万公里保障 </li>
                            <li>30天无忧退 </li>
                            <li>专业整备 </li>
                            <li>代办过户 </li>
                            <li>调表车赔付</li>
                            <li>优质个人车 </li>
                            <li>盗抢查封 </li>
                            <li>259项检测  </li>
                        </ul>
                    </div>
                    <p class="ptop">
                        <span class="ps1">我要收藏</span> 
                        <a class="ps2">加购物车</a>
                        <a class="ps3" >我的购物车</a> 
                    </p>
                    <p class="ding">恭喜你已成功收藏！</p>
                </div>`
                this.jsx.html(str);
                //动态切换大图图片
              
                    $(".simgbox li").on({
                    'mouseover':function(){
                        $(this).addClass('special').siblings().removeClass('special');
                        
                        var srcn= $(this).children().first().attr('src'); 

                        $("#bimg img").attr('src',srcn);
                        $('.magnify img').attr('src',srcn);
                       }
                     });



                     //放大镜出现
                     $('#bimgbox').on({
                        'mouseover':function(){
                                $('#opreat').css('display','block');
                                $('.magnify').css('display','block')
                            },
                        'mouseout':function(){
                            $('#opreat').css('display','none')
                            $('.magnify').css('display','none')
                            }
                    });

                   //放大镜操作 

                    var opreat = $("#opreat");
                    var bigbox=$("#bimgbox");
                    var oimg=$('.magnify img');
                    
                    opreat.on({
                        'mousemove':(function(e){
                        
                            var distance=bigbox.position();
                            var l=distance.left;
                            var t=distance.top;
                            
                                var X =e.pageX- opreat.width() / 2-l;
                                var Y =e.pageY - opreat.height() / 2-t;
                            var X = X >= bigbox.width() - opreat.width() ? bigbox.width() - opreat.width() : X <= 0 ? 0 : X;
                            
                            var Y = Y >= bigbox.height() - opreat.height() ? bigbox.height() - opreat.height() : Y <= 0 ? 0 : Y;
                                opreat.css('left',X+'px');
                                opreat.css('top',Y+'px');
                            oimg.css('left', -2*X + "px");
                            oimg.css('top', -2*Y + "px");
                            })
            
                    });



                   //底部按钮操作
                    $('.ps1').on({
                    'click':function(){
                            $(this).css(
                                "font-size","22px"
                            ),
                            $('.ding').css(
                                'display','block'
                            )
                        },
                    'mouseout':function(){
                        $(this).css(
                            "font-size","14px"
                        ),
                        $('.ding').css(
                            'display','none'
                        )
                        }
                    });
                  $('.ps3').on({
                    'click':function(){
                        location.href='trolley.html'
                    }
                    });




                    //加入购物车
                    $('.js_x').on({
                        "click":function(e){  
                        var target = $(event.target);
                        // if(target.nodeName == "A" && target.className == "btn"){
                        if(target.is('a') && target.attr('class')=='ps2'){   
                            
                            var id = target.parent().parent().attr('data-id');
                           
                            //第一次点击的时候判断localStorage中有没有data这个key值
                              if(!localStorage.getItem('data1')){
                                //如果不存在的时候添加一个数组对象  这个对象为第一个商品的id和数量
                                
                                localStorage.setItem("data1",JSON.stringify([{id:id,num:1}]));
                               
                                }else{
                                //如果localStorage中存在这个值
                                var obj = JSON.parse(localStorage.getItem('data1'));
                                var bStop = true;
                                //遍历对比判断localStorage中是否有当前商品的id  如果存在则获取到数量进行++，然后在存入localStorage
                                for(var i=0;i<obj.length;i++){
                                    if(obj[i].id == id){
                                        bStop = false;
                                        obj[i].num++;
                                        localStorage.setItem("data1",JSON.stringify(obj));
                                        break;
                                    }
                                }
                            //遍历对比当商品没有在localStorage中的时候
                                if(bStop){
                                    //将商品id  以及商品初始数量push到数组中,然后保存到localStorage
                                    obj.push({id:id,num:1});
                                    localStorage.setItem("data1",JSON.stringify(obj));
                                }
                            }
                        
                        }
                    
                    }
                })


      //功能结束                
               }
                
           }
      
        },
       
    }   

 new  Newpage() 
},'json');



//  //加入购物车
//  oList.addEventListener("click",function(e){
//     var e = e||event;
//     var target = e.target || e.srcElement;
//     if(target.tagName == "A" && target.className == "btn"){
//         var id = target.parentNode.parentNode.getAttribute("data-id");
        
//         //第一次点击的时候判断cookie中有没有goods这个key值
//         if(!getCookie("goods")){
//             //如果不存在的时候添加一个数组对象  这个对象为第一个商品的id和数量
//          setCookie("goods",JSON.stringify([{id:id,num:1}]));
//         }else{
//             //如果cookie中存在这个值
//             var obj = JSON.parse(getCookie("goods"));
//             var bStop = true;
//             //遍历对比判断cookie中是否有当前商品的id  如果存在则获取到数量进行++，然后在存入cookie
//             for(var i=0;i<obj.length;i++){
//                 if(obj[i].id == id){
//                     bStop = false;
//                     obj[i].num++;
//                     setCookie("goods",JSON.stringify(obj));
//                     break;
//                 }
//             }
//           //遍历对比当商品没有在cookie中的时候
//             if(bStop){
//                 //将商品id  以及商品初始数量push到数组中,然后保存到cookie
//                 obj.push({id:id,num:1});
//                 setCookie("goods",JSON.stringify(obj));
//             }
//         }
       
//     }
// //          else if(target.tagName == "IMG" && target.className=="m1"){
// //          	var id=target.parentNode.parentNode.getAttribute("data-id");
// //          	location.href="detail.html?id="+Id;
// //          }
    
// }
// )






// //放大镜操作

// function Magnifier(){
//     this.init(); 
// }
// Magnifier.prototype={
//      init:function(){
//      this.Changeimg();
//      this.Arise();
//      this.Apreat();
//      },
//      //动态切换大图图片
//      Changeimg:function(){
        
//         $(".simgbox li").on({
//            'mouseover':function(){
//                $(this).addClass('special').siblings().removeClass('special');
//                var i= $(this).index()+1;
//                $("#bimg img").attr('src','../img/Dimg/1-m'+i+'.jpg');
//                $('.magnify img').attr('src','../img/Dimg/1-m'+i+'.jpg');  
//            },
        
//          })
//      },

//       //放大镜出现
//      Arise:function(){
//         $('#bimgbox').on({
//             'mouseover':function(){
//                  $('#opreat').css('display','block');
//                  $('.magnify').css('display','block')
//              },
//             'mouseout':function(){
//                 $('#opreat').css('display','none')
//                 $('.magnify').css('display','none')
//              }
//         })
//      },
//      //放大镜操作 
//      Apreat:function(){
//         var opreat = $("#opreat");
//         var bigbox=$("#bimgbox");
//         var oimg=$('.magnify img');
       
//         opreat.on({
//             'mousemove':(function(e){
            
//                 var distance=bigbox.position();
//                 var l=distance.left;
//                 var t=distance.top;
              
//                  var X =e.pageX- opreat.width() / 2-l;
//                  var Y =e.pageY - opreat.height() / 2-t;
//                 var X = X >= bigbox.width() - opreat.width() ? bigbox.width() - opreat.width() : X <= 0 ? 0 : X;
                
//                 var Y = Y >= bigbox.height() - opreat.height() ? bigbox.height() - opreat.height() : Y <= 0 ? 0 : Y;
//                  opreat.css('left',X+'px');
//                  opreat.css('top',Y+'px');
//                 oimg.css('left', -2*X + "px");
//                 oimg.css('top', -2*Y + "px");
//              })

//         })
        
//      }

     
// }

// new Magnifier();


// //底部按钮操作
// function Button(){
//     this.init();
// }
// Button.prototype={
//     init:function(){
//     this.Dclick();
//     },
//     Dclick:function(){
//         $('.ps1').on({
//             'click':function(){
//                  $(this).css(
//                      "font-size","22px"
//                  ),
//                  $('.ding').css(
//                      'display','block'
//                  )
//                 },
//             'mouseout':function(){
//                 $(this).css(
//                     "font-size","14px"
//                 ),
//                 $('.ding').css(
//                     'display','none'
//                 )
//                 }
//          }),
//         $('.ps3').on({
//             'click':function(){
//                 location.href='trolley.html'
//             }
//          })
//     }

// }
// new Button();


