var sideMenuChecker = 0;

document.getElementById("sideMenuOpen").addEventListener("click", ()=>{
    if(sideMenuChecker == 0){
        document.body.style.marginLeft = "70%";
        document.body.style.transition = "0.7s";
        document.getElementById("sideMenu").style.transform = "transformX(70%)";
        document.getElementById("sideMenuOpenIcon").style.transform = "rotate(180deg)";
        document.getElementById("sideMenuOpenIcon").src = "static/assets/rightArrow.svg";
        sideMenuChecker = sideMenuChecker + 1;
    }
    else{
        document.body.style.marginLeft = "0%";
        document.body.style.transition = "0.7s";
        document.getElementById("sideMenu").style.marginLeft = "-70%";
        document.getElementById("sideMenuOpenIcon").style.transform = "rotate(0deg)";
        document.getElementById("sideMenuOpenIcon").src = "static/assets/menu.svg";
        sideMenuChecker = sideMenuChecker - 1;
    }
});


document.getElementById("mainSearchBar").addEventListener("click", () =>{
    document.getElementById("mainSearchContainer").classList.add("expandedClass");
    // document.getElementById("searchSupport").style.display = "none";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("mainSearchContainer").style.boxShadow = "0px 0px 0px #00000000";
    document.getElementById("mainSearchContainer").style.borderRadius = "0rem";
    document.getElementById("mainSearchContainer").style.borderBottom = "2px solid orange";
})

document.getElementById("closeMainSearchContainer").addEventListener("click", () =>{
    document.getElementById("mainSearchContainer").classList.remove("expandedClass");
    document.getElementById("mainSearchBar").value = "";
    // document.getElementById("searchSupport").style.display = "block";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("mainSearchContainer").style.boxShadow = "1rem 1rem 15px #00000013";
    document.getElementById("mainSearchContainer").style.borderRadius = "0.3rem";
    document.getElementById("mainSearchContainer").style.border = "none";
})