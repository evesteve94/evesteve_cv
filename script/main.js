//koppla till conatiner
const main = document.getElementById('main');

const educationWorkDiv = document.createElement('div');
educationWorkDiv.classList.add('education-work-div');


//skapa en div + banner per sektion

//education
main.appendChild(educationWorkDiv);

const educationBanner = document.createElement('button');
educationBanner.textContent = 'e d u c a t i o n';
educationBanner.classList.add('banner');
educationWorkDiv.appendChild(educationBanner);

function clickHandlerEducation() {
    getEducation();

    educationBanner.removeEventListener('click', clickHandlerEducation);
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

function clickHandlerWork() {
    getWork();

    workBanner.removeEventListener('click', clickHandlerWork);
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

function clickHandlerSkills() {
    getSkills();

    skillsBanner.removeEventListener('click', clickHandlerSkills);
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

function clickHandlerRef() {
    getReferences();

    refBanner.removeEventListener('click', clickHandlerRef);
}

refBanner.addEventListener('click', clickHandlerRef);