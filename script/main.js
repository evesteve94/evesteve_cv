//koppla till conatiner
const main = document.getElementById('main');

    //lägg till innehåll för about-me
    const aboutMeDiv = document.createElement('div');
    aboutMeDiv.classList.add('about-me-div');
    main.appendChild(aboutMeDiv);
    
    const aboutArticle = document.createElement('article');
    aboutArticle.classList.add('article');
    
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-logos');
    //bilder
    const stevieImg = document.createElement('img');
    stevieImg.classList.add('stevie-logo');
    stevieImg.src = './images/car.jpg';
    imgDiv.appendChild(stevieImg);
    
    const evaImg = document.createElement('img');
    evaImg.classList.add('eva-logo');
    evaImg.src = './images/profile-test-cropped.png';
    imgDiv.appendChild(evaImg);
    
    const stevieGrassImg = document.createElement('img');
    stevieGrassImg.classList.add('stevie-logo');
    stevieGrassImg.src = './images/grass.jpg';
    imgDiv.appendChild(stevieGrassImg);
    
    aboutArticle.appendChild(imgDiv);
    
    const aboutH3 = document.createElement('h3');
    aboutH3.textContent = 'Eva Björling - future developer';
    aboutArticle.appendChild(aboutH3);
    
    const aboutPara = document.createElement('p');
    aboutPara.textContent = "I am a future web developer based in Malmö, excited to take on new challenges in the world of tech. Coding under the alias 'evesteve' I hope to learn many new skills within fullstack development with a special focus on JavaScript. In just two years time, my dog Stevie and I, will be coding full-time. Wanna take us on as part of your team?";
    aboutArticle.appendChild(aboutPara);
    
    const contactBtn = document.createElement('a');
    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = 'CONTACT ME';
    aboutArticle.appendChild(contactBtn);
    
    aboutMeDiv.appendChild(aboutArticle);

//skapa en div + banner per sektion

//education
const educationWorkDiv = document.createElement('div');
educationWorkDiv.classList.add('education-work-div');
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