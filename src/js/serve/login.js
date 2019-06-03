function Login(container){
    this.container = container;
    this.init();
}

Login.template = `
         <form  class="container login" id="js_login_btn">
            <div>	
                <p>用户名</p>
                <input type="text" placeholder="请输入用户名" id="login_username">
            </div>
            <div>
                <p>密码</p>
                <input type="password" placeholder="请输入密码"  id="login_password">
            </div>
            <div>
                <button type="submit" id="login_btn">登录</button>
                <button id="js_bgRegister">切换注册</button>
            </div>
        </form>`

Login.prototype = {
    init:function(){
        this.render(); 
        this.submit();
        this.handleTo();
    },
    render(){
        this.container.innerHTML = "";
        this.el = document.createElement("div");
        this.el.innerHTML = Login.template;
        this.container.appendChild(this.el)
    },
    submit(){
        var btn = document.getElementById("js_login_btn");
        this.username = document.getElementById("login_username");
        this.password = document.getElementById("login_password");
        btn.addEventListener("submit",this.handleSubmitCb.bind(this))
    },
    handleSubmitCb(e){
        e.preventDefault();

        axios({
            method:"post",
            url:"http://localhost/guazi/php/login.php",
            data:{
                username:this.username.value,
                password:this.password.value
            }
        }).
        then(this.handleLoginSuccess.bind(this))
    },
    handleLoginSuccess(data){
        if(data.status){
            location.href="http://localhost/guazi/list.html";
        }
    },
    handleTo(){
        var js_bgRegister = document.getElementById("js_bgRegister");
        js_bgRegister.addEventListener("click",this.handleToCb.bind(this))
    },
    handleToCb(){
        new Users().render(false);
    }
    
}