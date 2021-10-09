const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLinks = document.querySelector('.nav-links')
const loader = document.querySelector('.loader');
const main = document.querySelector('.kaushal-website');


// loader
function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 10);
}

init();


// Navbar
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    console.log("Button is active");
    menuLinks.classList.toggle('active');
  
})


// Get a Date

const countdown = () => {
    const countDate = new Date("Dec 17, 2021 00:00:00").getTime();
    const now = new Date().getTime();

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Calculate the days

    const festDay = Math.floor(gap / day);
    console.log(festDay);


    document.querySelector(".days-remaining span").innerText = festDay;

}

countdown()


// Modal

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.querySelectorAll(".know-more");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
for (i of btn) {
    i.addEventListener('click', function () {
        console.log("Clicked");
        modal.style.display = "block";
    })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}