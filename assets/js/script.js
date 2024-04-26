// Hero section validator for email
const emailFormHero = document.getElementById('emailFormHero');
const emailInputHero = document.getElementById('emailInputHero');
const emailMessageHero = document.getElementById('emailMessageHero');

emailFormHero.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInputHero.value.trim();

    if (!email) {
        emailInputHero.classList.add('is-invalid', 'email-input-invalid');
        emailMessageHero.innerText = 'Please enter your email!';
        emailMessageHero.style.display = 'block';
        emailMessageHero.style.marginTop = '-5px';
        emailMessageHero.style.marginBottom = '5px';
        emailMessageHero.style.fontSize = '0.8rem';
        emailMessageHero.style.color = 'red';
        return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
        emailInputHero.classList.add('is-invalid', 'email-input-invalid');
        emailMessageHero.innerText = 'Please check your email!';
        emailMessageHero.style.display = 'block';
        emailMessageHero.style.marginTop = '-5px';
        emailMessageHero.style.marginBottom = '5px';
        emailMessageHero.style.fontSize = '0.8rem';
        emailMessageHero.style.color = 'red';
        return;
    }

    emailFormHero.submit();
});

emailInputHero.addEventListener('input', function () {
    const email = emailInputHero.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValidEmail) {
        emailInputHero.classList.remove('is-invalid', 'email-input-invalid');
    }
    emailMessageHero.innerText = '';
    emailMessageHero.style.display = 'none';
});

// Subscription section validator for email
const emailFormSubscription = document.getElementById('emailFormSubscription');
const emailInputSubscription = document.getElementById('emailInputSubscription');
const emailMessageSubscription = document.getElementById('emailMessageSubscription');

emailFormSubscription.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInputSubscription.value.trim();

    if (!email) {
        emailInputSubscription.classList.add('is-invalid', 'email-input-invalid');
        emailMessageSubscription.innerText = 'Please enter your email!';
        emailMessageSubscription.style.display = 'block';
        emailMessageSubscription.style.marginTop = '-5px';
        emailMessageSubscription.style.marginBottom = '5px';
        emailMessageSubscription.style.fontSize = '0.8rem';
        emailMessageSubscription.style.color = 'white';
        return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
        emailInputSubscription.classList.add('is-invalid', 'email-input-invalid');
        emailMessageSubscription.innerText = 'Please check your email!';
        emailMessageSubscription.style.display = 'block';
        emailMessageSubscription.style.marginTop = '-5px';
        emailMessageSubscription.style.marginBottom = '5px';
        emailMessageSubscription.style.fontSize = '0.8rem';
        emailMessageSubscription.style.color = 'white';
        return;
    }

    emailFormSubscription.submit();
});

emailInputSubscription.addEventListener('input', function () {
    const email = emailInputSubscription.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    if (isValidEmail) {
        emailInputSubscription.classList.remove('is-invalid', 'email-input-invalid');
    }
    emailMessageSubscription.innerText = '';
    emailMessageSubscription.style.display = 'none';
});
