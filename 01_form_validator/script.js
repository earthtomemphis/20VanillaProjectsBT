const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function CheckEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
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

function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must best at least ${min} characters`
		);
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must best less than ${max} characters`
		);
	} else {
		showSuccess(input);
	}
}

function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
	}
}

function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('click', function (e) {
	e.preventDefault();

	checkRequired([username, email, password, password2]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	CheckEmail(email);
	checkPasswordsMatch(password, password2);
});

// if (username.value === '') {
// 	showError(username, 'Username is required');
// } else {
// 	showSuccess(username);
// }

// if (email.value === '') {
// 	showError(email, 'Email is required');
// } else if (!isValidEmail(email.value)) {
// 	showError(email, 'Email is not valid');
// } else {
// 	showSuccess(email);
// }

// if (password.value === '') {
// 	showError(password, 'Password is required');
// } else {
// 	showSuccess(password);
// }

// if (password2.value === '') {
// 	showError(password2, 'Confirm Password is required');
// } else {
// 	showSuccess(password2);
// }
