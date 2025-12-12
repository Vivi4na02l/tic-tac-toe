let game = [
    [],
    [],
    [],
];

let oddSquares = document.querySelectorAll(".odd")
let evenSquares = document.querySelectorAll(".even")
let turn = "x";

/**
 * for any square clicked
 * @param {*} row row of the square clicked
 * @param {*} square if it was the 1st, 2nd or 3rd square
 * @param {*} e event
 */
function square(row, square, e) {
    if (isSquareFree(row, square, e)) { 
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
}

function isSquareFree(row, square, e) {
    if (e.target.innerHTML == "x" || e.target.innerHTML == "o") {
        return false;
    } else {
        return true;
    }
}

function savePos(row, square) {
    game[row-1][square-1] = turn;
    console.log(game);
}