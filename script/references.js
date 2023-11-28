
//koppla till json-fil med async / await - get education function
async function getReferences(){
    const response = await fetch('./data/references.json');

    if (response.ok){
        //hämta array
        const refs = await response.json();

        //forEach loop för att skapa och tillge värde till element
        refs.forEach(function(ref){
            //skapa element && ge klasser
            const card = document.createElement('article');
            card.classList.add('ref-card');

            const cardImage = document.createElement('img');
            cardImage.classList.add('logo');
            cardImage.src = ref.image;

            const cardName = document.createElement('h3');
            cardName.textContent = ref.name;

            const cardJob = document.createElement('h5');
            cardJob.textContent = ref.jobtitle;

            const cardEmail = document.createElement('h5');
            cardEmail.textContent = ref.email;

            const cardPhone = document.createElement('h5');
            cardPhone.textContent = ref.phone;


            //append till bannern
            refsDiv.appendChild(card);
            card.appendChild(cardImage);
            card.appendChild(cardName);
            card.appendChild(cardJob);
            card.appendChild(cardEmail);
            card.appendChild(cardPhone);

        })
    } else {
        console.log(`HTTP error message: ${response.status}`)
    }
}

function removeReferences(){
    refsDiv.innerHTML = '';
}
