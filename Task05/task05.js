// Add any Number of Elements Using ES6

function addition1(...args) {
  let additionResult = 0;

  args.forEach((arg) => {
    additionResult += arg;
  });

  return additionResult;
}

// Add any Number of Elements Using Vanilla JS

function addition2() {
  var additionResult = 0;

  for (let i = 0; i < arguments.length; i++) {
    additionResult += arguments[i];
  }

  return additionResult;
}
console.log(addition1(1, 2, 3, 6));
console.log(addition2(1, 2, 3, 6));
