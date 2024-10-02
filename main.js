// JavaScript for Typed.js initialization
var typed = new Typed('.text', {
    strings: ["Web Developer", "Full Stack Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// JavaScript for opening and closing the menu
function openmenu() {
    document.getElementById("sidemenu").classList.add("active");
    document.getElementById("menuToggle").style.display = "none";
    event.preventDefault();
}

function closemenu() {
    document.getElementById("sidemenu").classList.remove("active");
    document.getElementById("menuToggle").style.display = "block";
    event.preventDefault();
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const sidemenu = document.getElementById("sidemenu");
    const menuToggle = document.getElementById("menuToggle");
    
    if (!sidemenu.contains(event.target) && event.target !== menuToggle) {
        sidemenu.classList.remove("active");
        menuToggle.style.display = "block";
    }
});

// New function to close menu when a section is clicked
function closeMenuOnSectionClick() {
    const menuLinks = document.querySelectorAll('.navbar a');
    const sidemenu = document.getElementById("sidemenu");
    const menuToggle = document.getElementById("menuToggle");

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {  // Check if it's a small screen
                sidemenu.classList.remove("active");
                menuToggle.style.display = "block";
            }
        });
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', closeMenuOnSectionClick);



// JavaScript for sending email using SMTP.js
function sendEmail() {
    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    emailjs.send('service_966ffk8', 'template_4thhsoh', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again later.');
      });

    return false; // Prevent the form from submitting normally
  }
