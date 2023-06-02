
//--------------------------- NAV --------------------------

let navSmall= document.getElementById("nav_small");
let hamburgerIcon= document.getElementById("hamburger_icon");
let closeIcon= document.getElementById("close_icon");
let dropdownContent= document.getElementsByClassName("dropdown-content")[0];

navSmall.addEventListener('hover', dropdown);
function dropdown(){
    dropdownContent.style.display= "block";
}

hamburgerIcon.addEventListener("click", toonDropdown);

function toonDropdown(){
    dropdownContent.style.display= "block";
    closeIcon.style.display= "block";
    hamburgerIcon.style.display= "none";
}

closeIcon.addEventListener("click", closeDropdown);

function closeDropdown(){
    dropdownContent.style.display= "none";
    closeIcon.style.display= "none";
    hamburgerIcon.style.display= "block";
}

//-------------------------- MIJN SKILLS ------------------------------
let circularProgress = document.querySelector(".psd_circular-progress"),
    progressValue = document.querySelector(".psd_progress-value");
progressValue.style.display= "none";

let progressStartValue = 0,
    progressEndValue = 75,
    speed = 10;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue === progressEndValue){
        clearInterval(progress);
    }
}, speed);

