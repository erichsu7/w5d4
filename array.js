Array.prototype.uniq = function() {
  array = this;
  var uniqArray = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] === false) continue;

    uniqArray.push(array[i]);
    for (j = i+1; j < array.length; j++) {
      if (array[j] === array[i]) array[j] = false;
    }
  }

  return uniqArray
};

Array.prototype.twoSum = function() {
  array = this;
  var twoSumArray = [];

  for (i = 0; i < array.length; i++) {
    for(j = i + 1; j < array.length; j++){
      if(array[i] + array[j] == 0){
        twoSumArray.push([i, j]);
      }
    }
  }
  return twoSumArray;
};

Array.prototype.transposeArray = function() {
  array = this
  var transposeArray = []
  for(i = 0; i < array.length; i++){
    transposeArray[i] = [];
  }

  for(i = 0; i < array.length; i++){
    for(j = 0; j < array[i].length; j++){
      transposeArray[j][i] = array[i][j];
    }
  }

  return transposeArray;
}

console.log([5, 5, 3, 2, 8, 8, 6].uniq());
console.log([-1, 0, 2, -2, 1].twoSum());
console.log([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
].transposeArray());
