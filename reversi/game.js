// Game handles output and player input
// Board stores pieces, provides information concerning all pieces
//   (valid moves for player)
// Piece places itself, is flipped by other pieces

// when piece is placed
//   cast rays in 8 directions
//   if ray hits piece of own colour
//     all pieces between are now own colour

// to calculate valid moves
//   look at all enemy pieces adjacent to an own piece
//   is valid if ray in direction of piece hits empty space
