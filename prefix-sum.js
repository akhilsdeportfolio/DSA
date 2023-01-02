/** @format */

function prefixSum(arr) {
  arr[0] = arr[0];
  for (let i = 1; i < arr.length; i++) arr[i] = arr[i] + arr[i - 1];

  return arr;
}

const resp = prefixSum([1, 2, 3, 4, 5]);
console.log(resp);
