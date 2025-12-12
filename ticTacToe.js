let game = [
    [],
    [],
    [],
];

let oddSquares = document.querySelectorAll(".odd")
let evenSquares = document.querySelectorAll(".even")
let turn = "x";

// function for any square clicked
function square(row, square, e) {
    if (turn == "x") {
        e.target.innerHTML = `x`;
        savePos(row, square, turn)
        turn = "o"
    } else {
        e.target.innerHTML = `o`;
        savePos(row, square, turn)
        turn = "x"
    }
}

function savePos(row, square) {
    game[row-1][square-1] = turn;
    console.log(game);
}