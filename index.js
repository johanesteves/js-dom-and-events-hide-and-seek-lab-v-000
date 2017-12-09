function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rank = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML)+ n
  }
  return rank;
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
