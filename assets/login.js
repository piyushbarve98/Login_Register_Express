



function check(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    if(user.length<6){
        alert('Username is too short')
    }
    else if(pass.length<6){
        alert('Password is too short');
        return false;
    }
    else{
        return true;
    }
}
  