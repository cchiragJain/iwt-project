const createBtn = document.querySelector('.create-button');
const messageClass = document.querySelector('.message');
const linkClass = document.querySelector('.link');
const displayClass = document.querySelector('.display');
const spinnerClass = document.querySelector('.spinner');
const messageInput = document.querySelector('#message-input');
const linkInput = document.querySelector('#link-input');

// decoding message

const hashing = () => {
	const { hash } = window.location;
	const message = hash.replace('#', '');
	if (message) {
		displayClass.classList.remove('hide');
		messageClass.classList.add('hide');
		linkClass.classList.add('hide');
		const h1 = document.querySelector('h1');
		h1.innerText = atob(message);
	}
};
window.addEventListener('hashchange', hashing);

// encoding message
createBtn.addEventListener('click', e => {
	e.preventDefault();
	spinnerClass.classList.remove('hide');
	messageClass.classList.add('hide');
	setTimeout(() => {
		spinnerClass.classList.add('hide');
		const encodedString = btoa(messageInput.value);
		linkInput.value = `${window.location}#${encodedString}`;
		messageClass.classList.add('hide');
		linkClass.classList.remove('hide');
	}, 1500);
});

// copy link
const copyBtn = document.querySelector('.copy-btn');
const copy = e => {
	e.preventDefault();
	const copyText = linkInput;
	copyText.select();
	document.execCommand('copy');
	messageClass.classList.add('hide');
	linkClass.classList.remove('hide');
};
copyBtn.addEventListener('click', copy);
hashing();
