function* foo() {
  if (6 > 5) yield 3;

  return 10;
}

const another = () => {
  const _ = foo();
  const t = _.next();
  if (t.value != undefined) {
    console.log(t.value);
  } else {
    console.log(t);
  }
  const b = _.next();
  if (b.value != undefined) {
    console.log(b.value);
  } else {
    console.log(b);
  }
};

another();
