function BipartiteMatching(strArr) {
  const left = new Set();
  const right = new Set();

  strArr.forEach((element) => {
    const [a, b] = element.split("->");
    left.add(a);
    right.add(b);
  });

  return Math.min(left.size, right.size);
}

// keep this function call here
console.log(
  BipartiteMatching(["a->w", "a->x", "b->x", "b->y", "c->x", "c->z", "d->w"])
);
