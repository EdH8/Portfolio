//HAMBURGER NAVBAR

const hamburger = document.getElementsByClassName('hamburger-menu')[0]
const nav = document.getElementsByClassName('sidenav')[0]
const links = document.getElementsByClassName('nav_links')[0]
const html = document.getElementsByClassName('html')[0]

hamburger.addEventListener('click', () =>{
    nav.classList.toggle('active')
    html.classList.toggle('active')
    console.log('button clicked')
})

links.addEventListener('click', () => {
    nav.classList.toggle('active')
    hamburger.classList.toggle('active')
    html.classList.toggle('active')
    console.log('link clicked')
} )

const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
});



//FORM VALIDATION

const form = document.getElementById('CONTACT_ME');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const subject = document.getElementById('message');
const subjectMessage = document.getElementById('input_message');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value.trim();
    const subjectValue = subject.value;
    const subjectMessageValue = subjectMessage.value.trim();

    if(firstNameValue === '') {
        setError(firstName, 'First name is required');
    } else {
        setSuccess(firstName);
    }

    if(lastNameValue === '') {
        setError(lastName, 'Last name is required');
    } else {
        setSuccess(lastName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(subjectValue === '') {
        setError(subject, 'Subject is required');
    } else {
        setSuccess(subject);
    }

    if(subjectMessageValue === '') {
        setError(subjectMessage, 'Message is required');
    } else {
        setSuccess(subjectMessage);
    }

};

