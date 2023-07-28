//get the password button element
//get the eyeicon element
let eyeicon = document.getElementById("eyeicon");
          let password = document.getElementById("passwordInput");
          
          eyeicon.oneclick = funtion(){
            if(password.type == "password"){
              password.type = "text";
              eyeicon.src = "eye-open.png";
            }else{
              password.type = "password";
              eyeicon.src = "eye-open.png";
            }
          }