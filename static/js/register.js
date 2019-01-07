
    function telephone_check(){
        var telephone = register.telephone.value;
        if(telephone.length === 11){
            document.getElementById("telephone_error").innerHTML="";
            return 1;
        }
        else if(telephone.length < 11){
            document.getElementById("telephone_error").innerHTML="手机号码不能少于11位！";
        }
        else{
            document.getElementById("telephone_error").innerHTML="手机号码不能超过11位！";
        }
    }

    function username_check(){
        var username = register.username.value;
        if(username.length > 7){
            document.getElementById("username_error").innerHTML="用户名不能超过7个字数！";
        }
        else if(username == ""){
            document.getElementById("username_error").innerHTML="用户名不能为空！";
        }
        else{
            document.getElementById("username_error").innerHTML="";
            return 1;
        }
    }

    function password_check(){
        var password = register.password.value;
        if(password.length < 7){
            document.getElementById("password_error").innerHTML="密码不能少于7位！";
        }
        else{
            document.getElementById("password_error").innerHTML="";
            return 1;
        }
    }

    function ensure_password_check(){
        var password = register.password.value;
        var ensure_password = register.ensure_password.value;
        if(password != ensure_password){
            document.getElementById("ensure_password_error").innerHTML="密码不一致！";
        }
        else{
            document.getElementById("ensure_password_error").innerHTML="";
            return 1;
        }
    }

    function check(){
        telephone = telephone_check();
        username = username_check();
        password = password_check();
        ensure_password = ensure_password_check();
        if(telephone == 1 && username ==1 && password == 1 && ensure_password == 1){
        return true;
        }
        else{
        return false;
        }
    }


