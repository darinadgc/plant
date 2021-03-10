function getRandomColor(a,b,c) {
  return 'rgb(' + a +
    ',' +
    b +
    ',' +
    c + ')';
};

getRandomColor ();
function setColor(collection, color) {
  [].forEach.call(collection, function(el) {
    el.style.backgroundColor = color;
  });
};

document.addEventListener('DOMContentLoaded', function() {for (var i = 2; i <= 5; i++);
  var leafs = document.querySelectorAll('.head li');
  var leafs2 = document.querySelectorAll('.head2 li');
  var leafs3 = document.querySelectorAll('.head3 li');
  var leafs4 = document.querySelectorAll('.head4 li');
  var leafs5 = document.querySelectorAll('.head5 li');
  var head = document.querySelectorAll('.head');
  var head2 = document.querySelectorAll('.head2');
  var head3 = document.querySelectorAll('.head3');
  var head4 = document.querySelectorAll('.head4');
  var head5 = document.querySelectorAll('.head5');
  var plant = document.querySelectorAll('.plant');
  var plant2 = document.querySelectorAll('.plant2' );
  var plant4 = document.querySelectorAll('.plant4' );

  setInterval(function() {
    setColor(leafs, getRandomColor((Math.floor(Math.random() * 191)),(Math.floor(Math.random() * 134)+150),(Math.floor(Math.random() * 217)+150)));
    setColor(leafs2, getRandomColor(255,(Math.floor(Math.random() * 184)+135),(Math.floor(Math.random() * 70))));
    setColor(leafs3, getRandomColor((Math.floor(Math.random() * 106)+150),(Math.floor(Math.random() * 70)),(Math.floor(Math.random() * 256))));
    setColor(leafs4, getRandomColor(71,(Math.floor(Math.random() * 156)),255));
    setColor(leafs5, getRandomColor(255,(Math.floor(Math.random() * 138)+150),(Math.floor(Math.random() * 212)+150)));
    setColor(head, getRandomColor((Math.floor(Math.random() * 150)+160),(Math.floor(Math.random() * 106)+150),(Math.floor(Math.random() * 56))));
    setColor(head2, getRandomColor((Math.floor(Math.random() * 150)+160),(Math.floor(Math.random() * 106)+150),(Math.floor(Math.random() * 56))));
    setColor(head3, getRandomColor((Math.floor(Math.random() * 150)+160),(Math.floor(Math.random() * 106)+150),(Math.floor(Math.random() * 56))));
    setColor(head4, getRandomColor((Math.floor(Math.random() * 150)+160),(Math.floor(Math.random() * 106)+150),(Math.floor(Math.random() * 56))));
    setColor(head5, getRandomColor((Math.floor(Math.random() * 150)+160),(Math.floor(Math.random() * 106)+150),(Math.floor(Math.random() * 56))));
    setColor(plant, getRandomColor((Math.floor(Math.random() * 0)),(Math.floor(Math.random() * 91)+134),(Math.floor(Math.random() * 27))));
    setColor(plant2, getRandomColor(0,(Math.floor(Math.random() * 91)+13),(Math.floor(Math.random() * 56))));
    setColor(plant4, getRandomColor((Math.floor(Math.random() * 25)),(Math.floor(Math.random() * 189)+189),0));
  }, 500);
});


// var stringValue = 'Строка';
// function nameOfFunction (a,b) {
// 	alert (stringValue);
// 	alert ( a * b);
// }
// nameOfFunction (4,5);