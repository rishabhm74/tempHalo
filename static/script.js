var sideMenuChecker = 0;

document.getElementById("sideMenuOpen").addEventListener("click", ()=>{
    if(sideMenuChecker == 0){
        document.body.style.marginLeft = "70%";
        document.body.style.transition = "0.7s";
        document.getElementById("sideMenu").style.transform = "transformX(70%)";
        document.getElementById("sideMenuOpenIcon").style.transform = "rotate(90deg)";
        document.getElementById("sideMenuOpenIcon").src = "static/assets/cross.svg";
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