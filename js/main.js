
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            item.classList.add('active'); 
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
        console.log('Name:', fullName);
        console.log('Email:', email);
        console.log('Message:', message);
    } else {
        alert("Please fill out all required fields.");
    }
});



