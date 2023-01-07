const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');

h1.textContent = `Alice A Bridge`;
//const currentyear = new Date().getFullYear();
copyright.textContent = `${new Date().getFullYear()}`;
let quantity = document.querySelector('#q').value;

document.querySelector('p').innerHTML = 'Welcome to <em>our</em> neighborhood!';