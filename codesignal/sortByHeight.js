function solution(a) {
  var people = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      people.push(a[i]);
    }
  }

  people.sort(function (a, b) {
    return a - b;
  });

  for (var j = 0; j < a.length; j++) {
    if (a[j] > 0) {
      a[j] = people.shift();
    }
  }

  return a;
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
