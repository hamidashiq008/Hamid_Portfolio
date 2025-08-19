// Initialize EmailJS
(function() {
    emailjs.init("wfqLhgJOLgJhNJrfJ"); // Your EmailJS public key
})();

// Handle contact form submission with EmailJS
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.php-email-form');
    const loading = document.querySelector('.loading');
    const errorMessage = document.querySelector('.error-message');
    const sentMessage = document.querySelector('.sent-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Validate required fields
            if (!name || !email || !phone || !subject || !message) {
                errorMessage.innerHTML = 'Please fill in all required fields.';
                errorMessage.style.display = 'block';
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorMessage.innerHTML = 'Please enter a valid email address.';
                errorMessage.style.display = 'block';
                return;
            }
            
            // Basic phone validation - accepts any format
            if (phone.length < 3) {
                errorMessage.innerHTML = 'Please enter a valid phone number.';
                errorMessage.style.display = 'block';
                return;
            }
            
            // Hide error messages and show loading
            errorMessage.style.display = 'none';
            loading.style.display = 'block';
            sentMessage.style.display = 'none';
            
            // Prepare email template parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                phone_number: phone,
                subject: subject,
                message: message,
                to_email: 'hamidashiq008@gmail.com'
            };
            
            // Send email using EmailJS
            emailjs.send('service_portfolio', 'template_contact', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    loading.style.display = 'none';
                    sentMessage.innerHTML = 'Your message has been sent successfully!';
                    sentMessage.style.display = 'block';
                    form.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        sentMessage.style.display = 'none';
                    }, 5000);
                }, function(error) {
                    console.log('FAILED...', error);
                    loading.style.display = 'none';
                    errorMessage.innerHTML = 'Sorry, there was an error sending your message. Please try again later.';
                    errorMessage.style.display = 'block';
                });
        });
    }
});
