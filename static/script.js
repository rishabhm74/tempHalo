var sideMenuChecker = 0;

document.getElementById("sideMenuOpen").addEventListener("click", ()=>{
    if(sideMenuChecker == 0){
        document.body.style.marginLeft = "70%";
        document.body.style.transition = "0.7s";
        document.getElementById("sideMenu").style.transform = "transformX(70%)";
        sideMenuChecker = sideMenuChecker + 1;
    }
    else{
        document.body.style.marginLeft = "0%";
        document.body.style.transition = "0.7s";
        document.getElementById("sideMenu").style.marginLeft = "-70%";
        sideMenuChecker = sideMenuChecker - 1;
    }
});