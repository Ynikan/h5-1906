//放大镜操作

function Magnifier(){
    this.init(); 
}
Magnifier.prototype={
     init:function(){
     this.Changeimg();
     this.Arise();
     this.Apreat();
     },
     //动态切换大图图片
     Changeimg:function(){
        
        $(".simgbox li").on({
           'mouseover':function(){
               $(this).addClass('special').siblings().removeClass('special');
               var i= $(this).index()+1;
               $("#bimg img").attr('src','../img/Dimg/1-m'+i+'.jpg');
               $('.magnify img').attr('src','../img/Dimg/1-m'+i+'.jpg');  
           },
        
         })
     },

      //放大镜出现
     Arise:function(){
        $('#bimgbox').on({
            'mouseover':function(){
                 $('#opreat').css('display','block');
                 $('.magnify').css('display','block')
             },
            'mouseout':function(){
                $('#opreat').css('display','none')
                $('.magnify').css('display','none')
             }
        })
     },
     //放大镜操作 
     Apreat:function(){
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

        })
        
     }

     
}

new Magnifier();


//底部按钮操作
function Button(){
    this.init();
}
Button.prototype={
    init:function(){
    this.Dclick();
    },
    Dclick:function(){
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
         }),
        $('.ps3').on({
            'click':function(){
                location.href='trolley.html'
            }
         })
    }

}
new Button();
