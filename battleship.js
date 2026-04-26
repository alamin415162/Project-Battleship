import { Ship, GameBoard, Player } from "./gameLogic.js"


// declared variables from the dom
const left = document.querySelector('#left')
const right = document.querySelector('#right')


const player1 = new Player('alamin');
const player2 = new Player('computer');


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

const status1 = document.querySelector('#player1');
const status2 = document.querySelector('#player2');


const items1 = Array.from(left.children);
const gridComputedStyle1 = window.getComputedStyle(left);
const columnsCount1 = gridComputedStyle1.getPropertyValue('grid-template-rows').split(' ').length;

const items2 = Array.from(right.children);
const gridComputedStyle2 = window.getComputedStyle(left);
const columnsCount2 = gridComputedStyle2.getPropertyValue('grid-template-rows').split(' ').length;


const replay = document.querySelector('#replay');




// functionalities to manage the game
function placingShip(player) {
    let x = parseInt((prompt("Enter x coordinate")))
    let y = parseInt(prompt("Enter y coordinate"))
    let length = parseInt(prompt("Enter length of Your Ship"))
    player.field.shipPlacement(x, y, length);
    return;
}

function randomPosition(min, max) {
    let x = Math.floor(Math.random() * (max - min))
    let y = Math.floor(Math.random() * (max - min))
    return [x, y];
}


function computerPlaying(player) {
    if (!myTurn.turn  && myTurn.gameOver === false) {
        myTurn.turn = true;
    } else { return; }

    let [row, col] = randomPosition(0, 10);

    let index = findIndex(row, col);

    const temp = player.field.receiveAttack(row, col);
    if (temp === 1) {
        status1.textContent = "Spot Occupied";
        items1[index].style.setProperty('background-Color', 'blue', 'important');
        myTurn.turn = true;
        computerPlaying(player)
    } else if (temp === 2) {
        status1.textContent = "You hit a target";
        items1[index].style.setProperty('background-Color', 'red');
    } else if (temp === 0) {
        items1[index].style.setProperty('background-Color', 'black');
    } else {
        status1.textContent = temp;
        if (status2.textContent === "Game Over!") {
            status2.style.backgroundColor = 'red';
            status2.style.color = 'white';
            myTurn.gameOver = true;
        }
    }

    function findIndex(x, y) {
        return (x * 10) + y;
    }


}
// a swtich object
const myTurn = {
    turn: true,
    gameOver: false
}




// event listeners
btn2.addEventListener("click", () => {
    placingShip(player2);
    
})

btn1.addEventListener("click", () => {
    placingShip(player1);
})


right.addEventListener('click', (e) => {
    e.preventDefault();

    let index = items2.indexOf(e.target);
    let row = Math.floor(index / columnsCount2);
    let col = (index % columnsCount2);

    if (myTurn.turn && myTurn.gameOver === false) {
        myTurn.turn = false;
    } else { return }

    if (e.target.tagName === 'DIV') {
        if (!e.target.textContent) {
            e.target.textContent = "X";
            player2.field.receiveAttack(row, col)

        }
        else if (e.target.textContent !== "X") {
            e.target.style.backgroundColor = 'red'
            let temp = player2.field.receiveAttack(row, col)
            console.log(temp)
            if (temp === 1) {
                console.log("spot occupied")
            } else if (temp === 2) {
                status2.textContent = "you hit a target";
            } else {
                status2.textContent = temp;
                if (status2.textContent === "Game Over!") {
                    status2.style.backgroundColor = 'red';
                    status2.style.color = 'white';
                    myTurn.gameOver = true;
                }
            }
        }
        else {
            status2.textContent = "Spot Occupied"
            player2.field.receiveAttack(row, col)
        }


    }

    computerPlaying(player1)

})



replay.addEventListener('click', () => {
    
    const board1 = player1.field.board;
    let q = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            items1[q].textContent = board1[i][j]
            q++;
        }
    }

    const board2 = player2.field.board;
    let p = 0;
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            items2[p].textContent = board2[x][y]
            p++;
        }
    }
   // location.reload();

})

