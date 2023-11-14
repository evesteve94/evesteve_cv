//koppla till conatiner
const main = document.getElementById('main');

const educationWorkDiv = document.createElement('div');
educationWorkDiv.classList.add('education-work-div');


//skapa en div + banner per sektion
main.appendChild(educationWorkDiv);

const educationBanner = document.createElement('button');
educationBanner.textContent = 'e d u c a t i o n';
educationBanner.classList.add('banner');
educationWorkDiv.appendChild(educationBanner);

educationBanner.addEventListener('click', function(){
    get<getEducation();
});