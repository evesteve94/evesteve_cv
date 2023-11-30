const main = document.querySelector('main');
getProjects();

async function getProjects(){
    const response = await fetch('./data/projects.json');

    if (response.ok){
        //hämta array
        const projects = await response.json();

        //forEach loop för att skapa och tillge värde till element
        projects.forEach(function(project){
            //skapa element && ge klasser
            const projectCard = document.createElement("section");
            projectCard.classList.add(`project-card`, `card-${projects.indexOf(project) + 1}`); //ger varje nytt kort ett unikt nummer
      
            const title = document.createElement("h4");
            title.textContent = project.title;
      
            const image = document.createElement("img");
            image.setAttribute("loading", "lazy");
            image.src = project.image;
            image.alt = `${project.title} logo`;
      
            const btnInfo = document.createElement("button");
            btnInfo.classList.add("card-btn");
            //varje modal får ett unikt nummer för att kallas på/få unika evantListeners (se getModals)
            btnInfo.id = `openModalBtn${projects.indexOf(project) + 1}` 
            btnInfo.textContent = "INFO";
      
            const modal = document.createElement("div");
            modal.classList.add("modal");
            //varje modal får ett unikt nummer för att kallas på/få unika evantListeners (se getModals)
            modal.id = `myModal${projects.indexOf(project) + 1}`
            modal.innerHTML = `
              <div class="modal-content">
                <span id=closeModalBtn${projects.indexOf(project) + 1} class="close">&times;</span>
                <h4>${project.modalTitle}</h4>
                <a class="github" href="${project.gitHubLink}" target="_blank">GitHub Repo</a>
                <p>${project.description}</p>
                <a class="inside-card-btn" href="${project.link}" target="_blank">TAKE ME THERE!</a>
              </div>
            `;
      
            // Append elements to the DOM
            projectCard.appendChild(title);
            projectCard.appendChild(image);
            projectCard.appendChild(btnInfo);
            projectCard.appendChild(modal);
            main.appendChild(projectCard);
        })
    } else {
        console.log(`HTTP error message: ${response.status}`)
    }
    //kallar på modalerna
    getModals();
}    

function getModals(){
//hämtar ALLA modaler
const modals = document.querySelectorAll(".modal");
// hämtar alla öppna/stäng-knappar med attribut selektorer
//[id^='...'] <-- hittar alla id som börjar med openModalBtn & closeModalBtn
const openModalBtns = document.querySelectorAll("[id^='openModalBtn']");
const closeModalBtns = document.querySelectorAll("[id^='closeModalBtn']");

// loopar igenom varje modal och dess index (openModalBtn 1, 2, 3...) specificeras med [index]
modals.forEach((modal, index) => {
    const openModalBtn = openModalBtns[index]; //1, 2, 3...
    const closeModalBtn = closeModalBtns[index]; //1, 2, 3...

    // visar modalen när knappen trycks -> ändrar class
    openModalBtn.onclick = function () {
        modal.classList.add("modal-showing");
    };

    // stänger med stäng-knappen -> ändrar class
    closeModalBtn.onclick = function () {
        modal.classList.remove("modal-showing");
        modal.classList.add("modal");
    };

    // stänger när användaren klickar utanför modalen
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.classList.remove("modal-showing");
            modal.classList.add("modal");
        }
    };
});

// stänger alla modaler när användaren klcikar utanför modalen
window.onclick = function (event) {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.classList.remove("modal-showing");
            modal.classList.add("modal");
        }
    });
};
}