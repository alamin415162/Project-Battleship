class Ship {
    constructor(length) {
        this.length = length;
        this.damage = 0;
        this.floating = true;
        this.horizontal = true;
        this.coordinates = [];
    }

    hit() {
        return this.damage++;
    }

    isSunk() {
        if (this.damage >= this.length) {
            this.floating = false;
        }

        return !this.floating;
    }



}



class GameBoard {

    constructor() {
        this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.missedShots = [];
        this.ships = []
        this.sunkShips = 0;

    }

    shipPlacement(x, y, length) {
        if (this.ships.length === 5) {
            return "All five Ships Added";
        }
        if (!isValid(x, y)) {
            return 'invalid input';
        }

        const ship = new Ship(length);
        // a logic missing to check every bit length of ships coordinates

        if (y + length - 1 > 9) {
            console.log("out of box")
            return;
        }
        for (let i = 0; i < ship.length; i++) {
            if (!isValid(x, y)) {
                console.log("Out of Box")
                return;
            }
            this.board[x][y++] = this.ships.length;
        }
        this.ships.push(ship);
        return this.ships;

        function isValid(x, y, ship) {
            if ((x || y) > 9 || (x || y) < 0) {
                return false;
            }

            return true;
        }
    }
    shipName(ship) {
        switch (ship.length) {
            case 5:
                return "carrier";

            case 4:
                return "Battleship";

            case 3:
                return "Cruiser or Submarine";

            case 2:
                return "Destroyer"

        }

    }

    // numerical representation of different scenarios
    // miss a shot = 0
    // hit a spot twice = 1
    // hit a target = 2
    // ship sank = else;

    receiveAttack(x, y) {
        if (this.board[x][y] !== null) {
            if (this.missedShots.includes([x, y].toString())) {
                return 1;
            }
            let shot = this.board[x][y];
            this.ships[shot].hit()
            if (this.ships[shot].isSunk()) {
                this.missedShots.push([x, y].toString())
                let name = this.shipName(this.ships[shot])
                //this.ships.splice(shot, 1)
                this.sunkShips++;
                return this.gameLost() ? this.gameLost() : (`you sank my ship ${name}`);

            } else {
                this.missedShots.push([x, y].toString());
            }
            // return this.ships[shot].length;
            return 2;
        }
        else {
            this.missedShots.push([x, y].toString())
            return 0;
        }




    }

    gameLost() {
        if (this.sunkShips === this.ships.length) {
            return "Game Over!";
        }
        return false;
    }
}


class Player {
    constructor(name) {
        this.player = name;
        this.field = new GameBoard()
    }

}


export { Ship, GameBoard, Player }