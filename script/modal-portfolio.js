// Hämtar infon från alla modal-element
//In this example, I'm using the document.querySelectorAll method with the class selector (".modal") to select all elements with the class "modal". The openModalBtns and closeModalBtns are selected using attribute selectors that look for elements with IDs starting with "openModalBtn" and "closeModalBtn" respectively. The [id^='...'] in the attribute selector means "starts with." The loop then adds event listeners for each modal.
const modals = document.querySelectorAll(".modal");
const openModalBtns = document.querySelectorAll("[id^='openModalBtn']");
const closeModalBtns = document.querySelectorAll("[id^='closeModalBtn']");

// Loop through each modal and add event listeners
modals.forEach((modal, index) => {
    const openModalBtn = openModalBtns[index];
    const closeModalBtn = closeModalBtns[index];

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
        if (event.target == modal) {
            modal.classList.remove("modal-showing");
            modal.classList.add("modal");
        }
    };
});
