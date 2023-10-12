// git config--global credential.useHttpPath true   this is used to authenticate a new user using a laptop git was used in

console.log("connected")
const gameBoard = document.querySelector(".gameboard");
const comments = document.querySelector(".comments");
const boxes = ["", "", "", "", "", "", "", "", ""];

(function createBox() {
    boxes.forEach((_box, index) => {
        const square = document.createElement("div");
        square.classList.add("square");
        gameBoard.append(square)
    })
})()
