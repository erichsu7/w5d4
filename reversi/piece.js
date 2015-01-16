var Piece = function(board, location, color){
  this.location = location;
  this.color = color;
  this.board = board;

  this.board[location[0]][location[1]] = this;
};

var unit_rays = [
[ 0,  1], [ 1,  1], [ 1,  0],
[ 1, -1], [ 0, -1], [-1, -1],
[-1,  0], [-1,  1]
];

Piece.prototype.oppColor = function() {
  if(this.color === "white") this.color = "black";
  else this.color = "white";
}

Piece.prototype.rays = function() {
  unit_rays.forEach(function(ray){
    curr = [this.location[0] + ray[0], this.location[1] + ray[1]]
    if(this.board[curr[0]][curr[1]].color != this.oppColor)
  })
}

module.exports = Piece
