
document.getElementById('showMessageBtn').addEventListener('click', function() {
    document.getElementById('dynamicMessage').textContent = "Adopting a dog can change your life!";
});


const adoptButtons = document.querySelectorAll('.adoptBtn');
adoptButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`Thank you for your interest in adopting ${button.parentElement.querySelector('p').textContent.split(' ')[1]}!`);
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('formMessage').textContent = `Thank you, ${name}, for reaching out! We'll contact you at ${email}.`;
});

