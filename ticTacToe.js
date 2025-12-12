let game = [
    [],
    [],
    [],
];

let oddSquares = document.querySelectorAll(".odd")
let evenSquares = document.querySelectorAll(".even")
let turn = "x";

// detects click in any of the odd squares
for (const square of oddSquares) {
    square.addEventListener("click", () => {
        if (turn == "x") {
            square.innerHTML = `x`;
            turn = "o"
        } else {
            square.innerHTML = `o`;
            turn = "x"
        }

        console.log(square.parentNode.id);
    })
}

// detects click in any of the even squares
for (const square of evenSquares) {
    square.addEventListener("click", () => {
        if (turn == "x") {
            square.innerHTML = `x`;
            turn = "o"
        } else {
            square.innerHTML = `o`;
            turn = "x"
        }

        console.log(square.parentNode.id);
    })
}

