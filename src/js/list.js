
$.get('json/data.json',{},function(data){
 
   function Listpage(){
       this.pages = Math.ceil(data.length/8);
       this.list= $('.list');
       this.n=1;
       this.init();
       
   }
   Listpage.prototype={ 
     
       init:function(){ 
       this.Adda();
       this.Render(1);
       this.Aclick();
       this.Prv();
       this.Next();
       
       },
     //添加翻页按钮a标签，
       Adda:function(){
         for(var i=0;i<=this.pages-1;i++){
             $('<a>'+(i+1)+'</a>').addClass("act").insertBefore('.anniu .last')
            } 
       },
       Render: function(page){
        var str = "";
        for(var i=(page-1)*8;i<Math.min(page*8,data.length);i++){
            
            str+=`<li><a href="html/detail.html?id=${i}"><img src=${data[i].img}></a>
            <h2>${data[i].car}</h2>
            <p class="like">${data[i].year}</p>
            <div><p><span>${data[i].yprice}</span>万</p> 
            <del>${data[i].xprice}</del></div></li>`
        } 
        this.list.html(str);
       },
           //点击页码切换数据
        Aclick:function(){
          var _this=this;
          var act=$('.act');
           act.click(function(){
              _this.n= $(this).index();
              _this.Render( _this.n);
              $('.ye span').text(_this.n)
            })

       },
           //点击上一页
        Prv:function(){
          var _this=this;
          var prv=$('.first');
          prv.click(function(){
             if(_this.n==1){
                 _this.n==1
             }else{
              _this.n--
             }
              _this.Render( _this.n);
              $('.ye span').text(_this.n) 
            }) 
        },  
        //点击下一页
        Next:function(){
          var _this=this;
          var next=$('.last');
          next.click(function(){
            if(_this.n==_this.pages){
                _this.n==_this.pages
            }else{
              _this.n++
            }
              _this.Render( _this.n);
              $('.ye span').text(_this.n)
            }) 
        },
         
   }
   new Listpage();

},'json')

