const sideMenu = document.getElementById('side-menu');
const openSlide = document.getElementById('open-slide');
const btnClose = document.getElementById('btn-close');
const home = document.getElementById('homeMenu');
const myWork = document.getElementById('myWorkMenu');
const about = document.getElementById('aboutMenu');
const contact = document.getElementById('contactMenu');

openSlide.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
home.addEventListener('click', closeMenu);
myWork.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);
contact.addEventListener('click', closeMenu);



function openMenu() {
    sideMenu.style.width = '250px';    
}

function closeMenu() {
    sideMenu.style.width = '0px';    
}




// *************** Future MODAL **********************
// get modal element
let modal = document.getElementById('modal');
// get open modal button
let modalBtn = document.getElementById('modalBtn');
// get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);


// outside click listener
window.addEventListener('click', outsideClick)

// function to open modal
function openModal() {
    modal.style.display = 'block';
}

// function to close modal 
function closeModal() {
    modal.style.display = 'none';
}

//function to close modal if click in dark area or
// on the modal element
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
