// EMAIL JS
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      'service_pw775c7',
      'template_rbf7r5r',
      '#contact-form',
      'nk3xm-10TmEmGKe6M'
    )
    .then(
      () => {
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after five  seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);

        //   Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';
      }
    );
};

contactForm.addEventListener('submit', sendEmail);
