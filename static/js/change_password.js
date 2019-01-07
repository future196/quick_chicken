
function password_check(){
    var password = change_password.password.value;
    if(password.length < 7){
        document.getElementById("password_error").innerHTML="密码不能少于11位！";
    }
    else{
        document.getElementById("password_error").innerHTML="";
        return 1;
    }
}

function new_password_check(){
    var new_password = change_password.new_password.value;
    if(new_password.length < 7){
        document.getElementById("new_password_error").innerHTML="密码不能少于11位！";
    }
    else{
        document.getElementById("new_password_error").innerHTML="";
        return 1;
    }
}

function ensure_password_check(){
    var new_password = change_password.new_password.value;
    var ensure_password = change_password.ensure_password.value;
    if(new_password != ensure_password){
        document.getElementById("ensure_password_error").innerHTML="密码不一致！";
    }
    else{
        document.getElementById("ensure_password_error").innerHTML="";
        return 1;
    }
}


function check(){
    telephone = password_check();
    password = new_password_check();
    ensure_password_check = ensure_password_check()
    if(telephone == 1 && password == 1 && ensure_password_check == 1){
    return true;
    }
    else{
    return false;
    }
    }
