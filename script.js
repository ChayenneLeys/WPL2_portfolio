
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
let circularProgress = document.querySelectorAll(".psd_circular-progress")[0],
    progressValue = document.querySelectorAll(".psd_progress-value")[0];
progressValue.style.display= "none";

let progressStartValue = 0,
    progressEndValue = 75,
    speed = 5;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#2b7f4a ${progressStartValue * 3.6}deg, #ececec 0deg)`

    if(progressStartValue === progressEndValue){
        clearInterval(progress);
    }
}, speed);

let circularProgressAI = document.querySelectorAll(".ai_circular-progress")[0],
    progressValueAI = document.querySelectorAll(".ai_progress-value")[0];
progressValueAI.style.display= "none";

let progressStartValueAI = 0,
    progressEndValueAI = 65,
    speedAI = 5;

let progressAI = setInterval(() => {
    progressStartValueAI++;

    progressValueAI.textContent = `${progressStartValueAI}%`
    circularProgressAI.style.background = `conic-gradient(#2b7f4a ${progressStartValueAI * 3.6}deg, #ececec 0deg)`

    if(progressStartValueAI === progressEndValueAI){
        clearInterval(progressAI);
    }
}, speedAI);

let circularProgressXD = document.querySelectorAll(".xd_circular-progress")[0],
    progressValueXD = document.querySelectorAll(".xd_progress-value")[0];
progressValueXD.style.display= "none";

let progressStartValueXD = 0,
    progressEndValueXD = 55,
    speedXD = 5;

let progressXD = setInterval(() => {
    progressStartValueXD++;

    progressValueXD.textContent = `${progressStartValueXD}%`
    circularProgressXD.style.background = `conic-gradient(#2b7f4a ${progressStartValueXD * 3.6}deg, #ececec 0deg)`

    if(progressStartValueXD === progressEndValueXD){
        clearInterval(progressXD);
    }
}, speedXD);

//-------------------------- WPL 1 ------------------------------
let schoolBollen= document.querySelectorAll(".schoolprojecten-bollen");
let arrowLeft= document.getElementsByClassName("arrow-icon")[0];
let arrowRight= document.getElementsByClassName("arrow-icon")[1];

function getWindowWidth() {
    if (window.innerWidth!=null) {
        return window.innerWidth;
    } else {
        return document.body.clientWidth;
    }
}
if (getWindowWidth() <= 768) {
    schoolBollen.forEach((item, i) => {
        let containerDimensie = item.getBoundingClientRect();
        let containerWidth = containerDimensie.width / 2;

        arrowRight.addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
        arrowLeft.addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}
else {
    schoolBollen.forEach((item, i) => {
        let containerDimensie = item.getBoundingClientRect();
        let containerWidth = containerDimensie.width / 6;

        arrowRight.addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
        arrowLeft.addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}

//-------------------------- WPL 2 ------------------------------
let arrow2Left= document.getElementsByClassName("arrow-icon")[2];
let arrow2Right= document.getElementsByClassName("arrow-icon")[3];