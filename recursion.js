function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  };
  return base * exponent(base, exp - 1);
};

function fibonacci(n){
  if(n <= 2){
    return [1, 1].slice(0, n);
  }
  fib = fibonacci(n - 1);
  return fib.concat(fib[fib.length - 1] + fib[fib.length - 2]);
}

// console.log(fibonacci(10))

function binarySearch(array, target){
  var i = Math.floor(array.length / 2);
  if(array[i] == target) return i;
  if (array.length === 1) return null;
  if(array[i] < target){
    array = array.slice(i, array.length);
    return binarySearch(array, target) + i;
  }else{
    array = array.slice(0, i);
    return binarySearch(array, target);
  }
}

// console.log(binarySearch([1,3,5,7,9,11], 11))

function makeChange(target, coins){
  var smallest_combo = Array(Math.floor(target/coins.slice(-1)));

  coins.forEach(function (coin) {
    if (target < coin) return;

    var next_combo = makeChange(target - coin, coins);
    if(next_combo.length < smallest_combo.length) {
      smallest_combo = next_combo.concat([coin]);
    }
  });

  return smallest_combo;
}

// console.log(makeChange(34, [10, 7, 1]))

function mergeSort(array) {
  if(array.length <= 1) return array;
  var midpoint = Math.floor(array.length / 2);

  var left = mergeSort(array.slice(0, midpoint)),
      right = mergeSort(array.slice(midpoint, array.length));

  //helper
  var result = [];
  while(left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

// console.log(mergeSort([1,8,3,4,8,6,1,7,9,6]))

function subsets(array) {
  if (array.length === 0) return [[]];

  var prev_subsets = subsets(array.slice(0, -1));
  var result = [];
  prev_subsets.forEach(function(subset) {
    result.push(subset.concat([array.slice(-1)]));
  });

  return prev_subsets.concat(result);
}

console.log(subsets([1,2,3]));
