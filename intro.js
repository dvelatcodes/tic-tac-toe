// git config--global credential.useHttpPath true   this is used to authenticate a new user using a laptop git was used in

console.log("connected")
const gameBoard = document.querySelector(".gameboard");
const comment = document.querySelector(".comments");
const boxes = ["", "", "", "", "", "", "", "", ""];
comment.textContent = "Circle plays first"
let checker = "circle"
function createBox() {
    boxes.forEach((_box, index) => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = index;
        square.addEventListener("click", onPress)
        gameBoard.append(square)
    })
}
createBox()




function onPress(e) {
    const content = document.createElement("div");
    content.classList.add(checker);
    e.target.append(content)
    checker = e.target.firstChild.classList.value === "circle" ? ("cross") : ("circle");
    comment.textContent = checker + " turn to play"
    e.target.removeEventListener("click", onPress)
    checkWinner();
    // if (e.target.childNodes.length == 0) {
    //     if (comment.textContent === "Circle plays first" && e.target.id !== "") {
    //         content.classList.add("circle")
    //         comment.textContent = "cross turn to play"
    //         e.target.append(content)
    //         console.log(e.target.firstChild.classList.value, "val")
    //     }
    //     else if (comment.textContent === "cross turn to play" && e.target.id !== "") {
    //         content.classList.add("cross")
    //         comment.textContent = "Circle plays first"
    //         e.target.append(content)
    //         console.log(e.target.firstChild.classList.value, "val")
    //     }
    // }
}


function checkWinner() {
    const allSquares = document.querySelectorAll(".square")
    const winningVal = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
    winningVal.forEach(matchingCells => {
        const circleChecker = matchingCells.every(cell => allSquares[cell].firstChild?.classList.contains("circle"))
        if (circleChecker) {
            comment.textContent = "circle wins";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            setTimeout(() => alert(comment.textContent), 1000);
            return
        }
    });

    winningVal.forEach(matchingCells => {
        const crossChecker = matchingCells.every(cell => allSquares[cell].firstChild?.classList.contains("cross"))
        if (crossChecker) {
            comment.textContent = "cross wins"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            setTimeout(()=>alert(comment.textContent),1000)
            return
        }
    })
}
