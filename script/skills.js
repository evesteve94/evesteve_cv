
//koppla till json-fil med async / await - get education function
async function getSkills(){
    const response = await fetch('./data/skills.json');
    //console.log(response);

    if (response.ok){
        //hämta array
        const skills = await response.json();
        console.log(skills);

        //forEach loop för att skapa och tillge värde till element
        skills.forEach(function(skill){
            //skapa element && ge klasser
            const card = document.createElement('article');
            card.classList.add('card');

            const cardImage = document.createElement('img');
            cardImage.classList.add('logo');
            cardImage.src = skill.image;

            const techSkills = document.createElement('h3');
            techSkills.classList.add('tech-skills-h4');
            techSkills.textContent = skill.title;

            //skapa diven som håller listorna på plats
            const techLists = document.createElement('div');
            techLists.classList.add('tech-lists');

            const firstList = document.createElement('ul');
            const secondList = document.createElement('ul');

            for (let i = 0; i < skill.skills.length; i++){
                const skillItem = document.createElement('li');
                skillItem.textContent = skill.skills[i];
                firstList.appendChild(skillItem);
            }

            for (let i = 0; i < skill.levels.length; i++){
                const levelItem = document.createElement('li');
                levelItem.textContent = skill.levels[i];
                secondList.appendChild(levelItem);
            }

            //append till bannern
            skillsDiv.appendChild(card);
            card.appendChild(cardImage);
            card.appendChild(techSkills);
            techLists.appendChild(firstList);
            techLists.appendChild(secondList);
            card.appendChild(techLists);


        })
    } else {
        console.log(`HTTP error message: ${response.status}`)
    }
}

// getSkills();
