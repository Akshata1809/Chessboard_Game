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
 white_pawn=[];
 black_pawn=[];

for(i=0;i<8;i++)
{
    white_pawn.push(new Pawn("white",null,null,1,"whitepawn"+i));
    black_pawn.push(new Pawn("black",null,null,1,"blackpawn"+i));

}
 

const whiteking = new King("White", null,null,1,"whiteking");
const whitequeen = new Queen("White", null,null,1,"whitequeen");
const blackking = new Piece("black", null,null,1,"blackking");
const blackqueen = new Piece("black", null,null,1,"blackqueen");

white_rook=[];
white_knight=[];
white_bishop=[];
black_rook=[];
black_knight=[];
black_bishop=[];

for(i=0;i<2;i++)
{
    white_rook.push(new Pawn("black",null,null,1,"white_rook"+i));
    white_knight.push(new Pawn("black",null,null,1,"white_knight"+i));
    white_bishop.push(new Pawn("black",null,null,1,"white_bishop"+i));
    black_rook.push(new Pawn("black",null,null,1,"black_rook"+i));
    black_knight.push(new Pawn("black",null,null,1,"black_knight"+i));
    black_bishop.push(new Pawn("black",null,null,1,"black_bishop"+i));
}

console.dir(white_pawn);

  let chessBoard = function () {

    var table = document.getElementById("chesstable");
    for (var i = 0; i < 8; i++) {
        var rows = table.insertRow();
        for (var j = 0; j < 8; j++) {
            var column = rows.insertCell();
            if ((i + j) % 2 == 0) {
                column.style.backgroundColor = 'white';
            }
            else {
                column.style.backgroundColor = "black";
            }
        }
    }
    for(i=0;i<8;i++)
    {
        document.getElementById("chesstable").rows[1].cells[i].innerHTML = "<img width=50% src='images\\white_pawn.svg'>";
        document.getElementById("chesstable").rows[6].cells[i].innerHTML = "<img width=50% src='images\\black_pawn.svg'>";
    }
  

    document.getElementById("chesstable").rows[0].cells[4].innerHTML = "<img width=50% src='images\\white_king.svg'>";
    document.getElementById("chesstable").rows[0].cells[3].innerHTML = "<img width=50% src='images\\white_queen.svg'>";
    document.getElementById("chesstable").rows[0].cells[2].innerHTML = "<img width=50% src='images\\white_bishop.svg'>";
    document.getElementById("chesstable").rows[0].cells[5].innerHTML = "<img width=50% src='images\\white_bishop.svg'>";
    document.getElementById("chesstable").rows[0].cells[0].innerHTML = "<img width=50% src='images\\white_rook.svg'>";
    document.getElementById("chesstable").rows[0].cells[7].innerHTML = "<img width=50% src='images\\white_rook.svg'>";
    document.getElementById("chesstable").rows[0].cells[1].innerHTML = "<img width=50% src='images\\white_knight.svg'>";
    document.getElementById("chesstable").rows[0].cells[6].innerHTML = "<img width=50% src='images\\white_knight.svg'>";


    //document.getElementById("chesstable").rows[6].cells[0].innerHTML = "<img width=50% src='images\\black_pawn.svg'>";
   // document.getElementById("chesstable").rows[6].cells[1].innerHTML = "<img width=50% src='images\\black_pawn.svg'>";
   // document.getElementById("chesstable").rows[6].cells[2].innerHTML = "<img width=50% src='images\\black_pawn.svg'>";
   // document.getElementById("chesstable").rows[6].cells[3].innerHTML = "<img width=50% src='images\\black_pawn.svg'>";
   // document.getElementById("chesstable").rows[6].cells[4].innerHTML = "<img width=50% src='images\\black_pawn.svg'>";
   // document.getElementById("chesstable").rows[6].cells[5].innerHTML = "<img width=50% src='images\\black_pawn.svg'>";
   // document.getElementById("chesstable").rows[6].cells[6].innerHTML = "<img width=50% src='images\\black_pawn.svg'>";
   // document.getElementById("chesstable").rows[6].cells[7].innerHTML = "<img width=50% src='images\\black_pawn.svg'>";

    document.getElementById("chesstable").rows[7].cells[4].innerHTML = "<img width=50% src='images\\black_king.svg'>";
    document.getElementById("chesstable").rows[7].cells[3].innerHTML = "<img width=50% src='images\\black_queen.svg'>";
    document.getElementById("chesstable").rows[7].cells[1].innerHTML = "<img width=50% src='images\\black_knight.svg'>";
    document.getElementById("chesstable").rows[7].cells[6].innerHTML = "<img width=50% src='images\\black_knight.svg'>";
    document.getElementById("chesstable").rows[7].cells[0].innerHTML = "<img width=50% src='images\\black_rook.svg'>";
    document.getElementById("chesstable").rows[7].cells[7].innerHTML = "<img width=50% src='images\\black_rook.svg'>";
    document.getElementById("chesstable").rows[7].cells[2].innerHTML = "<img width=50% src='images\\black_bishop.svg'>";
    document.getElementById("chesstable").rows[7].cells[5].innerHTML = "<img width=50% src='images\\black_bishop.svg'>";

}
