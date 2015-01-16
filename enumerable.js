Array.prototype.myEach = function (func){
  for(i = 0; i < this.length; i++){
    func(this[i]);
  };
};

[1,2,3].myEach(function(el) { console.log(el); });

Array.prototype.myMap = function (func) {
  var result = [];
  function pushToArray(value) {
    result.push(func(value));
  };

  this.myEach(pushToArray);
  return result;
};

console.log([1,2,3,4].myMap(function(el) { return el * el; }));

Array.prototype.myInject = function (func) {
  var result = this.shift();
  function reduce(value) {
    result = func(result, value);
  };
  this.myEach(reduce);
  return result;
};

console.log([1, 2, 3, 4].myInject(function(a, b) { return a * b; }));
