class Piece {

    constructor(color, position, image, point, name) {
        this.color = color;
        this.position = position;
        this.image = image;
        this.point = point;
        this.name = name;
    }
}

class King extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}
class Queen extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}

class Knight extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}

class Bishop extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}
class Rook extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}

class Pawn extends Piece {

    constructor(color, position, image, point, name) {
        super(color, position, image, point, name);
    }
}

//white party
const whiteking = new Piece("White", "1E","king_img",1,"king");
const whitequeen = new Piece("White", "1D","queen_img",1,"queen");
const whiterook1 = new Piece("White", "1E","king_img",1,"king");
const whiterook2 = new Piece("White", "1D","queen_img",1,"queen");
const whiteknight1 = new Piece("White", "1E","king_img",1,"king");
const whiteknight2 = new Piece("White", "1D","queen_img",1,"queen");
const whitebishop1 = new Piece("White", "1E","king_img",1,"king");
const whitebishop2 = new Piece("White", "1D","queen_img",1,"queen");
const whitepawn1 = new Piece("White", "1E","king_img",1,"king");
const whitepawn2 = new Piece("White", "1D","queen_img",1,"queen");
const whitepawn3 = new Piece("White", "1E","king_img",1,"king");
const whitepawn4 = new Piece("White", "1D","queen_img",1,"queen");
const whitepawn5 = new Piece("White", "1E","king_img",1,"king");
const whitepawn6 = new Piece("White", "1D","queen_img",1,"queen");
const whitepawn7 = new Piece("White", "1E","king_img",1,"king");
const whitepawn8 = new Piece("White", "1D","queen_img",1,"queen");

//black party

const blackking = new Piece("black", "1E","king_img",1,"king");
const blackqueen = new Piece("black", "1D","queen_img",1,"queen");
const blackrook1 = new Piece("black", "1E","king_img",1,"king");
const blackrook2 = new Piece("black", "1D","queen_img",1,"queen");
const blackknight1 = new Piece("black", "1E","king_img",1,"king");
const blackknight2 = new Piece("black", "1D","queen_img",1,"queen");
const blackbishop1 = new Piece("black", "1E","king_img",1,"king");
const blackbishop2 = new Piece("black", "1D","queen_img",1,"queen");
const blackpawn1 = new Piece("black", "1E","king_img",1,"king");
const blackpawn2 = new Piece("black", "1D","queen_img",1,"queen");
const blackpawn3 = new Piece("black", "1E","king_img",1,"king");
const blackpawn4 = new Piece("black", "1D","queen_img",1,"queen");
const blackpawn5 = new Piece("black", "1E","king_img",1,"king");
const blackpawn6 = new Piece("black", "1D","queen_img",1,"queen");
const blackpawn7 = new Piece("black", "1E","king_img",1,"king");
const blackpawn8 = new Piece("black", "1D","queen_img",1,"queen");