let boxes = document.querySelectorAll(".box")
let resetBtns = document.querySelector("#resetBtn")
let newGameBtn = document.querySelector("#new-btn")
let msgContent = document.querySelector(".msg-Content")
let hide = document.querySelector("hide")
let msg = document.querySelector("#msg")


let turn0 = true;

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
    turn0 = true
    anableBoxes();
    msgContent.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const anableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is > ${Winner}`;
    msgContent.classList.remove("hide");
    disableBoxes()
};

const checkWinner = () => {
    for (let pettern of WinPatterns) {
        let pos1val = boxes[pettern[0]].innerText;
        let pos2val = boxes[pettern[1]].innerText;
        let pos3val = boxes[pettern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);