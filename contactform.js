
const contactForm = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


function errorStyle(input, message) {
    const inputParent = input.parentElement;
    inputParent.className = 'contact-form error';
    const small = inputParent.querySelector('small');
    small.innerText = message;
}

function successStyle(input) {
    const inputParent = input.parentElement;
    inputParent.className = 'contact-form success';
}


//Is required


function requiredFields(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim()=== '') {
            errorStyle(input, `${getFieldName(input)} is required`)
        } else {
            successStyle(input);
        }
    })
}


// Check email is valid

function isValidEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())) {
successStyle(input);
    } else {
        errorStyle(input, 'Email is not valid');
    }
}


//Get FieldName

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



//Check input length

function checkLength (input, min, max) {
    if (input.value.length < min) {
        errorStyle(input, `${getFieldName(input)} must be at leat ${min} characters`);
    } else if (input.value.length > max) {
        errorStyle(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        successStyle(input);
    }
}

//Generic function (simple)

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

if (username.value === '') {
   errorStyle(username, "Username is required");
} else {
   successStyle(username);
}

// if (email.value === '') {
//     errorStyle(email, 'Email is required');
// } else { 
//     isValidEmail(email);
  
// }


checkLength(username, 3, 15);

requiredFields([username, email, subject]);
isValidEmail(email);


});



