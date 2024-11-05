function ContactForm(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create JSON payload
    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

   

    // Send POST request to the API
    fetch('https://portfolio-app-salauddin.onrender.com/portfolio/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!'); // Show success message
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message: ' + error.message); // Show error message
    });
}
