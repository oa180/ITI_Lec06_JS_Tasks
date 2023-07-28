// Reverse Args #1

function reeverseArgsFunction1(...myArgs) {
  // let myArgs = [...arguments];

  let reversedArgs = myArgs;

  for (let i = 0, j = reversedArgs.length - 1; i < j && i != j; i++, j--) {
    // console.log(i, " ", j);

    const temp = reversedArgs[i];
    reversedArgs[i] = reversedArgs[j];
    reversedArgs[j] = temp;
  }

  return reversedArgs;
}

/**
 * 1 2 3 4 5 6 7

0 5
1 4
2 3
3 2

i > j 


0 6
1 5
2 4
3 3
i == j
 */

// Reverse Args #2

function reeverseArgsFunction2() {
  let myArgs = arguments;
  let reversedArgs = [];

  for (let i = myArgs.length - 1; i >= 0; i--) {
    reversedArgs.push(myArgs[i]);
  }

  return reversedArgs;
}

console.log(reeverseArgsFunction1(1, 2, 3, 4, 5, 6));
console.log(reeverseArgsFunction1(1, 2, 3, 4, 5, 6, 7));

console.log(reeverseArgsFunction2(1, 2, 3, 4, 5, 6));
console.log(reeverseArgsFunction2(1, 2, 3, 4, 5, 6, 7));
