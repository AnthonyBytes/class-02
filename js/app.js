'use strict'

let name = prompt('What is your name?');
alert ('Nice to meet you, ' + name + '. Please guess the following questions using "y" for yes and "n" for no.');
console.log(name)

let play = prompt('Do you think my favorite sport to play is Baseball?');
let qPlay = play.toLowerCase();
console.log(qPlay);

if(qPlay === 'y') {
  /*console.log('yes')*/
  alert('You are correct!')
} else {
  console.log('no')
  alert('You are wrong!')
}

let watch = prompt('What about my favorite sport to watch. Do you think it is baseball?');
let qWatch = watch.toLowerCase();
console.log(qWatch);

if(qWatch === 'n') {
  /*console.log('yes')*/
  alert('You are correct!')
} else {
  console.log('no')
  alert('You are wrong!')
}

let hobby = prompt('Do you think I enjoy hiking in my free time?');
let qHobby = hobby.toLowerCase();
console.log(qHobby);

if(qHobby === 'n') {
  /*console.log('yes')*/
  alert('You are correct!')
} else {
  console.log('no')
  alert('You are wrong!')
}

let food = prompt('Do you think my favorite food is fried chicken?');
let qFood = food.toLowerCase();
console.log(qFood)

if(qFood === 'y') {
  /*console.log('yes')*/
  alert('You are correct!')
} else {
  console.log('no')
  alert('You are wrong!')
}

let country = prompt('Do you think my favorite country to visit is Japan?')
let qCountry = country.toLocaleLowerCase();
console.log(country);

/* hiding so I can try a switch

if(qCountry === 'y') {
  console.log('yes')
  alert('You are correct!')
} else {
  console.log('no')
  alert('You are wrong!')
} */

switch(qCountry) {
  case 'y':
    /*console.log('yes');*/
    alert('You are correct!');
    break;
  default:
    /*console.log('no');*/
    alert('You are wrong!');
    break;
}

alert ('Thank you for visiting my site, ' + name + '. If you would like to learn more, please reach out to me using my contact info at the bottom of the site.');
