function fibs(num) {
  const output = [];

  if (num === 0) {
    return [0];
  } else if (num === 1) {
    return [0, 1];
  }

  output.push(...fibs(num - 1));
  output.push(output[output.length - 1] + output[output.length - 2]);
  return output;
}

function fibsLoop(num) {
  const output = [0, 1, 1];
  let a = 1;
  let b = 1;
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
    output.push(b);
  }
  return output;
}

console.log(fibsLoop(20000));
