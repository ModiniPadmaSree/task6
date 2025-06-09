        (function () {
      'use strict';
      const form = document.getElementById('contactForm');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      const successMessage = document.getElementById('formSuccess');
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      function validateName() {
        const value = nameInput.value.trim();
        if (!value) {
          nameError.textContent = 'Please enter your name.';
          return false;
        }
        nameError.textContent = '';
        return true;
      }
      function validateEmail() {
        const value = emailInput.value.trim();
        if (!value) {
          emailError.textContent = 'Please enter your email.';
          return false;
        }
        if (!emailRegex.test(value)) {
          emailError.textContent = 'Please enter a valid email address.';
          return false;
        }
        emailError.textContent = '';
        return true;
      }
      function validateMessage(){
        const value = messageInput.value.trim();
        if (!value) {
          messageError.textContent = 'Please enter your message.';
          return false;
        }
        messageError.textContent = '';
        return true;
      }
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        if (isNameValid && isEmailValid && isMessageValid) {
          // Hide form and show success message
          form.style.display = 'none';
          successMessage.style.display = 'block';
        }
      });
      // Optional: Real-time validation on blur events
      nameInput.addEventListener('blur', validateName);
      emailInput.addEventListener('blur', validateEmail);
      messageInput.addEventListener('blur', validateMessage);
    })();