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
    document.getElementById("sidemenu").style.right = "0";
    document.getElementById("menuToggle").style.display = "none";
    document.querySelector(".navbar .bx-x").style.display = "block";
    event.preventDefault();
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
    document.getElementById("menuToggle").style.display = "block";
    document.querySelector(".navbar .bx-x").style.display = "none";
    event.preventDefault(); // Prevent default behavior (scrolling to top)
}


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
