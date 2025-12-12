let game = [
    [1,1,1],
    [1,1,1],
    [1,1,1],
];

let nbrPlays = 0;

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
    if (isSquareFree(e)) { 
        if (turn == "x") {
            e.target.innerHTML = `x`;
            savePos(row, square, turn)
            turn = "o"
        } else {
            e.target.innerHTML = `o`;
            savePos(row, square, turn)
            turn = "x"
        }

        nbrPlays++;
    }

    if (nbrPlays >= 3) {
        checkGameStatus();
    }
}

function isSquareFree(e) {
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

function checkGameStatus() {
    console.log("entrei fun");
    
    for (const row of game) {
        if (row.length = 3) {
            console.log("row = 3 yes");
            console.log(row[0], row[1],row[2]);
            
            // in a row win verification
            if ((row[0] === row[1] && row[1] === row[2]) && row[0] != 1) {
                alert("Player of the "+row[0]+" won")
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        if ((game[0][i] === game[1][i] && game[1][i] === game[2][0]) && game[0][i] != 1) {
            alert("Player of the "+game[0][i]+" won")
        }
    }
}