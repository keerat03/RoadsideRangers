const mobileBtn = document.getElementById("mobile-menu");
const mobileExit = document.getElementById("mobile-exit");
const menu = document.getElementById("active-mobile-menu");
const mobileElements = document.querySelectorAll(".mobile-nav-item");
menu.style.visibility = "hidden"; 
let on = false; 

mobileBtn.addEventListener("click", () => {

    
    menu.style.visibility = "visible";
    on = true;
})
mobileExit.addEventListener("click", () => {

    menu.style.visibility = "hidden";
    on = false; 
})

mobileElements.addEventListener("click", () => {

    if(on){
        menu.style.visibility = "hidden";
    }
    
})






