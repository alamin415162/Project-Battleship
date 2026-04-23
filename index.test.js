import { Ship, GameBoard, Player} from "./gameLogic.js";



describe('Ship Class', () => {
    test('testing a ship funcitonality' , () =>{
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.damage).toBe(2);
        expect(ship.length).toBe(2)
        expect(ship.isSunk()).toBe(true)
    })
})

describe('GameBoard class' ,() => {
    test('Test for the GameBoard', () =>{
        const game = new GameBoard();

        expect(game.shipPlacement(10,10)).toBe('invalid input');
        expect(game.shipPlacement(3,3,3)).toBe(game.ships);
        expect(game.shipPlacement(3,3)).toBe('invalid input');
        expect(game.board.length).toBe(10)
        expect(game.receiveAttack(3,3)).toBe(3)
        expect(game.receiveAttack(3,3)).toBe([3,3].toString())
        expect(game.receiveAttack(4,6)).toBe('4,6')
        expect(game.gameLost()).toBe(false)
        
    })
})

describe('Player class', () => {
    test("testing player's functionality", () => {
        const player1 = new Player('alamin');

    })
})
