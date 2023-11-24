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