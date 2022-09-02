/* ============================ Toggle Style Switcher ============================ */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide Style - Switcher on Scroll
let sections = document.querySelectorAll(".section");

for(let section of sections){
    section.addEventListener("scroll", () => {
        if(document.querySelector(".style-switcher").classList.contains("open")){
            document.querySelector(".style-switcher").classList.remove("open");
        } 
    });
}

/*window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});*/

/* ============================ Theme Colors ============================ */

const alternateStyles = document.querySelectorAll(".alternate-style");

function setColor(color){
    localStorage.setItem("color", color);
};

function getColor(){
   let color = localStorage.getItem("color");
    return color;
};

function setActiveStyle(color){

    setColor(color);

    alternateStyles.forEach((style) => {
        if(getColor() === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", "true");
        }
    })
}

/* ============================ Theme Light and Dark Mode ============================ */

const dayNight = document.querySelector(".day-night");



function getDarkMode(){
    let darkMode = localStorage.getItem("darkMode");
    return darkMode;
};



dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");

    if(getDarkMode() === null || getDarkMode() === "no"){
        window.localStorage.setItem("darkMode", "yes")
        document.body.classList.add("dark");
    }else{
        window.localStorage.setItem("darkMode", "no")
        document.body.classList.remove("dark");
    }
    
    console.log(getDarkMode());
    
});

window.addEventListener("load", () => {

    if(getDarkMode() === "yes"){
        document.body.classList.add("dark");
    }else{
        document.body.classList.remove("dark");
    }

    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }

    let color = getColor()

    if(color !== null){
        setActiveStyle(color);
    };

});