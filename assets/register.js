
function check(){
    
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var gmail = document.getElementById('gmail').value;
    var rpass= document.getElementById('rpass').value;
    var fname = document.getElementById('fname').value;

    if(user.trim()==='' || pass.trim()==='' || gmail.trim()==='' || fname.trim() ==='' ){
        alert('Input field is Empty!!');
       
        return false;
    }
    else if(fname.match(/[^a-zA-Z ]+$/)){
        alert('Invalid Name \nName only contain letters ');
        return false;
    }
    else if(pass.length<6){
        alert('Password is too short');
        return false;
    }

    else if(user.length<6){
        alert('Username is too short')
    }
    else if(pass!=rpass){

        alert('Failed to register \nRe-Enter the same password!!');
        
        return false;
    }
    else{
        return true;
    }
    

}