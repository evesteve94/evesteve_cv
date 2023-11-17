//koppla till conatiner
const main = document.getElementById('main');

//functionen är definerad i about-me.js
getAboutMe();

//skapa en div + banner per sektion

//*****EDUCATION*****
const educationWorkDiv = document.createElement('div');
educationWorkDiv.classList.add('education-work-div');
main.appendChild(educationWorkDiv);

const educationBanner = document.createElement('button');
educationBanner.textContent = 'e d u c a t i o n';
educationBanner.classList.add('banner');
educationWorkDiv.appendChild(educationBanner);

//gör min banner 'reversable' --> kan både visa och dölja innehållet i sektionen
let clickCountEducation = 0;

function clickHandlerEducation() {
    if (clickCountEducation % 2 === 0) {
        getEducation();
    } else {
        removeEducation();
    }

    clickCountEducation++;
}

educationBanner.addEventListener('click', clickHandlerEducation);


//work
const workDiv = document.createElement('div');
workDiv.classList.add('work-div');
main.appendChild(workDiv);

const workBanner = document.createElement('button');
workBanner.textContent = 'w o r k | e x p e r i e n c e';
workBanner.classList.add('banner');
workDiv.appendChild(workBanner);

//gör min banner 'reversable' --> kan både visa och dölja innehållet i sektionen
let clickCountWork = 0;

function clickHandlerWork() {
    if (clickCountWork % 2 === 0) {
        getWork();
    } else {
        removeWork();
    }

    clickCountWork++;
}

workBanner.addEventListener('click', clickHandlerWork);

//skills
const skillsBanner = document.createElement('button');
skillsBanner.classList.add('banner');
skillsBanner.textContent = 's k i l l s';

//skills banner måste vara i sin egna div för att inte påverkas av skills-div styles
const skillsBannerDiv = document.createElement('div');
skillsBannerDiv.classList.add('skills-banner-div');
main.appendChild(skillsBannerDiv);

skillsBannerDiv.appendChild(skillsBanner);

//skapa skills-div för att matcha css
const skillsDiv = document.createElement('div');
skillsDiv.classList.add('skills-div');
main.appendChild(skillsDiv);

//gör min banner 'reversable' --> kan både visa och dölja innehållet i sektionen
let clickCountSkills = 0;

function clickHandlerSkills() {
    if (clickCountSkills % 2 === 0) {
        getSkills();
    } else {
        removeSkills();
    }

    clickCountSkills++;
}

skillsBanner.addEventListener('click', clickHandlerSkills);


//references
const refBanner = document.createElement('button');
refBanner.classList.add('banner');
refBanner.textContent = 'r e f e r e n c e s';

//ref banner måste vara i sin egna div för att inte påverkas av andra div styles
const refBannerDiv = document.createElement('div');
refBannerDiv.classList.add('ref-banner-div');
main.appendChild(refBannerDiv);

refBannerDiv.appendChild(refBanner);

//skapa refs-div för att matcha css
const refsDiv = document.createElement('div');
refsDiv.classList.add('ref-card-div');
main.appendChild(refsDiv);

//gör min banner 'reversable' --> kan både visa och dölja innehållet i sektionen
let clickCountRef = 0;

function clickHandlerRef() {
    if (clickCountRef % 2 === 0) {
        getReferences();
    } else {
        removeReferences();
    }

    clickCountRef++;
}

refBanner.addEventListener('click', clickHandlerRef);
