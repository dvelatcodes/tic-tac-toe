// git config--global credential.useHttpPath true   this is used to authenticate a new user using a laptop git was used in

console.log("connected")
const gameBoard = document.querySelector(".gameboard");
const comment  = document.querySelector(".comments");
const boxes = ["", "", "", "", "", "", "", "", ""];
comment.textContent  = "Circle plays first"
console.log("jj")

(function createBox() {
    boxes.forEach((_box, index) => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = index;
        square.addEventListener("click", onPress)
        gameBoard.append(square)
    })
})()




function onPress(e){
    const content = document.createElement("div");
    if (comment === "Circle plays first") {
        content.classList.add("circle")
        comment.textContent = "cross turn to play"
    }
    if (comment === "Cross turn to play") {
        content.classList.add("cross")
        comment.textContent = "Circle plays first"
    }
    e.target.append(content)
}
