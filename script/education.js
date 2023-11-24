
//koppla till json-fil med async / await - get education function
async function getEducation(){
    const response = await fetch('./data/education.json');

    if (response.ok){
        //hämta array
        const educations = await response.json();
        console.log(educations);

        //forEach loop för att skapa och tillge värde till element
        educations.forEach(function(education){
            //skapa element && ge klasser
            const card = document.createElement('article');
            card.classList.add('card');

            const cardImage = document.createElement('img');
            cardImage.classList.add('logo');
            cardImage.src = education.image;

            const cardEducation = document.createElement('h3');
            cardEducation.textContent = education.education;

            const cardTime = document.createElement('h4');
            cardTime.textContent = education.time;

            const cardDescription = document.createElement('p');
            cardDescription.textContent = education.description;


            //append till bannern
            educationWorkDiv.appendChild(card);
            card.appendChild(cardImage);
            card.appendChild(cardEducation);
            card.appendChild(cardTime);
            card.appendChild(cardDescription);

        })
    } else {
        console.log(`HTTP error message: ${response.status}`)
    }
}

//få till remove när bannern klickas igen 

function removeEducation(){
    educationWorkDiv.innerHTML = '';
    educationWorkDiv.appendChild(educationBanner);
}
