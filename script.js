const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitButton = document.getElementById('button');




 function showError(input, message) {
    const formControl = input.parentElement;
     formControl.className = 'form-control error';
     input.nextElementSibling.innerText = message;
     input.style.borderColor = "red";
 }


 function showSuccess(input) {
     input.nextElementSibling.innerText = "";
     input.style.borderColor = "green";
 }


 function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }


 function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      showError(input2, 'Confirm Password does not match');
    }
  }

  function checkEmail(input) {
    const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regex.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }


function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}


form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});