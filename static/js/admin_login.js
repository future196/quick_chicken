
function account_check(){
    var account = login.account.value;
    if(account.length < 1){
        document.getElementById("account_error").innerHTML="账号不能为空！";
    }
    else{
        document.getElementById("account_error").innerHTML="";
        return 1;
    }
}

function password_check(){
    var password = login.password.value;
    if(password.length < 1){
        document.getElementById("password_error").innerHTML="密码不能为空！";
    }
    else{
        document.getElementById("password_error").innerHTML="";
        return 1;
    }
    }




function check(){
account = account_check();
password = password_check();
if(account == 1 && password == 1){
return true;
}
else{
return false;
}
}
