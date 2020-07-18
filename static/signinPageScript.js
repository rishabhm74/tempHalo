var passwordVisible = 0;


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