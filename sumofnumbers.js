function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

function sumRecursion(data) {
  if (data.length < 1) {
    return 0;
  } else if (data.length === 1) {
    return data[0];
  }
  const newData = [];
  for (let i = 0; i < data.length - 1; i++) {
    newData[i] = data[i + 1];
  }
  return data[0] + sumRecursion(newData);
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, key) { return memo + key; }, 0);
}


const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
