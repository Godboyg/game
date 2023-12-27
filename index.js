let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player  X,playerY

const winpatterns = [
    [0 , 1, 2],
    [0 , 3, 6],
    [0 , 4, 8],
    [1 , 4, 7],
    [2 , 5, 8],
    [2 , 4, 6],
    [3 , 4, 5],
    [6 , 7, 8]
];

const resetgame = () =>{
    turn0 = true;
    enablebtn();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("hello you clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disablebtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
}

const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}

resetBtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);