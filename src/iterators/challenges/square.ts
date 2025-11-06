function* squares(n) {
  for (let i = 1; i <= n; i++) {
    yield i ** 2;
  }
}

let sqr = squares(4);

function* take(iterable, n) {
  const it = iterable[Symbol.iterator]();

  for (let i = 0; i < n; i++) {
    const result = it.next();
    if (result.done) {
      break;
    }
    yield result.value;
  }
}

let t = take(sqr, 3);

function* chain(...iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}

let c = chain([1, 2, 3], "rene", sqr);

function* numbers(n) {
  try {
    for (let i = 1; i <= n; i++) {
      yield i;
    }
  } finally {
    console.log("cleanup");
  }
}

const n = numbers(10);

console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
n.return();
