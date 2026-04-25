import { Ship, GameBoard, Player } from "./gameLogic.js"

const left = document.querySelector('#left')
const right = document.querySelector('#right')


const player1 = new Player('alamin');
const player2 = new Player('computer');

function placing(player) {
    let x = parseInt((prompt("Enter x coordinate")))
    let y = parseInt(prompt("Enter y coordinate"))
    let length = parseInt(prompt("Enter length of Your Ship"))
    player.field.shipPlacement(x, y, length);
    return;
}

// const btn1 = document.querySelector('#btn1');
// btn1.addEventListener('click', () => {
//     placing(player1);
// })
player1.field.shipPlacement(0, 0, 4)
player1.field.shipPlacement(6, 5, 5)
player1.field.shipPlacement(6, 1, 3)


player2.field.shipPlacement(0, 0, 4)
player2.field.shipPlacement(6, 5, 5)
player2.field.shipPlacement(6, 1, 3)

const status1 = document.querySelector('#player1');
const status2 = document.querySelector('#player2');



//player1.field.shipPlacement(1,0,3)
// player1.field.shipPlacement(8,5,3)
// player1.field.shipPlacement(3,5,2)

const items1 = Array.from(left.children);
const gridComputedStyle1 = window.getComputedStyle(left);
const columnsCount1 = gridComputedStyle1.getPropertyValue('grid-template-rows').split(' ').length;

const items2 = Array.from(right.children);
const gridComputedStyle2 = window.getComputedStyle(left);
const columnsCount2 = gridComputedStyle2.getPropertyValue('grid-template-rows').split(' ').length;


function randomPosition(min, max) {
    let x = Math.floor(Math.random() * (max - min))
    let y = Math.floor(Math.random() * (max - min))
    return [x, y];
}


window.addEventListener('load', () => {
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


})

const replay = document.querySelector('#replay');
replay.addEventListener('click', () => {
    location.reload();
    left.style.display = hidden;
})

const myTurn = {
    turn: true
}

// numerical representation of different scenarios
// miss a shot = 0
// hit a spot twice = 1
// hit a target = 2
// ship sank = else;


function computerPlaying(player) {
    if (myTurn.turn) {
        myTurn.turn = false;
    } else { return; }

    let [row, col] = randomPosition(0, 10);

    let index = findIndex(row,col);
    
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
        }
    }

    function findIndex(x,y){
        return (x * 10) + y;
    }


}

computerPlaying(player1)

// left.addEventListener('click', (e) => {
//     e.preventDefault();
//     //const [row, col]= randomPosition(0, 10);


//     let index = items1.indexOf(e.target);
//     let row = Math.floor(index / columnsCount1);
//     let col = (index % columnsCount1);

//     if (myTurn.turn) {
//         myTurn.turn = false;
//     }else {return;}
//     if (e.target.tagName === 'DIV') {
//         if (!e.target.textContent) {
//             e.target.textContent = "X";
//             console.log(player1.field.receiveAttack(row, col))
//             return;

//         }
//         else if (e.target.textContent !== "X") {
//             e.target.style.backgroundColor = 'red'
//             status1.textContent = player1.field.receiveAttack(row, col);
//             if (status1.textContent === "Game Over!") {
//                 status1.style.backgroundColor = 'red';
//                 status1.style.color = 'white';

//                 return;
//             }
//             return;
//         }
//         else {
//             console.log(player1.field.receiveAttack(row, col))
//             return;
//         }


//     }

// })

right.addEventListener('click', (e) => {
    e.preventDefault();

    let index = items2.indexOf(e.target);
    let row = Math.floor(index / columnsCount2);
    let col = (index % columnsCount2);

    if (!myTurn.turn) {
        myTurn.turn = true;
    } else { return }

    if (e.target.tagName === 'DIV') {
        if (!e.target.textContent) {
            e.target.textContent = "X";
            console.log(player2.field.receiveAttack(row, col))

        }
        else if (e.target.textContent !== "X") {
            e.target.style.backgroundColor = 'red'
            let temp = player2.field.receiveAttack(row, col)
            if (temp === 1) {
                console.log("spot occupied")
            } else if (temp === 2) {
                status2.textContent = "you hit a target";
            } else {
                status2.textContent = temp;
                if (status2.textContent === "Game Over!") {
                    status2.style.backgroundColor = 'red';
                    status2.style.color = 'white';
                }
            }
        }
        else {
            status2.textContent = "Spot Occupied"
            console.log(player2.field.receiveAttack(row, col))
        }


    }

    computerPlaying(player1)

})





// right.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (e.target.tagName === 'DIV') {
//         if (!e.target.textContent) {
//             e.target.textContent = "X";
//             let index = items2.indexOf(e.target);
//             let row = Math.floor( index/ columnsCount2);
//             let col = (index % columnsCount2);
//             player2.field.receiveAttack(row,col);
//             console.log(player2.field.missedShots)
//         }
//         else if(e.target.textContent !== "X"){
//             e.target.style.backgroundColor = 'red'
//             let index = items2.indexOf(e.target);
//             let row = Math.floor( index/ columnsCount2);
//             let col = (index % columnsCount2);
//             player2.field.receiveAttack(row,col);
//         }
//         else {
//             return;
//         }


//     }
// })
// const container = document.querySelector('.grid-container');
// const items = Array.from(container.children);
// const item = document.querySelector('.target-div');

// // 1. Get the number of columns from your CSS
// const gridComputedStyle = window.getComputedStyle(container);
// const columnsCount = gridComputedStyle.getPropertyValue('grid-template-columns').split(' ').length;

// // 2. Find the index of your div
// const index = items.indexOf(item); // e.g., 5 (the 6th item)

// // 3. Calculate Coordinates (1-based index like CSS)
// const row = Math.floor(index / columnsCount) + 1;
// const col = (index % columnsCount) + 1;

// console.log(`Grid Coordinates: Row ${row}, Column ${col}`);
