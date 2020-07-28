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
        document.getElementById("showMoreLetterButton").innerHTML = "Show less";
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



// document.getElementById("mainSearchBar").addEventListener("click", ()=>{
//     document.getElementById("mainSearchContainer").classList.add("expandedClass");
//     document.getElementById("overlay").style.display = "block";
//     document.body.style.height = "768px";
// });

// document.getElementById("overlay").addEventListener("click", ()=>{
//     document.getElementById("overlay").style.display = "none";
//     document.getElementById("mainSearchContainer").classList.remove("expandedClass");
//     document.body.style.height = "auto";
// });



document.getElementById("mainSearchBar").addEventListener("click", ()=>{
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
    var tempVal = document.getElementById("mainSearchBar").value;
    currentEntry += `<li class="suggestionList">${tempVal}</li>`
    document.getElementById("innerMost").innerHTML = currentEntry;
});