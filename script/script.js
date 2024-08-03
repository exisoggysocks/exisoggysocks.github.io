function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are correct
    if (username === "Exi" && password === "bigdickgang") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("hi-message").style.display = "block";
    } else {
        // Display a message for incorrect username or password
        var errorMessage = document.createElement("p");
        errorMessage.textContent = "WRONG! Get out if you don't know.";
        errorMessage.style.color = "red";

        // Change the font-family for the error message
        errorMessage.style.fontFamily = "Consolas"; // Replace with your desired font

        document.getElementById("login-form").appendChild(errorMessage);
    }
}

        
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// Function to calculate age based on birth year
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Get the element where you want to display the age
const ageElement = document.getElementById("age");

// Replace 2008 with your actual birth year
const birthYear = 2008;

// Calculate the age
const age = calculateAge(birthYear);

// Display the calculated age
ageElement.textContent = age;

// Function to handle the intersection of the "About Me" section
function handleAboutIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // The section is in the viewport
            entry.target.style.opacity = 1;
        } else {
            // The section is out of the viewport
            entry.target.style.opacity = 0.2;
        }
    });
}

// Create an Intersection Observer
const aboutObserver = new IntersectionObserver(handleAboutIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust the threshold as needed
});

// Observe the "About Me" section
const aboutSection = document.getElementById('about');
aboutObserver.observe(aboutSection);

// Function to handle the intersection of the "Facts" section and cards
function handleFactsIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // The section or card is in the viewport
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        } else {
            // The section or card is out of the viewport
            entry.target.style.opacity = 0.2;
            entry.target.style.transform = 'translateY(20px)';
        }
    });
}

// Create an Intersection Observer
const factsObserver = new IntersectionObserver(handleFactsIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust the threshold as needed
});

// Observe the "Facts" section
const factsSection = document.getElementById('facts');
factsObserver.observe(factsSection);

// Observe each individual card
const factsCards = document.querySelectorAll('.card.factsText');
factsCards.forEach((card) => {
    factsObserver.observe(card);
});