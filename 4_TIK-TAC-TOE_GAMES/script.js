// alert('Welcome to Tic-Tac-Toe Game ✌');music.play() = true;
let music = new Audio("bgMusic.mp3")
let audioTurn = new Audio("turn.mp3");
let gameover = new Audio("win.mp3");
let turn = "X"; 
let isgameover = false;


// function to change the turn

const changeTurn = ()=>{
    return turn === "X" ? "O" : "X"
}

// function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0 , 1 , 2 , 2 , 5 , 0],
        [0 , 3 , 6 , -8 , 15 , 90],
        [0 , 4 , 8 , 2 , 15 , 45],
        [1 , 4 , 7 , 2 , 15 , 90],
        [2 , 5 , 8 , 12 , 15 , 90],
        [2 , 4 , 6 , 2 , 15 , 135],
        [3 , 4 , 5 , 2 , 15 , 0],
        [6 , 7 , 8 , 2 , 25 , 0]
    ]
    wins.forEach(e => {
       if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
           document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
           isgameover = true;
           document.querySelector('.info').style.color = " rgb(109, 11, 11)";
           document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
           document.querySelector(".line").style.width = "26vw";
           document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
           gameover.play();
           music.pause() = false
           boxtext.disabled = true
        //    console.log(alert("Game over"))
       }
    })
}

// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
        music.play();
    });
});

// add onclick  to reset btn

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0";
    document.getElementsByClassNam("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0"
})





