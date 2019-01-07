
    function telephone_check(){
        var telephone = modify.telephone.value;
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
        var username = modify.username.value;
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


    function check(){
        telephone = telephone_check();
        username = username_check();
        ensure_password = ensure_password_check();
        if(telephone == 1 && username ==1){
        return true;
        }
        else{
        return false;
        }
    }