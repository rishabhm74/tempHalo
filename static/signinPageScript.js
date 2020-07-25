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

var emailInputValue;
document.getElementById("emailInput").addEventListener("keyup", function(){
    emailInputValue = this.value;
    emailInputValue = emailInputValue.replace(/<|>|&|%|!|#/gi, "");
    emailInputValue = emailInputValue.replace("$", "");
    emailInputValue = emailInputValue.replace("^", "");
    emailInputValue = emailInputValue.replace("*", "");
    emailInputValue = emailInputValue.replace("+", "");
    emailInputValue = emailInputValue.replace("-", "");
    emailInputValue = emailInputValue.replace("=", "");
    emailInputValue = emailInputValue.replace("/", "");
    emailInputValue = emailInputValue.replace("?", "");
    emailInputValue = emailInputValue.replace(":", "");
    emailInputValue = emailInputValue.replace("{", "");
    emailInputValue = emailInputValue.replace("}", "");
    emailInputValue = emailInputValue.replace("[", "");
    emailInputValue = emailInputValue.replace("]", "");
    emailInputValue = emailInputValue.replace("|", "");
    emailInputValue = emailInputValue.replace(";", "");
    emailInputValue = emailInputValue.replace(",", "");
    emailInputValue = emailInputValue.replace("'", "");
    emailInputValue = emailInputValue.replace(" ", "");

    console.log(emailInputValue);
    this.value = emailInputValue;
});


document.getElementById("passwordInput").addEventListener("keyup", function(){
    this.value = this.value.replace(/<|>|&|%/gi, "");
})