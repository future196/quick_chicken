
function telephone_check(){
    var telephone = login.telephone.value;
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

function password_check(){
    var password = login.password.value;
    if(password.length < 7){
        document.getElementById("password_error").innerHTML="密码不能少于7位！";
    }
    else{
        document.getElementById("password_error").innerHTML="";
        return 1;
    }
    }


function check(){
    telephone = telephone_check();
    password = password_check();
    if(telephone == 1 && password == 1){
    return true;
    }
    else{
    return false;
    }
    }
