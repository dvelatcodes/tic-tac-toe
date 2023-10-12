// git config--global credential.useHttpPath true   this is used to authenticate a new user using a laptop git was used in

console.log("connected")
const gameBoard = document.querySelector(".gameboard");
const comment  = document.querySelector(".comments");
const boxes = ["", "", "", "", "", "", "", "", ""];
comment.textContent  = "Circle plays first"
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




function onPress(e){
    const content = document.createElement("div");
    if(e.target.childNodes.length == 0){
    if (comment.textContent === "Circle plays first" && e.target.id !== "") {
        content.classList.add("circle")
        comment.textContent = "cross turn to play"
        e.target.append(content)
    }
    else if (comment.textContent === "cross turn to play" && e.target.id !== "") {
    content.classList.add("cross")
    comment.textContent = "Circle plays first"
    e.target.append(content)
    }
}
}
