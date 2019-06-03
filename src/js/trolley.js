//页面头部渲染
var head=`<div id="fh1">
                <div class="fh4"><a href="#"><img src="../img/2.jpg" title="瓜子二手车"></a></div>
                <p id="fbei">北京 <i class="iconfont">&#xe627;</i></p>
                <ul>
                    <li><a href="../index.html" target="_blank">首页</a></li>
                    <li><a href="../list.html">我要买车</a></li>
                    <li><a href="../html/trolley.html">我的购物车</a></li>
                    <li><a href="../html/detail.html">车辆详情</a></li>
                    <li><a href="">瓜子服务</a></li>
                </ul>
                <div id="fh2">
                    <span>热线电话 400-069-6530 </span>
                    <span ><a href="#" class="md"><i class="iconfont">&#xe62b;</i> 登录</a></span>
                </div>	
        </div>`;
$('#f').html(head) ;  


    
 $.get('../json/detail.json',{},function(data){
     function  Shopping(){
          
           this.init();
           
     }
     Shopping.prototype={
         init:function(){
          this.Addcar();
          this.Alldele();
          this.Check();
          this.Add();
          this.Reduce();
          this.Dele();
         },
        
         //加入购物车操作
         Addcar:function(){
              //判断当前商品是否存在
             // console.log(localStorage.getItem('data1'))
            if(localStorage.getItem('data1')){
              //如果存在则获取到localStorage中所有的商品
                var obj = JSON.parse(localStorage.getItem('data1'));
                var oList = $("#list");
                var str = "";
                 var k=0;
               //将localStorage中的商品id与data中的商品对应下标数据进行遍历对比
                for(var i=0;i<obj.length;i++){
                      for(var j=0;j<data.length;j++){
                     //如果相同的情况下获取商品的详情信息做数据的渲染
                           
                            

                            if( obj[i].id == data[j].id){ 
                               
                                str+=`<tr data-id="${k}">
                                    <td id="td">
                                    <input type="checkbox" class="d1">
                                    <img src="${data[j].img1}" class="smallPic">
                                    </td>
                                    <td><em>￥</em><i id="yp">${data[j].yprice}</i>万</td>
                                    <td>
                                    <button class="reduce">-</button>
                                    <input type="text" value='${obj[i].num}' class="num">
                                    <button class="add">+</button>
                                    </td>
                                    <td><em>￥</em><i id="zp">${(obj[i].num*data[j].yprice).toFixed(2)}</i>万</td>
                                    <td ><a href="##" class="del">删除</a></td>
                                </tr>`
                              oList.html(str);
                              k++; 
                            }

                        }
                  }
             }  
         },


        //计算总价的公式
          Fn:function(){
              var sn = 0;
              $('#td input:checked').each(function(i) {
                 sn+=Number($(this).parent().parent().children().last().prev().children().eq(1).text());
                       
             })
             $(".zm").text((sn).toFixed(2));  
          },


         

        //单选反选
               
         Check:function(){
             var _this=this;
            var seleo=$(".d1"); 
            var all=$('.all');
            var checknum = $("input[class=d1]").size();
            $('input[class=all]').prop("checked",false);
               all.on({
                  "click":function(){
                        if($(this).is(":checked")){
                            $('input[class=d1]').each(function(){
                                $(this).prop("checked",true); 
                            });
                            $('input[class=all]').prop("checked",true);  
                        }else{
                            $("input[class=d1]").each(function () {
                                $(this).prop("checked",false);
                            } );
                            $('input[class=all]').prop("checked",false)
                        }
                        _this.Fn();   
                   }
                }),
                seleo.on({
                   
                    "click":function(){
                        if ($(this).is(":checked")){
                            if($(".d1:checked").length == checknum){
                                $(".all").prop("checked",true); 
                            }else{
                                $(".all").prop("checked",false);
                            }
                        }else{
                            if($(".d1:checked").length == checknum){ 
                                $(".all").prop("checked",true);
                            }else{
                                $(".all").prop("checked",false);
                            }	                    	
                        }
                        _this.Fn();
                    }
                })
            
         },



         //商品加减
         Add:function(){
            var _this=this;
            $(".add").on({
                 click: function(){
                 var n=$(this).prev().val();
                 var num=parseInt(n)+1;
                 if(num==0){ return;}
                 $(this).prev().val(num);
                 var prace=$(this).parent().prev().children().eq(1).text();
                 var xiaoji=(num*prace).toFixed(2);
                 $(this).parent().next().children().eq(1).text(xiaoji);
                 _this.Fn();

                 //将数值存入localStorage
                 var id1= $(this).parent().parent().attr('data-id')
                 var obj1 = JSON.parse(localStorage.getItem('data1'));
                  console.log(obj1)
                  console.log(id1)
                  console.log(obj1[id1].num) 
                  obj1[id1].num++;
                  localStorage.setItem("data1",JSON.stringify(obj1));
                }
               
            });
         },
         Reduce:function(){
            var _this=this;
            $(".reduce").on({
                 click: function(){
                 var n=$(this).next().val();
                 var num=parseInt(n)-1;
                 if(num==0){ return;}
                 $(this).next().val(num);
                 var prace=$(this).parent().prev().children().eq(1).text();
                 var xiaoji=(num*prace).toFixed(2);
                 $(this).parent().next().children().eq(1).text(xiaoji); 
                 _this.Fn();
                 //将数值存入localStorage
                 var id1= $(this).parent().parent().attr('data-id')
                 var obj1 = JSON.parse(localStorage.getItem('data1'));
                  console.log(obj1)
                  console.log(id1)
                  console.log(obj1[id1].num) 
                  obj1[id1].num--;
                  localStorage.setItem("data1",JSON.stringify(obj1));
                }
            });
         },
         
         
         //删除
         Dele:function(){
            var _this=this;
            $(".del").on({
                click: function(){
                     $(this).parent().parent().remove();
                     $(this).parent().parent().children().first().children().first().attr('checked',false);
                     _this.Fn();

                     //将对应的localStorage值删掉
                 var id1= $(this).parent().parent().attr('data-id')
                 var obj1 = JSON.parse(localStorage.getItem('data1'));
                  console.log(obj1)
                  console.log(id1)
                  console.log(obj1[id1].num) 
                 var newobj=obj1.splice(id1,1)
                 localStorage.setItem("data1",JSON.stringify( obj1));
                
                }
                
             }) 
         },
        //全部删除
        
        Alldele:function(){
            var _this=this;
            $("#de").on({
                "click":function(){
                    $('#td input:checked').each(function(){
                        $(this).parent().parent().remove();
                        $(this).parent().parent().children().first().children().first().attr('checked',false);
                        _this.Fn();
                    })
                 }
            })
        }
         
            
     }
    new  Shopping();
    
 },'json')

