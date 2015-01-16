var _ = require('underscore');
var Piece = require('./piece.js')

var Board = function(){
  this.board = _.range(8).map(function(){
    return _.range(8).map(function(){
      return null;
    });
  });

  this.board
}

Board.prototype.validMoves = function (color) {
  
};

console.log(new Board().board)
