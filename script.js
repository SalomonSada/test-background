var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.querySelector('.random');

color1.addEventListener('input', change);
color2.addEventListener('input', change);
random.addEventListener('click', azar);

function change() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  css.textContent = body.style.background + ';';

  random.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
}

function azar() {
  var color1 = getRandomColor();
  var color2 = getRandomColor();
  body.style.background =
    'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';
  css.textContent = body.style.background + ';';

  random.style.background =
    'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';
  css.textContent = body.style.background + ';';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


/**const room = [1, 2, 3, 1, 2, 1];
const cleanRoom1 = room.filter((n) => {
  for (let i = 0; i < room.length; i++) {
    return n === room[i];
  }
});
const add = (a, b) =>
  a.filter((n) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== n) {
        if (n + a[i] === b) {
          return n;
        }
      }
    }
  });
*/
