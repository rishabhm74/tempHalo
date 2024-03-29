var sideMenuChecker = 0;
var accountMenuChecker = 0;
var allLettersVisible = 0;




document.getElementById("sideMenuOpen").addEventListener("click", ()=>{
    if(sideMenuChecker == 0){
        document.getElementById("sideMenu").style.display = "block";
        document.getElementById("sideMenuOpen").style.transform = "rotate(90deg)";
        document.getElementById("sideMenuOpenIcon").src = "static/assets/cross.svg";
        sideMenuChecker = sideMenuChecker + 1;
    }
    else{
        document.getElementById("sideMenu").style.display = "none";
        document.getElementById("sideMenuOpen").style.transform = "rotate(0deg)";
        document.getElementById("sideMenuOpenIcon").src = "static/assets/menu.svg";
        sideMenuChecker = sideMenuChecker - 1;
    }
});



document.getElementById("navLoginSignupbutton").addEventListener("click", ()=>{
    if(accountMenuChecker == 0){
        document.getElementById("navUserIcon").style.transform = "rotate(90deg)";
        document.getElementById("navUserIcon").src = "static/assets/cross.svg";
        document.getElementById("accountMenu").style.display = "block";
        document.getElementById("accountMenu").style.height = "auto";
        document.getElementById("accountMenu").style.width = "20rem";

        // document.getElementById("signInbutton").style.display = "none";
        // document.getElementById("signUpbutton").style.display = "none";
        // document.getElementById("signOutButton").style.display = "block";

        accountMenuChecker = accountMenuChecker + 1;
    }
    else{
        document.getElementById("navUserIcon").style.transform = "rotate(0deg)";
        document.getElementById("navUserIcon").src = "static/assets/user.svg";
        document.getElementById("accountMenu").style.display = "none";
        document.getElementById("accountMenu").style.height = "0";
        document.getElementById("accountMenu").style.width = "0";
        accountMenuChecker = accountMenuChecker - 1;
    }
});





document.getElementById("showMoreLetterButton").addEventListener("click", ()=>{
    if(allLettersVisible == 0){
        document.getElementById("smallLetterHolder").style.height = "auto";
        document.getElementById("smallLetterHolder").style.padding = "2rem";
        document.getElementById("smallLetterHolder").style.borderTop = "1px solid #dbdbdb";
        document.getElementById("smallLetterHolder").style.borderBottom = "1px solid #dbdbdb";
        allLettersVisible = allLettersVisible + 1;
        window.scrollTo({
            top: (document.getElementById("smallLetterHolder").offsetTop),
            behavior: 'smooth',
        });
        document.getElementById("showMoreLetterButton").innerHTML = "Hide";
    }
    else{
        document.getElementById("smallLetterHolder").style.height = "0";
        document.getElementById("smallLetterHolder").style.padding = "0";
        document.getElementById("smallLetterHolder").style.borderTop = "none";
        document.getElementById("smallLetterHolder").style.borderBottom = "none";
        allLettersVisible = allLettersVisible - 1;
        document.getElementById("showMoreLetterButton").innerHTML = "Show more";
    }
});





document.getElementById("mainSearchBar").addEventListener("focusin", ()=>{
    var temp = document.getElementById("mainSearchContainer").offsetTop;
    var temp2 =document.getElementById("navbar").clientHeight;
    var temp3 = temp - temp2 - 15;
    window.scrollTo({
        top: temp3,
        behavior: 'smooth',
    });
    document.getElementById("mainSearchContainer").classList.add("overlaySearch");
    document.getElementById("overlay").style.display = "block";
});


var currentEntry = ``;

document.getElementById("mainSearchBar").addEventListener("keyup", ()=>{
    document.getElementById("innerMost").style.border = "1px solid #e4e4e4";
    document.getElementById("innerMost").style.borderTop = "none";
    var tempVal = document.getElementById("mainSearchBar").value;
    if(tempVal.length > 0){
        if(tempVal[tempVal.length - 1] != " "){
            if(document.getElementById("innerMost").childElementCount <= 5){
                currentEntry += `<li class="suggestionList">${tempVal}</li>`
                document.getElementById("innerMost").innerHTML = currentEntry;
            }
        }
    }
    else{
        //nothing
    }

    if(tempVal.length == 0){
        document.getElementById("innerMost").innerHTML = "";
        document.getElementById("innerMost").style.border = "1px solid #e4e4e400";
        currentEntry = "";
    }
});


document.getElementById("mainSearchBar").addEventListener("focusout", ()=>{
    document.getElementById("innerMost").innerHTML = "";
    document.getElementById("innerMost").style.border = "1px solid #e4e4e400";
    currentEntry = "";
})
