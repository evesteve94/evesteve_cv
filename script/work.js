
//koppla till json-fil med async / await - get education function
async function getWork(){
    const response = await fetch('./data/work.json');

    if (response.ok){
        //hämta array
        const works = await response.json();
        console.log(works);

        //forEach loop för att skapa och tillge värde till element
        works.forEach(function(work){
            //skapa element && ge klasser
            const card = document.createElement('article');
            card.classList.add('card');

            const cardImage = document.createElement('img');
            cardImage.classList.add('logo');
            cardImage.src = work.image;

            const cardWork = document.createElement('h3');
            cardWork.textContent = work.work;

            const cardTime = document.createElement('h4');
            cardTime.textContent = work.time;

            const cardDescription = document.createElement('p');
            cardDescription.textContent = work.description;


            //append till bannern
            workDiv.appendChild(card);
            card.appendChild(cardImage);
            card.appendChild(cardWork);
            card.appendChild(cardTime);
            card.appendChild(cardDescription);

        })
    } else {
        console.log(`HTTP error message: ${response.status}`)
    }
}

function removeWork(){
    workDiv.innerHTML = '';
    workDiv.appendChild(workBanner);
}

// getWork();
