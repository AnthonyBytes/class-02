'use strict';

let name = prompt('What is your name?');
alert ('Nice to meet you, ' + name + '. Please guess the following questions using "y" for yes and "n" for no.');
console.log(name);

let play = prompt('Do you think my favorite sport to play is Baseball?');
let qPlay = play.toLowerCase();
console.log(qPlay);

if(qPlay === 'y') {
  /*console.log('yes')*/
  alert('You are correct!');
} else {
  console.log('no');
  alert('You are wrong!');
}

let watch = prompt('What about my favorite sport to watch. Do you think it is baseball?');
let qWatch = watch.toLowerCase();
console.log(qWatch);

if(qWatch === 'n') {
  /*console.log('yes')*/
  alert('You are correct!');
} else {
  console.log('no');
  alert('You are wrong!');
}

let hobby = prompt('Do you think I enjoy hiking in my free time?');
let qHobby = hobby.toLowerCase();
console.log(qHobby);

if(qHobby === 'n') {
  /*console.log('yes')*/
  alert('You are correct!');
} else {
  console.log('no');
  alert('You are wrong!');
}

let food = prompt('Do you think my favorite food is fried chicken?');
let qFood = food.toLowerCase();
console.log(qFood);

if(qFood === 'y') {
  /*console.log('yes')*/
  alert('You are correct!');
} else {
  console.log('no');
  alert('You are wrong!');
}

let country = prompt('Do you think my favorite country to visit is Japan?');
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

let number = 0;

for( let i = 0; i < 4; i++ ) {
  let guess = prompt('What is my favorite number? You have 4 attempts to guess!');
  guess = Number(guess);
  number++;

  if (guess === 11) {
   alert('You got it right! Kind of amazed!');
   break;
  } else if (number === 4) {
    alert('Oh no, you were so close! My favorite number is 11.');
    break;
  } else if (guess > 11) {
    alert('Too high. Please guess lower.')
  } else if (guess < 11) {
    alert('Too low. Please guess higher.')
  }
}

let games = ['The Last of Us', 'Metal Gear Solid', 'Final Fantasy X', 'Super Mario World', 'Fallout 3', 'Mass Effect', 'Halo', 'Pokemon Blue', 'Grand Theft Auto 5', 'Legend of Zelda'];

let vGames = [];
let maxGuess = 6;

for (let i = 0; i < maxGuess; i++) {
  let guess = prompt('What is one of my favorite video games of all time? You have 6 attempts');
  if(games.includes(guess)) {
    alert('That is one of my all time favorite games! Good guess!');
    vGames.push(guess);
    break;
  } else {
    alert('Sorry, not one of my favs. Try again.')
  }
}

alert ('Thank you for visiting my site, ' + name + '. If you would like to learn more, please reach out to me using my contact info at the bottom of the page.');
