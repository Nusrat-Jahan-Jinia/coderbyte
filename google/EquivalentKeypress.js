function EquivalentKeypresses(strArr) {
  var key1 = strArr[0].split(",");
  var key2 = strArr[1].split(",");
  console.log(key1 + "helllo");
  console.log(key2 + "key2");

  for (i = 0; i < key1.length; i++) {
    var item = key1[i];

    if (item === "-B") {
      if (i === 0) {
        key1 = key1.slice(1);
        i -= 1;
      } else {
        key1 = key1.slice(0, i - 1).concat(key1.slice(i + 1));
        i -= 2;
      }
    }
  }

  for (var i = 0; i < key2.length; i++) {
    var item = key2[i];
    if (item === "-B") {
      if (i == 0) {
        key2 = key2.slice(1);
        i -= 1;
      } else {
        key2 = key2.slice(0, i - 1).concat(key2.slice(i + 1));
        i -= 2;
      }
    }
  }

  var str1 = key1.join("");
  var str2 = key2.join("");
  return str1 === str2;
}

console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,d,-B"]));
