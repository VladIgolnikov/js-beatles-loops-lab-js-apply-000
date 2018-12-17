// add solution here
function theBeatlesPlay(musicians, instruments) {
  var roles = [];
  for (var i = 0; i < musicians.length; i++) {
    roles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return roles;
}

function johnLennonFacts() {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  var exclamations = [];
  var j = 0;
  while (j < facts.length) {
    exclamations.push(facts[j] + '!!!');
    j++;
  }
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return loveArray;
}