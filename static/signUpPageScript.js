var passwordVisible = 0;
var repasswordVisible = 0;
var firstPassword;
var reenteredPassword;


document.getElementById("passwordVisibleIcon").addEventListener("click", ()=>{
    if(passwordVisible == 0){
        document.getElementById("passwordVisibleIcon").src = "static/assets/visiblePassword.svg";
        document.getElementById("passwordInput").type = "text";
        passwordVisible = passwordVisible + 1;
    }
    else{   
        document.getElementById("passwordVisibleIcon").src = "static/assets/hiddenPassword.svg";
        document.getElementById("passwordInput").type = "password";
        passwordVisible = passwordVisible - 1;
    }
});



document.getElementById("repasswordVisibleIcon").addEventListener("click", ()=>{
    if(repasswordVisible == 0){
        document.getElementById("repasswordVisibleIcon").src = "static/assets/visiblePassword.svg";
        document.getElementById("repasswordInput").type = "text";
        repasswordVisible = repasswordVisible + 1;
    }
    else{   
        document.getElementById("repasswordVisibleIcon").src = "static/assets/hiddenPassword.svg";
        document.getElementById("repasswordInput").type = "password";
        repasswordVisible = repasswordVisible - 1;
    }
});


document.getElementById("repasswordInput").addEventListener("keyup", ()=>{
    firstPassword = document.getElementById("passwordInput").value;
    reenteredPassword = document.getElementById("repasswordInput").value;
    if(firstPassword != reenteredPassword){
        document.getElementById("passwordNotSame").style.opacity = 1;
    }
    else{
        document.getElementById("passwordNotSame").style.opacity = "0";
    }
}); 