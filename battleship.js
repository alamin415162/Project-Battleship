import { Ship, GameBoard, Player } from "./gameLogic.js"

const left = document.querySelector('#left')
const right = document.querySelector('#right')


const player1 = new Player('alamin');
const player2 = new Player('computer');

player1.field.shipPlacement(0,0,4)
player1.field.shipPlacement(6,5,5)
player1.field.shipPlacement(6,1,3)


player2.field.shipPlacement(0,0,4)
player2.field.shipPlacement(6,5,5)
player2.field.shipPlacement(6,1,3)

const status1 = document.querySelector('#plalyer1');
const status2 = document.querySelector('#plalyer2');



//player1.field.shipPlacement(1,0,3)
// player1.field.shipPlacement(8,5,3)
// player1.field.shipPlacement(3,5,2)

const items1 = Array.from(left.children);
const gridComputedStyle1 = window.getComputedStyle(left);
const columnsCount1 = gridComputedStyle1.getPropertyValue('grid-template-rows').split(' ').length;

const items2 = Array.from(right.children);
const gridComputedStyle2 = window.getComputedStyle(left);
const columnsCount2 = gridComputedStyle2.getPropertyValue('grid-template-rows').split(' ').length;


window.addEventListener('load', () => {
    const board1 = player1.field.board;
    let q = 0;
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            items1[q].textContent = board1[i][j]
            q++;
        }
    }

    const board2 = player2.field.board;
    let p = 0;
    console.log(board2.length)
    console.log(p)
    for(let x = 0; x < 10; x++){
        for(let y = 0; y < 10; y++){
            items2[p].textContent = board2[x][y]
            p++;
        }
    }


})



function nextTurn(){

}


left.addEventListener('click', (e) => {
    e.preventDefault();
    
    let index = items1.indexOf(e.target);
    let row = Math.floor( index/ columnsCount1);
    let col = (index % columnsCount1);
    

    
    if (e.target.tagName === 'DIV') {
        if (!e.target.textContent){
            e.target.textContent = "X";
            // let index = items1.indexOf(e.target);
            // let row = Math.floor( index/ columnsCount1);
            // let col = (index % columnsCount1);
            console.log(player1.field.receiveAttack(row,col))
            return;

        }
        else if(e.target.textContent !== "X"){
            e.target.style.backgroundColor = 'red'
            // let index = items1.indexOf(e.target);
            // let row = Math.floor( index/ columnsCount1);
            // let col = (index % columnsCount1);
            console.log(player1.field.receiveAttack(row,col))
            return;
        }
        else {
            // let index = items1.indexOf(e.target);
            // let row = Math.floor( index/ columnsCount1);
            // let col = (index % columnsCount1);
            console.log(player1.field.receiveAttack(row,col))
            return;
        }


    }
})
right.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'DIV') {
        if (!e.target.textContent) {
            e.target.textContent = "X";
            let index = items2.indexOf(e.target);
            let row = Math.floor( index/ columnsCount2);
            let col = (index % columnsCount2);
            player2.field.receiveAttack(row,col);
            console.log(player2.field.missedShots)
        }
        else if(e.target.textContent !== "X"){
            e.target.style.backgroundColor = 'red'
            let index = items2.indexOf(e.target);
            let row = Math.floor( index/ columnsCount2);
            let col = (index % columnsCount2);
            player2.field.receiveAttack(row,col);
        }
        else {
            return;
        }


    }
})
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