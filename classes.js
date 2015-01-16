function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}
Cat.prototype.cuteStatement = function(){
  return this.owner + " loves " + this.name;
}

cat1 = new Cat('mittens', 'me');
console.log(cat1.cuteStatement());

Cat.prototype.cuteStatement =  function(){
  return "everybody loves " + this.name;
}

console.log(cat1.cuteStatement())

cat1.meow = function(){
  return "nyan";
}

Cat.prototype.meow = function(){
  return "meow";
}

console.log(cat1.meow());
