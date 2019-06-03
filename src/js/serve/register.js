function Register(container){
    this.container = container;
    this.init();
}

Register.template = `
                        <form  class="container register" id="js_register_btn">
                            <div>	
                                <p>用户名</p>
                                <input type="text" placeholder="请输入用户名" id="register_username">
                            </div>
                            <div>
                                <p>密码</p>
                                <input type="password" placeholder="请输入密码"  id="register_password">
                            </div>
                            <div>
                                <button type="submit" id="register_btn">注册</button>
                                <button id="js_bgLogin">切换登录</button>
                            </div>
                        </form>
                  `


Register.prototype = {
    init:function(){
        this.render(); 
        this.submit();
        this.handleTo();
    },
    render(){
        this.container.innerHTML = "";
        this.el = document.createElement("div");
        this.el.innerHTML = Register.template;
        this.container.appendChild(this.el)
    },
    submit(){
        var btn = document.getElementById("js_register_btn");
        this.username = document.getElementById("register_username");
        this.password = document.getElementById("register_password");
        btn.addEventListener("submit",this.handleSubmitCb.bind(this))
    },
    handleSubmitCb(e){
        //阻止默认事件
        e.preventDefault();

        axios({
            method:"post",
            url:"http://localhost/guazi/php/register.php",
            data:{
                username:this.username.value,
                password:this.password.value
            }
        }).then(this.handleRgisterSuccess.bind(this))
        

    },
    handleRgisterSuccess(data){
        if(data.status){
            
            alert("注册成功");
            setTimeout(function(){
                new Users().render(true);
            },2000)
        }
    },
    handleTo(){
        var js_bgLogin = document.getElementById("js_bgLogin");
        js_bgLogin.addEventListener("click",this.handleToCb.bind(this))
    },
    handleToCb(){
        new Users().render(true);
    }
}