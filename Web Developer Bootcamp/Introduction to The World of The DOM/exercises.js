// Exercise 1: getElementById Practice 
const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');

// Exercise 2: querySelector Practice
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('[type="checkbox"]');

// Exercise 3: Pickles
document.querySelector('span').innerText = 'Disgusting'

// Exercise 4: Manipulating Attributes Practice
const img = document.querySelector('img');
img.src = 'https://devsprouthosting.com/images/chicken.jpg'
img.setAttribute('alt', 'chicken')