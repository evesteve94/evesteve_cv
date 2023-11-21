// Hämtar infon från alla modal-element
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// visar modalen när knappen trycks -> ändrar class
btn.onclick = function() {
    modal.classList.add('modal-showing');
};

// stänger med stäng-knappen -> ändrar class
closeModalBtn.onclick = function() {
    modal.classList.remove('modal-showing');
    modal.classList.add('modal');
};

// stänger när användaren klickar utanför modalen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('modal-showing');
        modal.classList.add('modal');
    }
};

