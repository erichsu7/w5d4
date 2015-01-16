Array.prototype.bubbleSort = function() {
  var done = false;
  while(!done){
    done = true;
    for(i = 0; i < this.length - 1; i++){
      if(this[i] > this[i + 1]){
        temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        done = false;
      }
    }
  }
  return this;
}

console.log([1, 4, 5, 2, 7, 9, 3, 1].bubbleSort())

String.prototype.substrings = function(){
  var subs = [];
  for( i = 0; i < this.length; i++ ) {
    for(j = i + 1 ; j < this.length + 1; j++) {
      subs.push(this.slice(i, j));
    };
  };
  return subs;
};

console.log("cat".substrings())
