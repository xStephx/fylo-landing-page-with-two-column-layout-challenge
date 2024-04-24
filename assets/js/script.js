// Hero section email for validator
const emailFormHero = document.getElementById('emailFormHero');
const emailInputHero = document.getElementById('emailInputHero');
const emailMessageHero = document.getElementById('emailMessageHero');

emailFormHero.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInputHero.value.trim();

    if (!email) {
        emailInputHero.classList.add('is-invalid');
        emailMessageHero.innerText = 'Please enter your email!';
        emailMessageHero.style.display = 'block';
        emailMessageHero.style.marginTop = '-10px';
        emailMessageHero.style.fontSize = '0.8rem';
        return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
        emailInputHero.classList.add('is-invalid-hero');
        emailMessageHero.innerText = 'Please check your email!';
        emailMessageHero.style.display = 'block';
        emailMessageHero.style.marginTop = '-10px';
        emailMessageHero.style.fontSize = '0.8rem';
        return;
    }

    emailFormHero.submit();
});

emailInputHero.addEventListener('input', function () {
    emailInputHero.classList.remove('is-invalid-hero');
    emailMessageHero.innerText = '';
    emailMessageHero.style.display = 'none';
});